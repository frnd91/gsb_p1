<template>
  <NavbarComponent />
  Bienvenue {{ this.$store.state.utilisateur.nom +" "+ this.$store.state.utilisateur.prenom}}

  <div>
      <h1>Pinguin</h1>
      <div v-if="utilisateur">
        <p>{{ utilisateur }}</p>
      </div>
      
  </div>
</template>
  
<script>
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent,
  },
  computed:{
    utilisateur(){
      return this.$store.state.utilisateur;
    }
  }
}
</script>
  