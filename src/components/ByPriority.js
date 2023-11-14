import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import UserIcons from "./UserIcons";
import PriorityDescriptions from "./PriorityDescriptions";

const ByPriority = ({ records }) => {
  // const [records, setRecords] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
  //     .then((response) => response.json())
  //     .then((data) => setRecords(data.tickets))
  //     .catch((err) => console.log(err));
  // }, []);

  // Group tickets by Priority
  const groupedTickets = records.reduce((grouped, ticket) => {
    const priority = ticket.priority;
    if (!grouped[priority]) {
      grouped[priority] = [];
    }
    grouped[priority].push(ticket);
    return grouped;
  }, {});

  <UserIcons />;
  const userIcons = UserIcons();

  <PriorityDescriptions />;
  const priorityDescriptions = PriorityDescriptions();

  const sortedPriorities = Object.entries(groupedTickets).sort(
    (a, b) => parseInt(b[0]) - parseInt(a[0])
  );

  return (
    <div className="container">
      {sortedPriorities.map(([priority, tickets]) => (
        <div key={priority}>
          <div className="cardContainer">
            <div className="titleContainer">
              <h2>
                {priorityDescriptions[priority].icon}{" "}
                {priorityDescriptions[priority].text}
                <span className="cardCount">{tickets.length}</span>
              </h2>
              <h2>
                <AiOutlinePlus size={22} />
                <BiDotsHorizontalRounded size={22} />
              </h2>
            </div>
            {tickets.map((ticket) => (
              <div className="ticketCard" key={ticket.id}>
                <h1 className="cardId">
                  {ticket.id} {userIcons[ticket.userId]}
                </h1>
                <h1 className="cardTitle">{ticket.title}</h1>
                <p className="cardTag">
                  <GoDotFill /> {ticket.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ByPriority;
