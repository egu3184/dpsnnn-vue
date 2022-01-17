<template>
    <div :style=styleObject>
       <slot name="title">
           <div :key=i v-for="(text, i) in head.title">
               <span>{{text}}</span>
            </div>
       </slot>   
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    props: {
        head: Object,
    },
    data() {
        return {
             styleObject:{
                 'font-size':this.head.titleFontSize,
                 'color':this.head.titleFontColor
             }
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style>
    
</style> 