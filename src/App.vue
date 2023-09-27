<script>
import {RouterLink, RouterView} from 'vue-router'

export default{
    components:{
        RouterLink, RouterView
    },
    data: function () {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>
<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a style="color:#cfb9b8;" class="navbar-brand" href="/"><strong>Consumindo API de valorant</strong></a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a style="color: #f72314" class="nav-link active" aria-current="page" href="/armas">Armas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style>
app{
    opacity: 0.5;
}
</style>
