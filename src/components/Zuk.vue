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
        <span class="h1">{{ zulkifl.name }}<br/></span>
        <span>@{{ zulkifl.username}}<br/></span>
        <span>{{ zulkifl.info }}</span>
        <div class="mtn1">
        <span>{{ zulkifl.qual }}<br/></span>
        <span>{{ zulkifl.age }}<br/></span>
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
    name: "zulkifl",
    data(){
        return{
        zulkifl: {
        name: "Zulkifl Khairoowala",
        username: "zuk",
        age: "17",
        img: "",
        qual: "AMU undergrad",
        info: "Still a noob"
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