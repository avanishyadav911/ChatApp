import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQG1eVy1JohmeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725270231427?e=1731542400&v=beta&t=NVCUMaK-ZUBYCXz_sf4t2_GdvGjtsJYh6Z9YR4w4ynQ" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
