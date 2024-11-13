import React from "react";

const WeeklySalesChart = () => {
  return (
    <div className="p-8 rounded-lg bg-slate-700">
      <h2 className="text-xl font-bold mb4">Weekly Charts</h2>
      {/* Tabs */}

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-600 hover:border-green-600 dark:hover:text-green-600"
            >
              Sales
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 text-[#f87417] border-b-2 border-[#f87417] rounded-t-lg active dark:text-[#f87417] dark:border-[#f87417]"
              aria-current="page"
            >
              Orders
            </a>
          </li>
        </ul>
      </div>

      {/* Content to display */}
    </div>
  );
};

export default WeeklySalesChart;
