<script>
import { mapActions } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      text: "",
    };
  },
  computed: {
    messages() {
      return this.$store.state.chat.messagesChat;
    },
  },

  mounted() {
    this.getMessages();

    this.$socket.on('msg', (msg) => {
      this.messages.unshift(msg);
    });
  },

  methods: {
    ...mapActions("chat", ["getMessages","sendMessages"]),

    async submit() {
      const newMessage = { message: this.text };
      this.sendMessages(newMessage);
      this.text = "";
    },
  },
};
</script>

<template>
  <form class="sendMsg" @submit.prevent="submit">
      <label for="text"></label>
      <input
        class="sendMsg__input"
        type="text"
        v-model="text"
        id="text"
        placeholder="Escribir mensaje"
      />
  </form>
</template>


<style scoped lang="scss">

@import '../assets/styles.scss';
.sendMsg{
  position: fixed;
  bottom: 1rem;
  right: 1.5rem;
  left: 1.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 90%;
  height: 5rem;
  border-radius: 24px;
  background-color: $bgColor2;
  border: 1px solid $bgColor ;
  &__input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin-bottom: 5px;
    font-size: 14px;
    color: $white;
    border: none;
    background: transparent;
    border-radius: 24px;
  }
  &__input:focus {
    color: $white; 
  }
}
</style>
