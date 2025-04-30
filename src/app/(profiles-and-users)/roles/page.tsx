import Roles from "@/components/roles/Roles";

export default function adminRolesPage() {
  return (
    <div className='w-[97%] md:w-[90%] mx-auto'>
      <h1 className='md:text-3xl mt-10 mb-5 text-xl font-semibold'>
        نقش ها و وظایف
      </h1>
      <Roles />
    </div>
  );
}
