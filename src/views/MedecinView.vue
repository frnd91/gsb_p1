<template>
  <div>
    <NavbarComponent />
    <RechercheMedecinComponent />
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent';

export default {
  components: {
    NavbarComponent,
    RechercheMedecinComponent,
    ListeRapportsComponent,
    FicheMedecinComponent,
  },
};
</script>