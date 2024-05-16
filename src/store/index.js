import { createStore } from 'vuex'
import { user } from './user'
import { chat } from './chat/chat'

export const store = createStore({
    modules: {
        user, 
        chat
    },
})