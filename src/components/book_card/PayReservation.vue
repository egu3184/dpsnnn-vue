<template>
    <div id="pay_constructor">
        <div class="right_box">
            <div class="right_box_item box"></div>
           <div class="right_box_item box"></div>
        </div>    
        <div class="left-box">
           <div class="right_box_item box"></div>
           <div class="right_box_item box"></div>
           <div class="right_box_item box" style="height: 9rem"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
             sampleData: ''
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
    #pay_constructor{
        background-color: rgb(247, 247, 247);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 38rem;
    }
    .box{
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
        margin: 0rem 1rem;
    }
    .right_box_item{
        width: 33rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.8rem;
    }

    



</style>