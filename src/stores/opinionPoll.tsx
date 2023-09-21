import { create } from "zustand";

interface OpinionPollStore {
  allMyOpinionPollsList: [{ title: string; _id: string }];
  saveOpinionPoll: (myOpinionPoll: any) => void;
}

export const opinionPollStore = create<OpinionPollStore>((set) => ({
  allMyOpinionPollsList: [{ title: "", _id: "", onlyLink: true }],
  saveOpinionPoll: (allMyOpinionPollsList) =>
    set({
      allMyOpinionPollsList,
    }),
}));
