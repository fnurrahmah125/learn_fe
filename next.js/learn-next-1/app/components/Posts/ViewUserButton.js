// Client component
"use client";

import Link from "next/link";

const ViewUserButton = () => {
  const handleClick = () => {
    console.log("User OK");
  };

  return (
    <div className="flex justify-center gap-5">
      <button className="bg-slate-800 p-3 rounded-sm mt-3">
        <Link href="/">Homepage</Link>
      </button>
      <button
        onClick={handleClick}
        className="bg-slate-800 p-3 rounded-sm mt-3"
      >
        Lihat User
      </button>
    </div>
  );
};

export default ViewUserButton;
