import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { paths } from "../../components/routes";
import { opinionPollStore } from "../../stores/opinionPoll";
import PinionPollSelect from "../../components/PinionPollSelect";

import Cookies from "js-cookie";

const FF: React.FC<any> = () => {
  const [loading, setLoading] = useState(true);
  const allMyOpinionPollsList = opinionPollStore(
    (state) => state.allMyOpinionPollsList
  );
  const saveOpinionPoll = opinionPollStore((state) => state.saveOpinionPoll);
  useEffect(() => {
    axios
      .post(
        `${
          import.meta.env.VITE_BASE_URL
        }/opinion-poll/get-all-my-opinionPolls-list`,
        // {
        //   withCredentials: true,
        // }
        { token: `${Cookies.get("token")}` }
      )
      .then((response) => {
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
                  <div key={opinionPoll._id}>
                    <PinionPollSelect opinionPoll={opinionPoll} />
                  </div>
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

export default FF;
