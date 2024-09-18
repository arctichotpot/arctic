import React from "react";

const Logo: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => (
  <div
    className={`flex items-center ease-in-out ${
      isCollapsed ? "justify-center" : "justify-start px-4"
    } h-14`}
  >
    {isCollapsed ? (
      <div className="w-8 h-8 bg-primary rounded-full ease-in-out" />
    ) : (
      <>
        <div className="w-8 h-8 bg-primary rounded-full mr-2 ease-in-out" />
        <span className="text-lg font-bold ease-in-out">Your App</span>
      </>
    )}
  </div>
);
export default Logo;