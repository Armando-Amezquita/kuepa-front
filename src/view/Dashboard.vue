<script>
    import { mapActions, mapGetters } from 'vuex';
    import Header from '../components/Header.vue';
    import Chat from './Chat.vue';

    export default{
        components: { Header, Chat },
        computed: {
            ...mapGetters("chat", ["messages"]),
        },
        methods: {
            ...mapActions("chat", ["getMessages"]),
            userName(msg){
                return msg.fromUser.names
            },
            userRole(msg){
                return msg.fromUser.role
            },
        },
        async beforeMount(){
            await this.getMessages()
        },
    }
</script>
<template>
    <main class="mainHome">
        <Header class="mainHome__header"> </Header>
        <div class="mainHome__container">
            <img class="video" src="../assets/background.jpg" alt="img">
            <div class="chat" >
                <article class="chat__container" v-for="msg in messages" :key="msg.id">
                    <span class="chat__msg-img">h</span>
                    <div class="chat__msg">
                        <span class="chat__msg-name"> {{ userName(msg) }}</span>
                        <span class="chat__msg-role"> {{ userRole(msg) }}</span>
                        <span class="chat__msg-msg"> {{ msg.message }}</span>
                    </div>
                </article>
            </div>
        </div>
        <Chat />
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/styles.scss';
    .mainHome{
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        min-height: 100vh;
        padding: 1rem;
        padding-top: 7rem;
        overflow-y: auto;
        background-color: $bgColor2;

        &__header{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        }
        &__container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            min-height: 100vh;
            height: auto;
            width: 100%;
        }
        
        @media (min-width: 768px) {
            &__container{
                display: grid;
                grid-template-columns: 60% 40%;
            }          
        }
    }
    .video{
        width: 100%;
        max-width: 500px;
        height: 250px;
        max-height: 500px;
        border-radius: 1rem;
    }
    .chat{
        width: 100%;
        height: auto;
        max-height: 500px;
        overflow-y: auto;
        &__container{
            display: grid;
            grid-template-columns: 4rem auto;
            gap: 1rem;
            width: 100%;
            margin: 1rem 0;
        }
        &__msg{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
            background-color: #2D323A;
            &-img{
                height: 3rem;
                width: 3rem;
                background-color: gray;
                border-radius: 50%;;
            }
            &-name{
                text-transform: uppercase;
                font-size: 1.5rem;
                color: $bgColor;
            }
            &-role{
                margin-bottom: .5rem;
                font-size: 1rem;
                color: gray;
            }
            &-msg{
                width: 100%;
                white-space: nowrap;
                text-wrap: wrap;
                color: $white;
                font-size: 1.4rem;
            }
        }
    }
    .chat::-webkit-scrollbar {
        width: 5px;
    }
    .chat::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 5px; 
    }

    
</style>