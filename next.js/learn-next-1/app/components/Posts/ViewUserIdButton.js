"use client";

const ViewUserIdButton = ({ userId }) => {
  const handleClick = () => {
    alert(`ID: ${userId}`);
  };

  return (
    <button className="bg-slate-800 p-3 rounded-sm mt-3" onClick={handleClick}>
      Check ID
    </button>
  );
};
export default ViewUserIdButton;
