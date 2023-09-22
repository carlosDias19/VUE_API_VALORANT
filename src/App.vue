<script>

export default{
    data: function () {
        return {
            character: null,
        }
    },
    computed: {
    },
    methods: {
        getDados(){
            fetch("https://valorant-api.com/v1/agents").then(res => { res.json().then((x) =>{ this.character = x.data })})
        },
        teste(c){
            console.log(c)
            this.abreModal();
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
      <h5 class="text-body-emphasis h4">Usando API do valorant com vue js.</h5>
      <span class="text-body-secondary">TKS</span>
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
            <div v-for="c in character" class="col-6 d-flex justify-content-center">
                <div class="col-sm-12 col-md-6">
                    <div id="card" class="card">
                        <div class="card-body row">
                            <div style="" class=""><strong>{{ c.displayName }}</strong></div>
                            <div>
                                <img :src="c.displayIcon">
                            </div>
                            <div>
                                <p class="mt-4"> <strong>Description:</strong> {{ c.description }}</p>
                            </div>
                            <button type="button" @click="teste(c)" class="btn btn-dark">Info Skills</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div id="myModal" class="modal" tabindex="-1" role="dialog">
  <div  class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  </div>

</template>
<style scoped>
</style>
