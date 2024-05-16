<script>
    export default {
        props: ["user"], 
        data() {
            return {
                show: false,
            }
        },
        methods: {
            toogle(){
                this.show = !this.show
            },
            logout(){
                localStorage.clear()
            }
        }
    }
</script>

<template>
    <nav class="header">
        <p class="header__brand">KUEPA</p>
        <div class="header__profile">
            <span><img class="header__profile-img" src="@/assets/icons/activo.png" alt="notification"/></span>
            <span>
                <img @click="toogle" class="header__profile-img" src="@/assets/icons/usuario.png" alt="User" />
                <div class="header__subMenu" v-show="show">
                    <div class="user-info">
                        <router-link to="/">
                            <p @click="logout">Logout</p>
                        </router-link>
                        <hr>
                        <p>Profile</p>
                    </div>
                </div>
            </span>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

@import '@/assets/styles.scss';  

.header{
    @extend .display_Flex;
    width: 100%;
    height: 6rem;
    padding: 1rem 4rem;
    background-color: $bgColor2;
    border-bottom: 1px solid $bgColor;

    &__brand{
        font-size: 3rem;
        font-style: italic;
        color: $bgColor;
    }

    &__profile{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: 100%;

        &-img{
            width: 3rem;
            height: 3rem;
            cursor: pointer;
        }
        &__subMenu{
            position: absolute;
            top: 6rem;
            right: 2rem;
            width: 12rem;
            color: $bgColor;
            text-align: center;
            .sub-menu{
                background-color: white;
                border-radius: .5rem;
                min-height: 4rem;
                padding: 1rem;
                .user-info{
                    hr{
                        margin: 1.2rem 0;
                    }
                    p{
                        transition: transform 0.5s;
                    }
                    p:hover{
                        transform: translateX(5px);
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>