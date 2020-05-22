<template >
    <header>
        <img :src="image" alt="">
    </header>
</template>
<script>
// JS
export default  {
    name: 'Header',
    data(){
        return{
            image: require('@/assets/logo.png')

        }
    }
};
</script>
<style scoped>
/* CSS */
img {
    width: 300px;
}
@media (max-width: 700px){
    img {
        display: block;
        margin: auto;
    }
}
</style>