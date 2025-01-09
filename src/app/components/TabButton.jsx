
import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#778A35] border-b " : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#778A35] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;

