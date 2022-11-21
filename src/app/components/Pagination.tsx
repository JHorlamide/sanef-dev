import React from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack
  // IoIosArrowDown
} from "react-icons/io";
import Test from "./Test";

export const TableRecord = () => {
  return (
    <div className="">
      <p className="text-[12px] flex">
        Showing <Test />
        {/* <span className="flex space-x-3 py-2 px-2 rounded-lg bg-white mx-1 -mt-2">
          10{" "}
          <IoIosArrowDown size={16} className="ml-1 text-sm cursor-pointer" />
        </span> */}
        of 320 Records
      </p>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
              href="/"
              aria-label="Previous"
            >
              <IoIosArrowBack size={22} className="ml-1 mt-0.5 text-sm" />
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent 
              outline-none transition-all duration-300 rounded text-buttonColor
              hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="/"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none 
              transition-all duration-300 rounded text-gray-800 hover:text-gray-800 
              hover:bg-gray-200 focus:shadow-none"
              href="/"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none 
              transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none
              hover:bg-gray-200"
              href="/"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none 
              transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none
              hover:bg-gray-200"
              href="/"
              aria-label="Next"
            >
              <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
