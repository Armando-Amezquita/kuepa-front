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
                fullname: '',
                username: '',
                password: '',
                selectedOption: ""
            }
        },
        methods: {
            ...mapActions("user", ["sign"]),
            navigateRedirect(){
                this.$router.push('/')
            },  
            async createUser(){
                const newUser = {
                    names: this.fullname,
                    user: this.username,
                    password: this.password,
                    role: this.selectedOption
                }
                await this.sign(newUser);
                this.login();
            },
            login(){
                this.$router.push('/')
            }
        }
    }
</script>

<template>
    <main class="signup">
        <section class="signup__container">
            <form @submit.prevent="createUser" class="signup__form" >
                <p class="signup__form-title">Registrate</p>
                
                <label class="signup__form-label"  for="name"> Nombre </label>
                <input class="signup__form-input" v-model="fullname" type="text" name="name" id="name" placeholder="Nombre completo">
                
                <label class="signup__form-label"  for="username"> Nombre de usuario </label>
                <input class="signup__form-input" v-model="username" type="text" name="username" id="username" placeholder="usuario">
                
                <label class="signup__form-label password"  for="password"> Password </label>
                <input class="signup__form-input" v-model="password" type="password" name="password" id="password" placeholder="SmallTigger21">

                <select v-model="selectedOption" class="signup__form-select">
                    <option value="">Selecciona una opción</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="moderador">Moderador</option>
                </select>
                
                <Button> Sign up </Button>
                <div >
                    <p>¿Ya estas registrado?</p>
                    <router-link to="/">Ingresar</router-link>
                </div>
            </form>
        </section>
    </main>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss';

    .signup{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 1rem;
        background-color: $bgColor2;
        
        &__container{
            position: relative;
            height: 100%;
            width: 100%;
            max-width: 40rem;
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.5);;
        }
        
        &__form{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding-top: 2rem;
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
            &-select{
                width: 100%;
                height: 4rem;
                margin-top: 1rem;
                background-color: transparent;
                border-radius: 1rem;
                color: $darkGray;
                // border:1px solid $darkGray;
            }
    
                div{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    text-align: left;
                    margin-top: 1.5rem;
                    p{
                        font-size: 1.5rem;
                        margin-right: 1rem;
                        color: $white;
                    }
                    a{
                        font-size: 1.5rem;
                        color: $bgColor;
                    }
                }
            
            Button{
                margin-top: 3rem;
            }
        }
    }

</style>
