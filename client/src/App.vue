<template>
<div class="container">
    <Header/>
    <router-view/>
</div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
:root {
  --primary-color: #953036;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  line-height: 1.6;
}
a {
  color: #fff;
  text-decoration: none;
}
ul {
  list-style: none;
}
.body-bg-no-img{
  background: var(--primary-color);
}
.body-bg-img{
  background: var(--primary-color) url('/.assets/mirage.png') no-repeat top center;
}

.container {
  max-width: 1000px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}



@media (max-width: 700px) {
  body {
    background: var(--primary-color);
  }
}
</style>
