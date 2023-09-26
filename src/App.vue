<script>
import {RouterLink, RouterView} from 'vue-router'
import AppArmas from './views/AppArmas.vue'
export default{
    components:{
        RouterLink, RouterView, AppArmas
    },
    data: function () {
        return {
            character: null,
            name: null,
            skill: null
        }
    },
    computed: {
    },
    methods: {
        getDados(){
            fetch("https://valorant-api.com/v1/agents").then(res => { res.json().then((x) =>{ this.character = x.data })})
        },
        infos(c){
            this.name = c.displayName
            this.skill = c.abilities
        },
        abreModal(){
            
        }
    },
    mounted: function () {
        this.getDados();

    }
}
</script>
<template>
  <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
    <div class="bg-dark p-4">
      <h5 style="color: cadetblue;" class="text-body-emphasis h4">Usando API do valorant com vue js.</h5>
      <li class="nav-item">
        <router-link to="#">Armas</router-link>
      </li>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <div class="container texte-center">
    <div class="row">
        <div class="row col-12">
            <div v-for="c in character" style="margin-top: 5%;" class="col-6 mt-4 d-flex justify-content-center">
                <div class="col-sm-12 col-md-6">
                    <div id="card" style="background-color: #d7f7f4;" class="card">
                        <div  class="card-body row">
                            <div style="font-weight: bold; text-decoration: underline;" class=""><strong>{{ c.displayName }}</strong></div>
                            <div>
                                <img :src="c.displayIcon">
                            </div>
                            <div>
                                <p class="mt-4"> <strong>Description:</strong> {{ c.description }}</p>
                            </div>
                            <button @click="infos(c)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Info Skills</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div style="background-color:cadetblue;" class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Skills</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div style="background-color: cadetblue;" class="modal-body">
            <div class="row">
              <div class="col-md-5"></div>
              <div>
                <h1 style="margin-left: 500px; font-weight: bold; text-decoration: underline;">{{this.name}}</h1>
            </div>
            <div v-for="skill in this.skill" style="margin-top: 5%;" class="col-6 mt-4 d-flex justify-content-center">
              <div class="col-sm-12 col-md-6">
                    <div id="card" class="card">
                        <div style="background-color: #d7f7f4;" class="card-body row">
                            <div  class=""><strong>{{ skill.displayName }}</strong></div>
                            <div>
                                <img :src="skill.displayIcon">
                            </div>
                            <div>
                                <p class="mt-4"> <strong>Description:</strong> {{ skill.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div style="background-color:cadetblue;" class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>

</div>
</template>
<style>
#app{
  background-color: cadetblue;
}
</style>
