<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <GmapMap
        :center="center"
        :zoom="zoom"
        map-type-id="roadmap"
        style="width: 100%; height: 500px"
    >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
        ],
    }
  }
}
</script>
