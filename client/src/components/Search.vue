<template>
    <selection class="search">
        <h1>Track Player Stats</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="origin">Origin</option>
                </select>
            </div>
            <div class="form-group"> 
                <label for="gamertag">Gamertag</label>
                <input type="text" name="text" v-model="gamertag" id="gamertag" placeholder="Origin ID, Xbox Live gamertag or PSN ID"/>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn">
            </div>
        </form>
    </selection>
</template>
<script>
// JS
export default  {
    name: 'Search',
    data(){
        return{
            platform: "psn",
            gamertag: ""
        };
    },
    beforeCreate(){
          document.body.className = "body-bg-img"  
    },
    methods: {
        onSubmit(){
            if(!this.gamertag){
                this.$toasted.show("Please Enter a Gamertag", {
                    duration: 3000,
                    icon: 'exclamation-circle',
                    position: 'top-center'
                });
            } else {
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
            }
        }
    }
}
</script>
<style >
.form-group {
  margin: 1rem 0;
}

.search {
  background: rgba(0, 0, 0, 0.5);



}
input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}
*/
.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
}
</style>