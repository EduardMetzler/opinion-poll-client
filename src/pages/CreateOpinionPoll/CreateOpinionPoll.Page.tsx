import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const CreateOpinionPollPage = () => {
  const [title, setTitle] = useState("");

  const [questions, setquestions] = useState([
    { question: "", vote: 0, id: 0 },
    { question: "", vote: 0, id: 1 },
  ]);

  const changeAnswer = (id: number, value: string) => {
    setquestions(
      questions.map((quest) => {
        if (quest.id == id) {
          return { ...quest, question: value };
        } else {
          return quest;
        }
      })
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/opinion-poll/create`,
        { title, questions, token: `${Cookies.get("token")}` }
        // { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-800">
            Titel
          </label>
          <input
            value={title}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {questions.map((oneAnswer) => {
          return (
            <div key={oneAnswer.id} className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Titel
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => changeAnswer(oneAnswer.id, e.target.value)}
                value={oneAnswer.question}
              />
            </div>
          );
        })}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Erstellen
          </button>
        </div>
      </form>
    </>
  );
};
export default CreateOpinionPollPage;
