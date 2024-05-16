<script >
    import { mapActions } from 'vuex';
    import HeaderLogin from '../components/HeaderLogin.vue';
    import Button from '../components/Button.vue';

    export default {
        components: {
            HeaderLogin,
            Button
        },
        data() {
            return {
                user: '',
                password: '',
            }
        },
        methods: {
            ...mapActions('user', ['loginDb']),

            navigateRedirect(){
                this.$router.push('/dashboard')
            },

            async loginUser(){
                if(!this.user || !this.password){
                    return; 
                }
                const userLogin = {
                    user: this.user,
                    password: this.password
                }

                await this.loginDb(userLogin);
                return this.navigateRedirect()
            },
        },

        mounted(){
            const token = localStorage.getItem("auth");
            if(token){
                this.$router.push('/dashboard');
            }
        },

    }
</script>

<template>
    <main class="login">
        <section class="login__container">
            
            <HeaderLogin class="login__header" />

            <form 
              @submit.prevent="loginUser" 
              class="login__form">

                <p class="login__form-title">
                    Bienvenid@
                </p>

                <label class="login__form-label" 
                  for="user"> 
                  Nombre de usuario 
                </label>
                <input class="login__form-input" v-model="user" type="text" name="user" id="user" placeholder="usuario">
                
                <label class="login__form-password login__form-label" for="password">       Contraseña 
                    <span>¿Olvido su contraseña?</span>
                </label>

                <input class="login__form-input"  v-model="password" type="password" name="password" id="password" placeholder="SmallTigger21">

                <Button class="login__form-btnLogin"> Login </Button>
            </form>
        </section>
    </main>
</template>

<style scoped lang="scss">
    @import '@/assets/styles.scss';

    .login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 1rem;
        background-color: $bgColor2;
        
        &__container{
            position: relative;
            display: grid;
            grid-template-rows: 10% 90%;
            height: 100%;
            width: 100%;
            max-width: 40rem;
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.5);;
        }
        
        &__form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            max-width: 40rem;
            height: 100%;
            
            &-title{
                font-size: 2rem;
                font-weight: bold;
                color: $bgColor;
            }
            &-label{
                width: 100%;
                margin: 2rem 0 1rem 0;
                font-size: 1.5rem;
                color: $white;
            }
            &-password{
                display: flex;
                justify-content: space-between;
                span{
                    color: $bgColor;
                }
            }
            &-input{
                width: 100%;
                height: 4rem;
                padding: 2rem;
                border-radius: 0.6rem;
                border: 1px solid $darkGray;
                outline: none;
                color: $white;
                background-color: transparent;
            }
            &-btnLogin{
                margin-top: 2rem;
            }
        }
    
    }
</style>