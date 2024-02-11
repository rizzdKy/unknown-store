import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/16/solid";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-[13vh] min-w-screen bg-gray-800">
      <div className="md:w-[80%] mx-auto h-[100%] flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src="/tempimg/asus-rog-1.svg"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="text-white font-bold text-3xl">UNKNOWN|:|STORE</div>
        <div className="flex items-center justify-center space-x-8">
          <div className="relative">
            <Link
              href={"/wishlist"}
              className="w-[4rem] h-[2rem] text-white cursor-pointer text-xl hover:underline"
            >
              Whislist
            </Link>
            {/* <div className="w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center text-white justify-center font-semibold rounded-full bg-red-500">
              12
            </div> */}
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <UserIcon className="w-[2rem] h-[2rem] text-white cursor-pointer" />
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-3 hover:text-white bg-gray-900 text-slate-600 rounded-box w-32 mt-4"
              >
                <li>
                  <Link href={"/login"}>Login</Link>
                  <Link href={"/register"}>Register</Link>
                  <form
                    action={async () => {
                      "use server";
                      // cek jika ada cookie token lalu menghapus cookie token
                      cookies().get("token") && cookies().delete("token");
                      // console.log(cookies);

                      redirect("/login");
                    }}
                  >
                    <button type="submit">Logout</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
