import { useCopyToClipboard } from "usehooks-ts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PinionPollData from "../../components/PinionPollData";
import Cookies from "js-cookie";

interface OpinionPoll {
  title: string;
  questions: [{ id: number; question: string; vote: number }];
}

const MyOpinionPollPage: React.FC<any> = () => {
  const { _id } = useParams();
  console.log(_id);
  const [opinionPoll, setOpinionPoll] = useState<OpinionPoll>({
    title: "",
    questions: [{ id: 0, question: "", vote: 0 }],
  });

  const [value, copy] = useCopyToClipboard();

  useEffect(() => {
    axios
      .post(
        `${
          import.meta.env.VITE_BASE_URL
        }/opinion-poll/get-my-opinion-poll/${_id}`,
        // {
        //   withCredentials: true,
        // }
        { token: `${Cookies.get("token")}` }
      )
      .then((response) => {
        setOpinionPoll(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <PinionPollData opinionPoll={opinionPoll} />

      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Link to={`/${_id}`}> Link:{`/${_id}`}</Link>
        </button>

        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div onClick={() => copy("Kopiert")}>
            {" "}
            <p> {value ?? "Kopieren"}</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default MyOpinionPollPage;
