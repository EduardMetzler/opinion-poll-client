import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PinionPollData from "../../components/PinionPollData";

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

  console.log(_id);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }/opinion-poll/get-my-opinion-poll/${_id}`,
        {
          withCredentials: true,
        }
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
    </>
  );
};

export default MyOpinionPollPage;
