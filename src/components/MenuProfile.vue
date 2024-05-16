<template>
    <div>
        <li> Logout </li>
    </div>
</template>

<style scoped lang="scss">

    @import '@/assets/styles.scss';
    div{
        @extend .display_Flex;
        justify-content: center;
        flex-direction: column;
        background-color: red;
        
        li{
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            margin-bottom: 1rem;

        }
        li:hover{
            cursor: pointer;
        }

    }

</style>