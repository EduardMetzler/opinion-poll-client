const PinionPollData: React.FC<any> = ({ opinionPoll }) => {
  return (
    <>
      {" "}
      <p className="text-xl text-center">{opinionPoll.title}</p>
      <div>
        {" "}
        {opinionPoll.questions.map((oneOpinionPoll: any) => {
          return (
            <div
              key={oneOpinionPoll.question}
              className="flex font-[Poppins]  "
            >
              <p className=" basis-11/12 bg-slate-100 p-2">
                {oneOpinionPoll.question}
              </p>
              <p className=" basis-1/12 bg-slate-500 p-2">
                {oneOpinionPoll.vote}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PinionPollData;
