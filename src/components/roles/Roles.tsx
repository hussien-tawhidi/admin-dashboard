"use client";

import { roles, tableHeaders } from "./data";

import TableRow from "./TableRow";

const Roles = () => {
  return (
    <div className='overflow-x-auto rounded-lg shadow-md rtl'>
      <div className='overflow-x-auto scrollbar-hide'>
        <table className='min-w-full overflow-x-auto'>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  scope='col'
                  className='px-6 py-3 text-right font-bold'>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-lighter dark:bg-dark divide-y divide-light/30'>
            {roles.map((item, index) => (
              <TableRow
                key={`role-${item.role}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className='p-4 border-t text-sm'>نمایش 10 از 59 نتیجه</div>
    </div>
  );
};

export default Roles;
