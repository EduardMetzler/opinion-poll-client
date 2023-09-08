import { create } from "zustand";

interface OpinionPollStore {
  allMyOpinionPollsList: [{ title: string; id: string }];
  saveOpinionPoll: (myOpinionPoll: any) => void;
}

export const opinionPollStore = create<OpinionPollStore>((set, get) => ({
  allMyOpinionPollsList: [{ title: "", id: "" }],
  saveOpinionPoll: (allMyOpinionPollsList) =>
    set({
      allMyOpinionPollsList,
    }),
}));
