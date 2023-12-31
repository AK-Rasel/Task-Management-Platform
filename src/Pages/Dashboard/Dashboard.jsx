import { IoMdNotificationsOutline } from "react-icons/io";

import { Link, NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";

import Tasks from "../../Components/Tasks";
import CreateTask from "../../Components/CreateTask";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="">
      <div className="flex">
        <div className="w-[300px] p-8">
        <Link to='/' className="font-bold text-2xl flex gap-2 items-center "><span><GrHomeRounded className="hover:text-[#2563DC]"/></span> Task<span className="text-[#2563DC]">MasterHub</span></Link>
          <ul className="flex flex-col gap-4 mt-16">
            <li>
              <button className="w-full">
                <NavLink to="/dashboard" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block" }>
                  DashBoard
                </NavLink>
              </button>
            </li>         
          </ul>
        </div>
        <div className="border-l w-full min-h-screen py-4">
          <div>
            <div className="flex gap-4 border-b px-10 pb-6 items-center">
              <div className="w-[80%] ">
                {/* <form className="relative"> <input className="border w-full rounded-sm py-1 px-2 "type="text" placeholder="Search by task name..."/>
                  <IoIosSearch className="absolute top-2 right-2" />
                </form> */}
              </div>
              <div className="flex gap-4 items-center justify-end w-[20%]">
                <IoMdNotificationsOutline className="w-[25px] h-[25px]" />
                <img
                  className="w-[30px] h-[30px]"
                  src={user.photoURL}
                  alt=""
                />
                <h3>{user.displayName
}</h3>
              </div>

            </div>
            {/* outlet */}
            <div className="p-10">
              <CreateTask />
              <div>
                <Tasks></Tasks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
