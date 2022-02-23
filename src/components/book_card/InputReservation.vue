<template>
    <div class="input_container">
        <div class="agreementForCollection box">
            <dt>
              개인정보 수집•이용 동의  
            </dt>
            <br/>
            <div class="dd"> 
                
                <span> - 이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.</span><br/>
                <br/>
                <span class="ddTitle">1. 수집하는 개인정보의 항목 및 수집방법</span><br /> 
            </div>       
        </div>
        <div class="inputBox box"></div>

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
<style scoped>
    .input_container{
        background-color: rgb(247, 247, 247);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 3rem;
        margin-bottom: 2rem;
        width: 100%;
        height: 31rem;
    }

    .box{
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
        margin-left: 1rem;   
    }

    .agreementForCollection{
        width: 28rem;
        height: 30rem;
        
    }
    .inputBox{
        width: 28rem;
        height: 30rem;
    }
    dt {
        padding: 1rem;
        font-size: 1.7rem;
        font-weight: bold;
        text-align: center;
        margin: 0 0.6rem;
        color: rgb(126, 122, 122);
    }
    .dd{
        border: 0.1rem solid rgb(126, 122, 122);;
        height: 23rem;
        margin-left: 2%;
        margin-right: 2%;
        background-color: rgb(247, 247, 247);
        overflow: auto;
    }
    .ddTitle{
        font-size: 1.3rem;
        font-weight: bold;
        padding-top: 0.5rem;
    }

</style>