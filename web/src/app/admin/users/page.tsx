import { AdminPageTitle } from "@/components/adminPageComponents/Title";
import UsersTable from "@/components/adminPageComponents/users/AdminUsersTable";
import { UsersIcon } from "@/components/icons/icons";

const Page = () => {
  return (
    <div className="mx-auto container">
      <AdminPageTitle title="Manage Users" icon={<UsersIcon size={32} />} />

      <UsersTable />
    </div>
  );
};

export default Page;
