<template>
<main>


    
    <section>
        <h1>{{ $store.getters.SELECTEDDOCUMENT.title }} </h1>
        <h2>{{ $store.getters.SELECTEDDOCUMENT.subtitle }} </h2>
    </section>

    <section> 
         <h2>{{ $store.getters.SELECTEDDOCUMENT.texttop }} </h2>
    </section>

    <div>
        <li v-for="item in $store.getters.SELECTEDDOCUMENT.imagesbottom" :key="item">
            <!--<a>{{ $store.getters.getFiles[item.name] }}</a>-->
        </li>
        
    </div>



</main> 
</template>

<script>
import _ from 'lodash';

export default {
    name: 'ArtWork',
    data() {
        return {
            key: 0,
        }
    }
}
</script>


<style>

</style>
