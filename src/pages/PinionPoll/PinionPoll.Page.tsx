import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PinionPollData from "../../components/PinionPollData";

interface OpinionPoll {
  title: string;
  questions: [{ id: number; question: string; vote: number }];
}

type Params = {
  _id: any;
};

const PinionPollPage: React.FC<any> = () => {
  const { _id } = useParams<Params>();

  const [loading, setLoading] = useState(true);

  const [opinionPoll, setOpinionPoll] = useState<OpinionPoll>({
    title: "",
    questions: [{ id: 0, question: "", vote: 0 }],
  });

  const [select, setSelect] = useState(100);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/opinion-poll/${_id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setOpinionPoll(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/opinion-poll/vote/${_id}`,
        { select }
      );

      let listVote = localStorage.getItem("listVote");

      if (!listVote) {
        const vote = [];
        vote.push(_id);

        localStorage.setItem("listVote", JSON.stringify(vote));

        setOpinionPoll(response.data);
      } else {
        var vote = JSON.parse(localStorage.listVote);

        vote.push(_id);
        localStorage.setItem("listVote", JSON.stringify(vote));

        setOpinionPoll(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectOption = (id: number) => {
    if (id == select) {
      return "w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600";
    } else {
      return " border-4 border-purple-500  w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform  rounded-md hover:bg-purple-600 ";
    }
  };

  return (
    <>
      {localStorage.getItem("listVote")?.includes(_id) && !loading ? (
        <>
          <PinionPollData opinionPoll={opinionPoll} />
        </>
      ) : (
        <>
          {!loading ? (
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <p className="block text-sm font-semibold text-gray-800">
                  {opinionPoll.title}
                </p>
              </div>
              {opinionPoll.questions.map((oneOpinionPoll) => {
                return (
                  <div key={oneOpinionPoll.id} className="mb-2">
                    <div
                      onClick={() => setSelect(oneOpinionPoll.id)}
                      className={selectOption(oneOpinionPoll.id)}
                    >
                      {oneOpinionPoll.question}
                    </div>
                  </div>
                );
              })}

              <div className="mt-6">
                <button
                  disabled={select == 100}
                  type="submit"
                  className="disabled:opacity-30 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Senden
                </button>
              </div>
            </form>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default PinionPollPage;
