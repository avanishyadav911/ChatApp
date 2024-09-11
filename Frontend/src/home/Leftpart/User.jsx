import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
             <img src="https://media.licdn.com/dms/image/v2/D5603AQG1eVy1JohmeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725270231427?e=1731542400&v=beta&t=NVCUMaK-ZUBYCXz_sf4t2_GdvGjtsJYh6Z9YR4w4ynQ" />
        
          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
