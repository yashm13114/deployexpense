import React from 'react'
import { Link } from 'react-router-dom'
import {
  MdOutlineSpaceDashboard,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCirclePlus  } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { TiLockClosed } from "react-icons/ti";
import { AiFillSetting } from "react-icons/ai";
// import { RiLockPasswordLine } from 'react-icons/cg'
const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block lg:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className='grid justify-center lg:text-4xl text-2xl  lg:mt-2 mt-4'>
          {/* <hr className='pl-96 pr-96' /> */}
          {/* className='mt-2 mb-2 ml-52' */}
          <h1 >Daily Expense Tracker</h1>
          {/* <hr /> */}

        </div>

        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-black border-b border-gray-100 pb-4 w-full">
              Menu
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                 <a href="/Dashboard">Dashboard</a> 
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">

                <h3 className="text-base flex text-gray-800 group-hover:text-white font-semibold ">
                <FaCirclePlus className="text-xl text-gray-600 group-hover:text-white " />
                  <a href="/Changeexpense" className='ml-4'>Add Expense</a>
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">

                <h3 className="text-base flex text-gray-800 group-hover:text-white font-semibold ">
                <AiFillSetting className="text-2xl text-gray-600 group-hover:text-white mr-4" />
                 <a href="/ManageExpense" className=''>Manage Expense</a> 
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " /> */}
                <h3 className="text-base flex text-gray-800 group-hover:text-white font-semibold ">
                <TiLockClosed className="text-2xl text-gray-600 group-hover:text-white mr-3" />
                  {/* <RiLockPasswordLine /> */}
                  Change Password
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Profile
                </h3>
              </div>

            </div>

            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default Navbar