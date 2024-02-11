import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ServerProtectedComponents = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  // jika token tidak ada, redirect ke halaman home
  if (!token || token.value.length <= 0) {
    redirect("/");
  }

  return <>{children}</>;
};

export default ServerProtectedComponents;
