import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col gap-2 justify-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden w-1/3 items-center"
        >
          Open Sidebar
        </label>
        <main className="max-h-screen lg:min-h-screen">
          <Outlet />
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            <div className="">
              <h1>{user?.displayName}</h1>
            </div>
          </div>
          <li className="mt-5 mb-3 ">
            <NavLink
              to="/dashboard/tasks"
              className="text-black bg-slate-100 hover:text-gray-700 transition duration-300"
            >
              All Tasks
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink
              to="/dashboard/other"
              className="text-black bg-slate-100 hover:text-gray-700 transition duration-300"
            >
              Sidebar Item 2
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
