import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface OpinionPoll {
  title: string;
  questions: [{ id: number; question: string; vote: number }];
}

const PinionPollPage = () => {
  const { _id } = useParams();

  const [opinionPoll, setOpinionPoll] = useState<OpinionPoll>({
    title: "",
    questions: [{ id: 0, question: "", vote: 0 }],
  });

  const [select, setSelect] = useState(100);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/opinion-poll/vote/${_id}`,
        { select }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/opinion-poll/${_id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setOpinionPoll(response.data);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  const selectOption = (id: number) => {
    if (id == select) {
      return "w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600";
    } else {
      return " border-4 border-purple-500  w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform  rounded-md hover:bg-purple-600 ";
    }
  };

  return (
    <>
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
    </>
  );
};

export default PinionPollPage;
