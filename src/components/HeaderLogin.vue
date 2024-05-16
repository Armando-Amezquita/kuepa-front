<script>
    import Button from './Button.vue';
    export default{
        components: {
            Button
        }
    }

</script>

<template>
    <header class="header">
        <nav>
            <ul class="header__containerList">
                <li class="header__item">¿No estas registrado aún?</li>
                <li class="header__item">
                    <router-link to="/signup">
                        <Button class="header__item-register"> Registrar </Button>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss'; 
    .header{
        width: 100%;
        &__containerList{
            @extend .display_Flex;
        }
        &__item{
            font-size: 1.4rem;
            color: $white;
            &-register{
                width: 11rem;
                font-size: 1.4rem;
                color: $bgColor;
                background-color: transparent;
                border: none;
                border: 1px solid $bgColor;
            }
            &-register:hover{
                color: $white;
                background-color: $bgColor;
                transition: .5s ease-in-out;
            }
        }
    }
</style>