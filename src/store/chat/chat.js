import { getMessagesDB, sendMessagesDB } from "../../api/user/chat/chat.api";

export const chat = {
  namespaced: true,

  state: () => ({
    messagesChat: [],
  }),
  getters: {
    messages(state) {
      return state.messagesChat;
    },
  },

  actions: {
    async getMessages({ commit }) {
      try {
        const { messageWithData } = await getMessagesDB();
        commit("updateMessages", messageWithData);
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    async sendMessages(_, payload) {
      try {
        const { errorMsg = null, currentModels = [] } = payload;
        const newMessage = {
          ...payload,
          errorMsg,
          currentModels,
        };
        await sendMessagesDB(newMessage);
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
  },
  mutations: {
    updateMessages(state, payload) {
      state.messagesChat = payload;
    },
  },
};
