import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      .get(`http://localhost:5000/opinion-poll/get-my-opinion-poll/${_id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setOpinionPoll(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <p>{opinionPoll.title}</p>
      <div>
        {" "}
        {opinionPoll.questions.map((oneOpinionPoll) => {
          return (
            <div>
              <p>{oneOpinionPoll.question}</p>
              <p>{oneOpinionPoll.vote}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyOpinionPollPage;
