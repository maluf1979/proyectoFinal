import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", {
  state: () => {
    return { isLogin: false };
  },
  actions: {
    logout() {
      this.isLogin = false;
    },
    login() {
      this.isLogin = true;
    },
  },
});
