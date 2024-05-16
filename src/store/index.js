import { createStore } from 'vuex'
import { user } from './user'

export const store = createStore({
    state(){
        return {
            status: 2
        }
    },
    modules: {
        user
    }
})