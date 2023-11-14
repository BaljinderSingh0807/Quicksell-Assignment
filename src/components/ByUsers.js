import React, { useState, useEffect } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import UserIcons from "./UserIcons";
import PriorityDescriptions from "./PriorityDescriptions";

const ByUsers = ({ records }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  const userIcons = UserIcons();
  const priorityDescriptions = PriorityDescriptions();

  // Group Tickets by Users with names
  const usersGrouped = users.reduce((userGrouped, user) => {
    const userId = user.id;
    if (!userGrouped[userId]) {
      userGrouped[userId] = { name: user.name, tickets: [] };
    }
    userGrouped[userId].tickets.push(user);
    return userGrouped;
  }, {});

  return (
    <div className="container">
      {Object.entries(usersGrouped).map(([userId, { name }]) => (
        <div key={userId}>
          <div className="cardContainer">
            <div className="titleContainer">
              <h2>
                {userIcons[userId]} {name}
              </h2>
              <h2>
                <AiOutlinePlus size={22} />
                <BiDotsHorizontalRounded size={22} />
              </h2>
            </div>
            {records.map(
              (ticket) =>
                userId === ticket.userId && (
                  <div className="ticketCard" key={ticket.id}>
                    <h1 className="cardId">{ticket.id}</h1>
                    <h1 className="cardTitle">{ticket.title}</h1>
                    <p className="cardTag">
                      {priorityDescriptions[ticket.priority].icon} <GoDotFill />{" "}
                      {ticket.tag}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ByUsers;
