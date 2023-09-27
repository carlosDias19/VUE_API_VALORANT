<script>
import {RouterLink, RouterView} from 'vue-router'
export default{
    components:{
        RouterLink, RouterView
    },
    data: function () {
        return {
            armas: null,
            skin: null,
        }
    },
    computed: {
    },
    methods: {
        getDados(){
            fetch("https://valorant-api.com/v1/weapons").then(res => { res.json().then((x) =>{ this.armas = x.data })})
        },
        infos(c){
          this.skin = c.skins
          console.log(c.skins)
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

<div  class="card ms-" id="card" style="background-color: #ffcccc; width: 60%; margin-left: 20%;">
<div  class="card-body row">

  <div>
    <div class="container texte-center">
    <div class="row">
          <div class="row col-12">
              <div v-for="c in armas" style="margin-top: 5%; width: 1500px;" class="col-6 mt-4 d-flex justify-content-center">
                  <div class="col-sm-12 col-md-6">
                      <div id="card" style="background-color: #ff8a85;" class="card">
                          <div  class="card-body row">
                              <div style="font-weight: bold; text-decoration: underline;" class=""><strong>{{ c.displayName }}</strong></div>
                              <div>
                                  <img :src="c.displayIcon">
                              </div>
                              <button @click="infos(c)" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Skins</button>
                          </div>
                      </div>
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
        <div style="background-color:#292929;" class="modal-header">
          <h1 style="color:white" class="modal-title fs-5" id="exampleModalLabel">Skins</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div style="background-color: #141313" class="modal-body">
            <div class="row">
              <div class="col-md-5"></div>
              <div>
            </div>
            <div v-for="skin in this.skin" style="margin-top: 5%;  color:white; width: 500px;" class="col-6 mt-4 d-flex justify-content-center">
              <div class="col-sm-12 col-md-6">
                    <div id="card" class="card">
                        <div style="background-color: #ff8a85;" class="card-body row">
                            <div  class=""><strong>{{ skin.displayName }}</strong></div>
                            <div>
                                <img width="200" :src="skin.displayIcon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div style="background-color:#292929;" class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>

  </div>
  
  </div>

</template>

<style>
</style>