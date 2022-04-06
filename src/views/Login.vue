<template>
    <div style="margin-top: 50rem;">
        <div>
            <!-- <b-button v-b-modal.modal-1>로그인 버튼</b-button>
             <b-button @click="showModal">Open Modal</b-button>  -->

                <b-modal id="login" v-model="modalShow" hide-footer @show="show" @hidden="hidden" title="Login">
                    <b-form-group label="Email" label-for="name-input" invalid-feedback="Password is required">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="person-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="me@exaple.com"></b-form-input>
                        </b-input-group>
                    </b-form-group>
                    <b-form-group label="Password" label-for="name-input" invalid-feedback="Password is required">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="lock-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="password" placeholder="Enter Your Password"></b-form-input>
                        </b-input-group>
                    </b-form-group>
                    <div style="display:flex; justify-content: right; font-size: 0.9rem;">
                        <a hef="#">아이디·비밀번호 찾기</a>
                    </div>   
                    <div style="display:flex; justify-content: center; ">
                    <b-button class="mt-3" variant="primary" block @click="login" style="height: 3.2rem; width: 20rem;" >Login</b-button>
                    </div>
                    <div style="display:flex; justify-content: center; margin:2rem 0rem; width:100%; font-size: 0.9rem;"> 
                        <div>
                            <span >계정이 없으신가요?</span> <a hef="#" style="color: #007bff;">회원가입</a>
                        </div>
                    </div> 
                    <div class="orElse">
                        다른 서비스로 로그인
                    </div>
                    <div class="socialIconLine">
                        <div class="socialIcon">
                            <a href="#"><img src="@/assets/Icon_google.jpg" style="height: 3.3rem; width: 3.3rem;"  /></a>
                        </div>
                        <div class="socialIcon">
                            <a href="#"><img src="@/assets/Icon_naver.png"  style="height: 3rem; width: 3rem;"  /></a>
                        </div>
                        <div class="socialIcon"> 
                            <a href="#"><img src="@/assets/Icon_kakao.jpg"  style="height: 3.3rem; width: 3.3rem;"  /></a>
                        </div>
                    </div>   
                    <!-- <b-button class="mt-3" variant="outline-secondary" block @click="hideModal">Close Me</b-button> -->
            </b-modal>
        </div>
        {{id}}
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: '',
    components: {},
    data() {
        return {
             sampleData: '',
             id: '',
             pw: '',
             token: '',
             loginObj: '',
             modalShow: false,


        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        show(){
            // alert("떳냐")
        },
        hidden(){
           this.id = "";
           this.pw = "";
        },
        showModal(){
            this.modalShow = true;
        },

        login(){
            axios.post("http://localhost:2030/login", {userId: "egu1111@google.com", password: "1234"})
            .then((res)=>{
                console.log(res)
                this.token = res.data.data
            }).catch((err)=>{
                console.log(err)
            })
        },
        findId(){
            axios.get("http://localhost:2030/user", {headers: { "X-AUTH-TOKEN": this.token}})
            .then((res)=>{
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            });


            // axios.get("https://reqres.in/api/users/2", { headers: { "access-token" : this.token}})
            // .then((res)=>{
            //     console.log(res)
            // }).catch((error)=>{
            //     console.log(error)
            // });
        },

    }
}
</script>
<style scoped>
    .socialIconLine{
        display: flex;
        flex-direction: row;
        height: 4rem;
        align-items: center;
        justify-content: center;
    }
    .socialIcon{
        margin: 0rem 0.8rem;
        width: 3.5rem;
    }

    .orElse {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        color: rgba(107, 102, 102, 0.767);
        font-size: 12px;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    .orElse::before,
    .orElse::after {
        content: "";
        flex-grow: 1;
        background: rgba(163, 161, 161, 0.719);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }
</style>