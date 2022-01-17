<template>
    <div :style=styleObject>
       <slot name="content">
            <div class="descriptions" :key=i v-for="(description, i) in content.descriptions">
                <div :key=j v-for="(text, j) in description">
                    <span>{{text}}</span>
                </div>    
            </div>
            
       </slot>   
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    props: {
        content: Object,
    },
    data() {
        return {
             styleObject:{
                 'font-size':this.content.contentFontSize,
                 'color':this.content.contentFontColor
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
    .descriptions{
        margin-bottom: 2rem;
    }


</style>