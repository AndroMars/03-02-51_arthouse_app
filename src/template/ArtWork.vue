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
            <a>{{ $store.getters.getFileURL(item) }}</a>
            <!-- {{ item }} -->
        </li>
        
    </div>



</main> 
</template>

<script>
import _ from 'lodash';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    name: 'ArtWork',
    data() {
        return {
            key: 0,
        }
    },
    mounted() {
        var ref = firebase.firestore().ref('/fl_content');
        console.log(ref);
    }
}
</script>


<style>

main {

  min-height: 100%;  
}

</style>
