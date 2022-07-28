//store.ts
import { defineStore } from "pinia";

export interface name {
  name: String;
}

export interface nameState {
  name: String;
}

const state = (): nameState => ({
  name: "test",
});

const getters = {
  getName: (state: nameState) => () => {
    return state.name;
  },
};

const actions = {
  changeName(name) {
    this.name = name;
  },
};

export const useNameStore = defineStore("nameStore", {
  state,
  getters,
  actions,
});
