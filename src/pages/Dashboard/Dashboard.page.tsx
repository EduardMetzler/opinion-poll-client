import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { paths } from "../../components/routes";
import { opinionPollStore } from "../../stores/opinionPoll";
import { useState } from "react";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);

        saveOpinionPoll(response.data);
        console.log(allMyOpinionPollsList);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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
        {!loading ? (
          <>
            {allMyOpinionPollsList.length > 0 ? (
              allMyOpinionPollsList.map((opinionPoll) => {
                return (
                  <Link to={opinionPoll.id} className="mx-2">
                    <button className=" w-11/12 my-2  px-4 py-2 text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                      {opinionPoll.title}
                    </button>
                  </Link>
                );
              })
            ) : (
              <span className="flex  place-content-center ">
                Bis jetzt noch nichts erstellt.
              </span>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default DashboardPage;
