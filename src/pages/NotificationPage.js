import { Link } from "react-router-dom";
import NotificationContainer from "../components/Notification/NotificationContainer";

export default function NotificationPage() {
  return (
    <div className="w-[390px] h-screen mx-auto bg-white overflow-y-auto">
      <div className="w-full h-[45px] mb-4 sticky top-0 bg-white flex items-center gap-4 px-4">
        <Link to={-1}>
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </Link>
        <div className="text-xl font-bold">Notifications</div>
      </div>
      <NotificationContainer />
    </div>
  );
}
