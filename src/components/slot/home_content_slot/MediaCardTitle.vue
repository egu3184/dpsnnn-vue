<template>
    <div>
       <slot name="mediaTitle">
          <span :key="i" v-for="(text, i) in mediaTitle">{{text}}<br/></span>
       </slot>   
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    props: {
        mediaTitle: Array,
    },
    data() {
        return {
            
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