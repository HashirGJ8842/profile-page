<template>
    <div class="profile">
    <v-card>
        <v-row dense>
    <v-col
    cols="6">
    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg">
    </v-col>
    <v-col
    cols="6">
    <div>   
        <v-col>
        <span class="h1">{{ ayaankhan.name }}<br/></span>
        <span>@{{ ayaankhan.username}}<br/></span>
        <span class="mt-3">{{ ayaankhan.info }}</span>
        <div class="mtn1">
        <span>{{ ayaankhan.qual }}<br/></span>
        <span>{{ ayaankhan.age }}<br/></span>
        </div>
        </v-col>
    </div>
    </v-col>
    </v-row>
    </v-card>
    </div>
</template>

<script>
export default {
    name: "ayaan",
    data(){
        return{
        ayaankhan: {
        name: "Ayaan Khan",
        username: "ayaankhan98",
        age: "20",
        img: "",
        qual: "AMU undergrad",
        info: "Falling in C++"
        }
        }
    }
}
</script>

<style scoped>
.mtn1{
    margin-top: 100px;
}
.profile{
    margin-top: 12.5%;
    height: 33%;
    width: 100%;
}

</style>