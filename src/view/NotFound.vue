<script>
    import Button from '../components/Button.vue';
    export default{
        components: {
            Button
        }
    }
</script>

<template>
    <div>
        <section>
            <h2>Page <span> not found... </span></h2>
            <p>We can't seem to find you're looking. <br/> Go back.</p>
            <router-link to="/home">
                <Button>  Login </Button>
            </router-link> 
        </section>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/styles.scss';
    div{
        @extend .display_Flex;
        width: 100%;
        min-height: 100vh;
        background-color: $bgColor2;
        section{
            text-align: center;
            margin: 0 auto;
            width: 40%;
            height: 40%;
            border: 1px solid $white;
            border-radius: 2rem;
            padding: 4rem;
            h2{
                font-size: 6rem;
                color: $white;
                span{
                    color: $bgColor;
                }
            }
            p{
                margin: 8rem 0;
                font-size: 2.5rem;
                color: $white;
            }
        }
        
    }
    
</style>