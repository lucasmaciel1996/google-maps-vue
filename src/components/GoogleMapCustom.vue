<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <GmapMap
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 100%; height: 500px"
    >
        <gmap-custom-marker
            :key="index"
            v-for="(m, index) in markers"
            :marker="m.position"
            alignment="top"
            :offsetX="-10"
            :offsetY="17.5"
          >
           <gmap-custom-info :title="Teste"/>           
        </gmap-custom-marker>
    </GmapMap>
  </div>
</template>
<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker';
import InfoMaps from './InfoMaps.vue';
import GetLocation from './../services/getLocation';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components:{
    'gmap-custom-marker': GmapCustomMarker,
    'gmap-custom-info':InfoMaps
  },
  data(){
    return{
        center:{
            lat:-25.5265276,
            lng:-49.2759899
        },
        zoom:10,
        markers:[
            { position: {lat:-25.5265276, lng:-49.2759899} },
            { position: {lat:-25.462779, lng:-49.522901} },
            { position: {lat:-25.415107, lng:-49.234280} },
        ]
    }
  },
  mounted(){
    this.getLocation('81825130');
  },
  methods:{
    getCep(cep){
      getLocation.getLocation(cep).then(response =>{
        console.log(response);
      })
    }
  }
}
</script>
