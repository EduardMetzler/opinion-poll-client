import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PinionPollSelect from "../../components/PinionPollSelect";
import Loading from "../../components/Loading";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [allOpinionPollsListLinkFasl, SetAllOpinionPollsListLinkFasl] =
    useState([true]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }/opinion-poll/get-all-opinion-polls-list-link-fasl`
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        SetAllOpinionPollsListLinkFasl(response.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {" "}
      {!loading ? (
        <>
          {allOpinionPollsListLinkFasl.length > 0 ? (
            allOpinionPollsListLinkFasl.map((opinionPoll: any) => {
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
  );
};

export default HomePage;
