<template >
    <section>
        <div v-if="loading"> <h3>Loading ..</h3> </div>
        <div v-if="error">
            <h1>{{error}}</h1>
            <router-link to="/">Go Back</router-link>    
        </div>
        <div v-if="profileData" class="container">
            <div class="top-card">
            <div class="gamertag">
                <img :src="profileData.platformInfo.avatarUrl" alt="" class="icon">
                <h1>{{profileData.platformInfo.platformUserId}}</h1>
            </div>
            <div class="rank">
                <img :src="profileData.segments[0].stats.rankScore.metadata.iconUrl" alt="" class="icon">
                <h2> {{profileData.segments[0].stats.rankScore.metadata.rankName}}</h2>
            </div>
            <div class="stats">
                <ul>
                    <li><h3>Level: {{profileData.segments[0].stats.level.value}}</h3></li>
                    <li><h3>Lifetime kills: {{profileData.segments[0].stats.kills.value}}</h3></li>
                    <li><h3>Times placed top 3: {{profileData.segments[0].stats.timesPlacedtop3.value}}</h3></li>
                </ul>

                
                
            </div>
            </div>
            <div class="grid">
                <div class="img-item">
                    <img :src="profileData.segments[1].metadata.imageUrl" alt="" class="legend-avatar">
                </div>
                <div>
                    <ul>
                        <li  class="item"><h3>Selected Legend: </h3>
                        <p>{{profileData.metadata.activeLegendName}}</p>
                        </li>
                        <li  class="item"><h3>Kills: </h3>
                        <p>{{profileData.segments[1].stats.kills.value}}</p>
                        </li>
                        <li  class="item"><h3>Winning kills: </h3>
                        <p>{{profileData.segments[1].stats.winningKills.value}}</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// JS
import axios from 'axios'
export default  {
    name: 'Profile',
    data(){
        return{
            loading: false,
            error: "",
            profileData: ""
        }
    },
    beforeCreate(){
        document.body.className = "body-bg-no-img"  
    },
    async created() {
        this.loading = true;
        try {
        const res = await axios.get(
            `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
        );
        this.profileData = res.data.data;
        console.log(this.profileData);
        this.loading = false;
        } catch (err) {
        this.loading = false;
        this.error = err.response.data.message;
        }
    }
}
</script>
<style>
.icon{
    max-width: 100px;
}
.top-card {
    display: grid;
    grid-template-columns: auto auto auto;
    border: 2px solid white;
}
.top-card > div {
    justify-self: center;


}
.grid {
    display: grid;
    border: 2px solid white;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto ;
}


.img-item{
    background: rgba(0, 0, 0, 0.5);
    border-right: 2px solid white;

}
.legend-avatar {
    max-width: 400px;
}
ul {

}
li {


}

</style>