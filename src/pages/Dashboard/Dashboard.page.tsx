import { Link } from "react-router-dom";
import { paths } from "../../components/routes";
import axios from "axios";
import { useEffect } from "react";
import { opinionPollStore } from "../../stores/opinionPoll";

const DashboardPage = () => {
  const allMyOpinionPollsList = opinionPollStore(
    (state) => state.allMyOpinionPollsList
  );
  const saveOpinionPoll = opinionPollStore((state) => state.saveOpinionPoll);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/opinion-poll/get-all-my-opinionPolls-list`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);

        saveOpinionPoll(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Link to={paths.createOpinionPoll}>
        <button className=" mx-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          Neue Umfrage
        </button>
      </Link>
      <div>
        {" "}
        {allMyOpinionPollsList
          ? allMyOpinionPollsList.map((opinionPoll) => {
              return (
                <Link to={opinionPoll.id} className="mx-2">
                  <button className=" w-11/12 my-2  px-4 py-2 text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    {opinionPoll.title}
                  </button>
                </Link>
              );
            })
          : null}{" "}
      </div>
    </>
  );
};

export default DashboardPage;
