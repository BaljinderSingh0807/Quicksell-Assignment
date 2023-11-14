import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import UserIcons from "./UserIcons";
import PriorityDescriptions from "./PriorityDescriptions";
import { MdPending } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { RiTodoLine } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const ByStatus = ({ records }) => {
  // const [records, setRecords] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
  //     .then((response) => response.json())
  //     .then((data) => setRecords(data.tickets))
  //     .catch((err) => console.log(err));
  // }, []);

  // Group tickets by status
  const groupedTickets = records.reduce((grouped, ticket) => {
    const status = ticket.status;
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(ticket);
    return grouped;
  }, {});

  <UserIcons />;
  const userIcons = UserIcons();

  <PriorityDescriptions />;
  const priorityDescriptions = PriorityDescriptions();

  //Status Icons
  const statusIcons = {
    Todo: <RiTodoLine size={20} color="blue" />,
    "In progress": <GrInProgress size={20} />,
    Backlog: <MdPending size={20} color="red" />,
  };

  return (
    <div className="container">
      {Object.entries(groupedTickets).map(([status, tickets]) => (
        <div key={status}>
          <div className="cardContainer">
            <div className="titleContainer">
              <h2>
                {statusIcons[status]}
                {status} <span className="cardCount">{tickets.length}</span>
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
                  {priorityDescriptions[ticket.priority].icon} {<GoDotFill />}{" "}
                  {ticket.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="cardContainer">
        <div className="titleContainer">
          <h2>
            {" "}
            <IoCheckmarkDoneCircle size={22} color="green" />
            Done
            <span className="cardCount">0</span>
          </h2>
          <h2>
            <AiOutlinePlus size={22} />
            <BiDotsHorizontalRounded size={22} />
          </h2>
        </div>
      </div>
      <div className="cardContainer">
        <div className="titleContainer">
          <h2>
            <MdCancel size={22} /> Cancelled
            <span className="cardCount">0</span>
          </h2>
          <h2>
            <AiOutlinePlus size={22} />
            <BiDotsHorizontalRounded size={22} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ByStatus;
