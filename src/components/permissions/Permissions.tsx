"use client";

import { useState, useMemo, Fragment } from "react";
import { motion } from "framer-motion";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import SortableHeader from "./SortableHeader";
import ExpandableRow from "./ExpandableRow";
import DeleteModal from "./DeleteModal";
import { permissionsData } from "./data";
import CheckBox from "./CheckBox";

const roleColors: Record<string, string> = {
  مدیر: " text-pink",
  "توسعه-دهنده": " text-gray-500", // Using regular hyphen
  "مدیر سیستم": "text-cyan-500",
};

export default function PermissionsPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [bulkDelete, setBulkDelete] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc" as "asc" | "desc",
  });
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const filteredPermissions = useMemo(() => {
    const data = permissionsData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortConfig.key) {
      data.sort((a, b) => {
        if (
          a[sortConfig.key as keyof typeof a]! >
          b[sortConfig.key as keyof typeof b]!
        ) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        if (
          a[sortConfig.key as keyof typeof a]! <
          b[sortConfig.key as keyof typeof b]!
        ) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        return 0;
      });
    }
    return data;
  }, [searchQuery, sortConfig]);
  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  const handleDelete = (id: number | "bulk") => {
    if (id === "bulk") {
      console.log("Bulk Deleting IDs:", selectedIds);
      setSelectedIds([]);
    } else {
      console.log("Deleting Single ID:", id);
    }
    setDeleteId(null);
    setBulkDelete(false);
  };
  return (
    <div className='p-6 space-y-6'>
      <motion.div
        className='shadow-lg rounded-2xl overflow-hidden'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        {/* Top controls */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-center p-4 gap-4'>
          <h2 className='text-xl font-bold'>لیست دسترسی‌ها</h2>
          <input
            type='text'
            className='border border-light/30 p-2 placeholder:text-light bg-transparent rounded-md text-sm w-full md:w-64'
            placeholder='جستجو...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {selectedIds.length > 0 && (
            <button
              className='bg-pink/80 text-lighter px-4 py-2 rounded-md hover:bg-pink text-sm'
              onClick={() => setBulkDelete(true)}>
              حذف انتخاب شده ({selectedIds.length})
            </button>
          )}
        </div>

        {/* Table */}
        <div className='scrollbar-hide overflow-x-auto bg-lighter dark:bg-dark '>
          <table className='min-w-full text-sm text-right'>
            <thead className=''>
              <tr className='border-b border-light/50'>
                <th className='p-4'>
                  <CheckBox
                    selectedIds={selectedIds}
                    filteredPermissions={filteredPermissions}
                    setSelectedIds={setSelectedIds}
                    isChecked={
                      selectedIds.length === filteredPermissions.length &&
                      filteredPermissions.length > 0
                    }
                  />
                </th>
                <SortableHeader
                  label='نام'
                  sortKey='name'
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
                <SortableHeader
                  label='اختصاص داده شده به'
                  sortKey='assignedTo'
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
                <SortableHeader
                  label='تاریخ ایجاد'
                  sortKey='createdAt'
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
                <SortableHeader
                  label='آخرین بروزرسانی'
                  sortKey='updatedAt'
                  currentSort={sortConfig}
                  onSort={handleSort}
                />
                <th className='p-4 whitespace-nowrap'>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredPermissions.map((item, index) => (
                <Fragment key={index}>
                  <motion.tr
                    key={index}
                    className='border-b border-light/30 duration-200 hover:shadow dark:shadow-light/50 transition-all cursor-pointer'>
                    <td className='p-4'>
                      <CheckBox
                        selectedIds={selectedIds}
                        setSelectedIds={setSelectedIds}
                        filteredPermissions={[{ id: item.id }]} // <<< ONLY pass current item
                        isChecked={selectedIds.includes(item.id)}
                      />
                    </td>
                    <td
                      className='p-4 font-semibold'
                      onClick={() =>
                        setExpandedRow(expandedRow === item.id ? null : item.id)
                      }>
                      {item.name}
                    </td>
                    <td
                      className='p-4 flex flex-wrap gap-2'
                      onClick={() =>
                        setExpandedRow(expandedRow === item.id ? null : item.id)
                      }>
                      {item.assignedTo.map((role, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded-full text-xs ${
                            roleColors[role] ||
                            "bg-lighter dark:bg-light dark:text-dark text-gray-700"
                          }`}>
                          {role}
                        </span>
                      ))}
                    </td>
                    <td
                      className='p-4'
                      onClick={() =>
                        setExpandedRow(expandedRow === item.id ? null : item.id)
                      }>
                      {item.createdAt}
                    </td>
                    <td
                      className='p-4'
                      onClick={() =>
                        setExpandedRow(expandedRow === item.id ? null : item.id)
                      }>
                      {item.updatedAt}
                    </td>
                    <td
                      className='p-4 flex gap-3 text-gray-500'
                      onClick={() =>
                        setExpandedRow(expandedRow === item.id ? null : item.id)
                      }>
                      <button className='hover:text-blue-600'>
                        <BsEye />
                      </button>
                      <button className='hover:text-green-600'>
                        <BsPencil />
                      </button>
                      <button
                        className='hover:text-red-600'
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteId(item.id);
                        }}>
                        <BsTrash />
                      </button>
                    </td>
                  </motion.tr>

                  {/* Expandable row */}
                  <ExpandableRow isOpen={expandedRow === item.id}>
                    <div className='text-gray-600 text-sm'>{item.details}</div>
                  </ExpandableRow>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteId !== null || bulkDelete}
        onClose={() => {
          setDeleteId(null);
          setBulkDelete(false);
        }}
        onConfirm={() => handleDelete(bulkDelete ? "bulk" : deleteId!)}
      />
    </div>
  );
}
