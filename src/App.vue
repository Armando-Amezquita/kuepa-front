<script >
export default {
  mounted() {
    this.$socket.on('connect', () => {
      console.log('Connected to Socket.IO server')
    });
  }
}

</script>

<template>
  <router-view />
</template>


