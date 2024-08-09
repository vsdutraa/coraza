import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div className="p-3">
      <UserButton></UserButton>
    </div>
  );
};

export default RootPage;
