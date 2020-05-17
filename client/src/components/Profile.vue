<template >
    <section>
        <div v-if="loading"> <h3>Loading ..</h3> </div>
        <div v-if="error">
            <h1>{{error}}</h1>
            <router-link to="/">Go Back</router-link>    
        </div>
        <div v-if="profileData" class="container">
            <h1 class="gamertag">
                <img :src="profileData.platformInfo.avatarUrl" alt="" class="platform-avatar">
                {{profileData.platformInfo.platformUserId}}
            </h1>
            <div class="grid">
                <div>
                    <img :src="profileData.segments[1].metadata.imageUrl" alt="" class="legend-avatar">
                </div>
                <div>
                    <ul>
                        <li><h3>Selected Legend: </h3>
                        <p>{{profileData.metadata.activeLegendName}}</p>
                        </li>
                        <li><h3>Kills: </h3>
                        <p>{{profileData.segments[1].stats.kills.value}}</p>
                        </li>
                        <li><h3>Winning kills: </h3>
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
.platform-avatar {
    max-width: 100px;
}

.grid {
    display: flex;
    justify-content: space-between;
    border: 2px solid white;
}
.grid > div {
    border: 1px solid grey;
}
.legend-avatar {
    max-width: 400px;
}

</style>