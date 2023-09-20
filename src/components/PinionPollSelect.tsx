import { Link } from "react-router-dom";

const PinionPollSelect: React.FC<any> = ({ opinionPoll }) => {
  return (
    <>
      <Link key={opinionPoll._id} to={`/${opinionPoll._id}`} className="mx-2">
        <button className=" w-11/12 my-2  px-4 py-2 text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
          {opinionPoll.title}
        </button>
      </Link>
    </>
  );
};

export default PinionPollSelect;
