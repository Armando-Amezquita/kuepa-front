import { login, signup } from "@/api/user"

export const user = {
    namespaced: true,
    state(){
        return{
            userDb: {},
        }
    },
    getters: {
    },
    mutations: {
        setUserDb(state, payload){  
            state.userDb = payload
            localStorage.setItem('auth', payload.token);
        },
    },
    actions: {
        loginDb: async({ commit }, payload) => {
            const { user, password } = payload
            const response = await login(user, password);
            commit('setUserDb', response)
            return response;
        },
        sign: async({ commit }, payload) => {
            await signup(payload);
        },
    },
}