import React from "react";
import Graph from "../components/Graph";
import chart from "../../assets/images/stats.png";
import student from "../../assets/images/student.png";

function Stats() {
  return (
    <section className=" my-12">
      <h1 className="text-center text-3xl font-kingshare font-bold">
        What we've achieved
      </h1>
      <section
        className="md:w-[80%] box-border px-4 py-4 md:mx-[10%] flex flex-col md:flex-row items-center justify-center bg-slate-800/70 backdrop-blur-sm my-12 rounded-3xl"
      >
        <div className="flex flex-col pl-4 items-center md:items-start md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2 text-white font-redhat">
            Fund Disbursement Statistics
          </h2>
          <p className="text-slate-100 mb-4">
            Our Financial Support program has been highly successful, providing
            essential financial support to numerous students. Here are the
            current statistics on the funds raised versus the funds remaining:
          </p>
          <ul className="text-slate-200 mb-4">
            <li className="mb-2">
              <strong>Total Funds Raised:</strong> £1,000,000
            </li>
            <li className="mb-2">
              <strong>Funds Disbursed:</strong> £0
            </li>
            <li className="mb-2">
              <strong>Remaining Funds:</strong> £1,000,000
            </li>
            {/* <li className="mb-2">
              <strong>Funds Awarded:</strong> 1
            </li>
            <li className="mb-2">
              <strong>Average Fund Value:</strong> £1,000
            </li> */}
          </ul>
          {/* <img src={student} alt="Student" className="w-48 h-auto md:hidden" /> */}
        </div>
        <div className="">
          <Graph />
        </div>
      </section>
    </section>
  );
}

export default Stats;
