import React from "react";
import Search from "./Search";
import Users from "./Users";
 

function Left() {
  return (
    <div className="w-[30%] bg-rgb(34, 123, 148) text-black">
      <h1 className="font-bold text-3xl pt-4 text-center">CHATS</h1>
    {/* <div className="w-full   bg-black text-gray-300"> */}
      <Search />
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
   
    </div>
  
  );
}

export default Left;
