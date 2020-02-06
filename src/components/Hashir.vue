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
        <span class="h1">{{ hashirniazi.name }}<br/></span>
        <span>@{{ hashirniazi.username}}<br/></span>
        <span class="mt-3">{{ hashirniazi.info }}</span>
        <div class="mtn1">
        <span>{{ hashirniazi.qual }}<br/></span>
        <span>{{ hashirniazi.age }}<br/></span>
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
    name: "hashir",
    data(){
        return{
        hashirniazi: {
        name: "Hashir Niazi",
        username: "HashirGJ8842",
        age: "18",
        img: "",
        qual: "AMU undergrad",
        info: "trying..."
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