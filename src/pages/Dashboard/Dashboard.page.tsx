import { Link } from "react-router-dom";
import { paths } from "../../components/routes";

const DashboardPage = () => {
  return (
    <Link to={paths.createOpinionPoll}>
      <button className=" ml-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
        Neue Umfrage
      </button>
    </Link>
  );
};

export default DashboardPage;
