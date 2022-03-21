<template>
    <div id="pay_constructor">
        <div class="reserv_info_container box"> 
            <div class="theme_info_img_div"> 
                <img :src="theme_img" style="justify-content: center; align-item: center; margin:0.5rem" />
            </div>
            <div class="theme_info_content">
                <div class="theme_info_item">
                    <dt>지점명 </dt>&nbsp;&nbsp;
                    <dd>{{branchName}}</dd>
                </div>
                <div class="theme_info_item">
                    <dt>테마명 </dt>&nbsp;&nbsp;
                    <dd>{{themeName}}</dd>
                </div>
                <div class="theme_info_item">
                    <dt>예약 시간 </dt>&nbsp;&nbsp;
                    <dd>{{slotDate}}</dd>
                </div>
            </div>
            <div class="input_info_content"> 
            <div class="input_info_item">
                    <dt>예약자명 </dt>&nbsp;&nbsp;
                    <dd>{{booker_name}}</dd>
                </div>
                <div class="input_info_item">
                    <dt>연락처 </dt>&nbsp;&nbsp;
                    <dd>{{phone_number}}</dd>
                </div>
                <div class="input_info_item">
                    <dt>인원수 </dt>&nbsp;&nbsp;
                    <dd>{{numUsers}}명</dd>
                </div>
            </div>  
        </div>
       <div class="second_container">
          <div class="reserv_term_of_use_container box">
                <dt class="dt">이용약관 / 환불규정 </dt>
                <dd>
                     <div class="dd"> 
                <div style="margin: 0.8rem 0.8rem; font-size:0.8rem">
                    <span>※ 방탈출 단편선은 이용자의 개인정보를 중요시하며, "개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등"에 관한 법률을 준수하고 있습니다.</span><br/>
                <br/><br/>
                <span class="ddTitle">■ 개인정보의 수집 및 이용목적</span><br />
                <div class="ddSubContent">
                <span>방탈출 단편선은 수집한 개인정보는 다음의 목적을 위해 활용합니다.</span>
                </div><br/>
                    <div class="ddSubTitle"> 
                    <span>
                        가) 예약 서비스 제공을 위한 계약 이행 및 정산
                    </span>
                    </div>
                    <div class="ddSubContent">
                        <span>(1)&nbsp;예약 서비스 제공에 관한 계약 이행과 예약자 확인, 요금 결제, 예약 취소와 환불 등 </span>
                    </div><br/>
                    <div class="ddSubTitle">
                        <span>
                            나) 회원 관리 및 홈페이지 서비스 제공
                        </span>
                    </div>
                    <div class="ddSubContent">
                        <span> (1)&nbsp;회원제 서비스 이용에 따른 본인확인기관을 통한 본인인증, 개인식별, 불량회원의 부정 이용방지와 
                            비인가 사용방지, 가입 의사 확인
                        </span><br/>
                    </div>
                    <div class="ddSubContent">    
                        <span>    
                           (2)&nbsp;Q&A를 통한 문의 서비스, 후기 작성 등에 필요한 기록보존
                        </span>
                    </div><br/><br/>
                    <span class="ddTitle">■ 수집하는 개인정보 항목 및 수집방법</span><br /><br/> 
                    <div class="ddSubTitle"> 
                    <span>
                        가) 수집하는 개인정보 항목
                    </span>
                    </div><br/>
                     <div class="ddSubContent">
                        <span>(1)&nbsp; 회원가입: 이름,전화번호,아이디,비밀번호,가입날짜,이메일,  </span>
                    </div>
                     <div class="ddSubContent">
                        <span>(2)&nbsp; 비회원 예약: 이름,전화번호,이메일,  </span>
                    </div>
                    <div class="ddSubContent">
                        <span>(3)&nbsp;서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집 될 수 있는 항목: IP Address, 쿠키</span>
                    </div>
                    <div class="ddSubContent">
                        <span>(4)&nbsp; 결제 서비스 이용 과정 시 수집하는 정보: 신용카드(카드사명, 카드번호), 휴대폰(휴대폰번호, 통신사, 결제승인번호), 계좌이체(은행명, 계좌번호)
                    </span>
                    </div>
                     <div class="ddSubContent">
                        <span>(5)&nbsp;수집하는 개인정보는 서비스 제공에 필요한 최소한의 정보만으로 한정되며, 회원(고객)의 기본적 인권을 침해할 우려가 있는 민감한 개인정보(인종, 종교, 사상, 출신지, 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않습니다.
                    </span>
                    </div><br/>
                    <div class="ddSubTitle"> 
                    <span>
                        나) 수집 방법
                    </span>
                   </div>
                    <div class="ddSubContent">
                        <span>(1)&nbsp;개인정보 수집방법 : 홈페이지, 카카오톡 플러스친구, 서면양식, 전화, 이메일
                    </span>
                    </div><br/>
                    <div class="ddSubTitle"> 
                    <span>
                        다) 동의 여부
                    </span>
                   </div>
                    <div class="ddSubContent">
                        <span>
                            (1)&nbsp;동의를 거부할 권리 및 동의를 거부할 시 불이익: 위 개인 정보의 수집 및 이용에 동의하시지 않을 경우 회원의 가입 및 예약 서비스 제공이 불가능합니다.
                        </span>
                    </div><br/>
                    <span class="ddTitle">■ 개인정보 및 고유식별정보의 보유 및 이용기간</span><br /><br/> 
                    <div class="ddSubTitle"> 
                    <span>
                        가) 관계법령 예시
                    </span>
                    </div>
                    <div class="ddSubContent">
                        <span>
                           상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. 
                        </span><br/><br>
                        <span>
                            - 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
                        </span><br/>
                        <span>
                            - 거래에 관한 장부 및 증거서류: 5년 (국세기본법)
                        </span><br/>
                        <span>
                            - 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)
                        </span>
                        <span>
                            - 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)
                        </span>              
                    </div><br/>
                    <div class="ddSubTitle"> 
                    <span>
                        나)&nbsp;12개월 이상 서비스 장기 미이용자의 개인정보를 파기하거나 다른 정보와 별도로 분리하여 저장관리하며, 개인정보를 파기 또는 분리 저장하기 전 이를 회원에게 전자우편· 서면· 팩스· 전화 등의 방법으로 통지합니다.
                    </span>
                    </div><br/>
                    <span class="ddTitle">■ 개인정보의 파기절차 및 방법</span><br /><br/> 
                    <div class="ddSubTitle"> 
                    <span>
                        가) 파기 절차
                    </span>
                    </div>
                    <div class="ddSubContent">
                        <span>
                            -&nbsp;회원가입 시 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
                        </span>
                        <span>
                            -&nbsp;별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                        </span>
                    </div><br/>
                    <span>
                        나) 파기 방법
                    </span>
                    <div class="ddSubContent">
                        <span>
                            -&nbsp;전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                        </span>
                         <span>
                            -&nbsp;종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                        </span>
                    </div><br/>
                    <span class="ddTitle">■ 개인정보의 열람 및 정정</span><br/>
                    <div class="ddSubContent">
                        <span>
                           -&nbsp;회원(고객)은 언제든지 등록되어 있는 본인의 개인정보를 열람하거나 정정하실 수 있습니다.
                        </span>
                    </div><br/>    
                </div>
                     </div>
                </dd>    
            </div>
            <div class="right_container">
                <div class="deposit_box box">
                   <div class="payment_Method_box">
                       <div>
                         <b-form-radio-group v-model="payment_Method" :options="method_radio_options"
                            class="pay_method"  size="lg" checked="onSite" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-radio-group>
                       </div>
                   </div>
                   <div class="payment_content">
                        <div class="pay_onSite" v-if="payment_Method == method_radio_options[0].item">
                            <div style="">
                                <span>※ 저희 단편선은 현장결제시 예약금제로 운영하고 있습니다.</span>
                            </div>
                            <div style="margin-top: 2rem;">
                                <div style="margin: 0.5rem 0rem; display:flex; flex-direction:row;" >
                                    <div style="margin-right: 2rem;"><label style=" font-size: 1.5rem; dispaly: inline;">입금자명 </label></div>
                                    <div><b-form-input id="input-none" v-model="depositor_name" style="width: 10rem; dispaly: inline;"></b-form-input></div>
                                    
                                </div>
                                <div>
                                    <label style="margin-right: 2rem; font-size: 1.5rem">입금계좌  </label>
                                    <b-form-select class="selectDepositBank" style="width: 20rem; height: 2.5rem; font-size: 1.2rem; text-align:center;" v-model="deposit_account" :options="deposit_account_list">
                                        <template >
                                            <b-form-select-option value="" disabled>-- 입금 은행을 선택하세요 --</b-form-select-option>
                                         </template>
                                    </b-form-select>
                                </div>
                            </div>
                        </div>
                        <div class="pay_card" v-if="payment_Method == method_radio_options[1].item">2</div>
                        <div class="pay_accountTransfer" v-if="payment_Method == method_radio_options[2].item">3</div>
                   </div>
                </div>
                <div class="total_Price_box box">
                    <div class="total_Price">
                        <span style="margin-right: 2.2rem;">{{totalOrDeposit}} </span>
                        <span>{{totalOrDeposit_Price}}원</span>
                    </div> 
               </div>
            </div>
        </div>     
        <div class="agreeCheckBox box">
               <div>  
                <b-form-checkbox
                    v-model="conditions_agree"
                    name="checkbox-5"
                     size="lg"
                    value=true
                    unchecked-value=false
                >
                예약 정보를 확인하고, 이용 약관 및 환불 규정에 동의합니다.
                </b-form-checkbox>
               </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
    name: '',
    components: {},
    data() {
        return {
             theme_img : "",
             branchName : "",  
             themeName : "",
             slotDate : "",
             booker_name: '',
             phone_number: '',
             numUsers : '',

             payment_Method: 'onSite',
             method_radio_options: [
                { item : 'onSite' , name: '현장결제'},
                { item : 'card' , name: '카드'},
                { item : 'accountTransfer' , name: '계좌이체', notEnabled: true} 
             ],
             deposit_price: 20000 ,
             totalOrDeposit : '예약금',
             totalOrDeposit_Price : 20000,

             deposit_account: '',
             deposit_account_list : [ ],
            
             depositor_name: '',
             conditions_agree : false,

             slotId : '',
             formatted_date : '',

             themeId : '',
             branchId : '',
             paymentId : '',

       };
    },
    setup() {},
    watch : {
        payment_Method(methodName){
            if(methodName == this.method_radio_options[0].item){
                this.totalOrDeposit = '예약금'
                this.totalOrDeposit_Price = this.deposit_price
            }else{
                this.totalOrDeposit = '결제금'
                this.totalOrDeposit_Price = this.$store.state.capacityAndPrice.price
            }
        }
    },
    created() {},
    mounted() {
        this.getThemeInfo();
        this.getBranchInfo();
        this.getSlotInfo();
        this.getBookerInfo();
        this.getBankAccountInfo();
    },
    unmounted() {},
    methods: {
        ...mapMutations(['alert_Warning', 'alert_Error']),

        getThemeInfo(){
            let theme = this.$store.state.selectedThemeInfo;
            this.themeName = theme.name;
            this.theme_img = theme.themeImg;
            this.themeId = theme.id;
        },
        getBranchInfo(){
            let branch = this.$store.state.selectedBranchInfo;
            this.branchName = branch.name;
            this.branchId = branch.id;
        },
        getSlotInfo(){
            let slot = this.$store.state.selectedSlotInfo;
            let formatted_slotTime = slot.alterdSlotTime;
            this.formatted_date =  this.dateFormatting(slot.slotDate);
            this.slotDate = this.formatted_date+"\u00A0"+formatted_slotTime
            this.slotId = slot.id;
        },
        getBookerInfo(){
            this.booker_name = this.$store.state.booker_name;
            this.phone_number = this.$store.state.phone_number;
            this.numUsers = this.$store.state.capacityAndPrice.capacity;
        },
        dateFormatting(slotDate){
            let date = slotDate.split('-')
            let year = date[0].substring(2)
            let month = date[1].substring(1)
            let day = date[2]
            return year+"년"+'\u00A0'+month+"월"+'\u00A0'+day+'일'
        },
        getBankAccountInfo(){
            axios({
                url: 'http://localhost:2030/bank',
                method: 'get',
                responseType: 'json',
                params: {
                    branchId : this.$store.state.selectedBranchInfo.id
                }
            }).then((response)=>{
                
                for(let i in response.data.list){
                    let account =
                    this.banckAccountFormattion(
                            response.data.list[i].bankName,
                            response.data.list[i].bankAccountNumber,
                            response.data.list[i].bankAccountHolder
                    )
                    this.deposit_account_list.push(new String(account))
                }
            });
        },
        banckAccountFormattion(name,number,holder){
            // 국민은행 1111-1111-11-11 (예금주: ㅇㅇㅇ)
            let formatted = name+"\u00A0"+number+"\u00A0"+"("+holder+")";
            return formatted;
        },

        //입력 혹은 선택 유무 체크 메서드
        isItemInputAndSeleted(){
            if(!this.checkItems(this.depositor_name, "입금하실 분의 이름을 입력해주세요.")
                || !this.checkItems(this.deposit_account, "입금 은행을 선택해주세요.") 
                ||!this.checkItems(this.conditions_agree, "예약 정보를 확인하시고 이용 약관 및 환불 규정에 동의해주세요.")){
                return 
            }else{
                return true
            }
        },
        checkItems(item, message){
            if(!item){
                this.alert_Warning(message)
                return false
            }else{
                return true
            }
        },
        //자동 입금 확인 요청 메서드
        requestToPay(){
            if(this.payment_Method == 'onSite') //현장결제일 경우
                //입금 확인 요청
                axios({
                    url: '',
                    method: 'post',
                    data: {
                        depositorName : this.depositor_name,
                        depositAccount : this.deposit_account,
                        depositPrice : this.totalOrDeposit_Price
                    }
                }).then((response)=>{
                    //우선 임시 예약 완료 후
                    //서버를 통해 대행업체에 확인 요청을 보냄. -> 클라이언트에서 보내기
                    //서버에서 callback 응답 받으면 업데이트. -> 서버에서 받은 정보로 구분하는 방법 알아보기. 
                });
        },

        //axios 결제 + 예약 요청 메서드
        async saveReservation(){

            let endPoint = false

            if(this.payment_Method == 'card'){ //카드일 경우
                //1.클라이언트에서 pg사로 결제 url 요청 + callback url(서버) 함께 보냄
                //2.받은 url로 리다이렉트
                //3.결제
                //4.pg사에서 클라이언트로 결제 정보와 함께 callback url로 리다이렉트
                //5.서버에서 결제 마무리 처리  
                return this.alert_Warning("아직 카드 결제가 지원되지 않습니다.")


             }else if(this.payment_Method == 'onSite') //현장결제일 경우
                //결제 정보 넣기
                await axios({
                    url: 'http://localhost:2030/payment',
                    method: 'post',
                    data: {
                        paymentMethod : this.payment_Method,
                        totPrice : this.totalOrDeposit_Price,
                        depositorName : this.depositor_name,
                        depositPrice : this.deposit_price,
                        depositAccount : this.deposit_account
                    }
                }).then((response)=>{
                        // id
                        console.log(response)
                        this.paymentId = response.data.data.id
                        console.log("payId = "+this.paymentId)
                });
                //예약 넣기
                await axios({
                    url: 'http://localhost:2030/reservations',
                    method: 'post',
                    data: {
                        bookName : this.booker_name,
                        slotId : this.slotId,
                        branchId : this.branchId,
                        themeId : this.themeId,
                        numUsers : this.numUsers,
                        privacyAgree : this.$store.state.privacy_agree,
                        conditionsAgree : this.conditions_agree,
                        paymentId : this.paymentId,
                        phoneNum : this.phone_number
                    }

                })
                .then((response)=>{
                    console.log(response)
                    if(!!response.data.data){
                        endPoint = true
                        this.$store.commit("setReservationId",response.data.data)
                        console.log("reservationId = "+this.$store.state.reservationId)
                    }
                    
                })
                .catch((error)=>{
                    this.alert_Error(error.data.message)
                })
               console.log(endPoint)
               return endPoint 
            },
            //예약번호 만들기 - 보류
            // makeReservationNum(){
            //     const first = this.formatted_date.split('-')
            //     console.log()
            //     return this.slot 

            // },


        }
        


    }

</script>
<style scoped>
    #pay_constructor{
        background-color: rgb(247, 247, 247);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
       
    }   
    .box{
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
        margin: 0rem 0.5rem;
    }

   .reserv_info_container{
       width: 75rem;
       height: 15rem; 
       margin-bottom: 1rem;
       display: flex;
       flex-direction: row;
   }

   
   .theme_info_img_div{
       width: 15rem;
       height: 12rem;
       justify-content: center;
       height: 14.8rem;
       display: flex;
   }
   .theme_info_content{
       width: 38rem;
       height: 14.8rem;
       /* background-color: beige; */
       display: flex;
       flex-direction: column;
       /* align-items: center; */
       justify-content: center;
   }
   .theme_info_item{
       height: 3rem;
       margin: 0.5rem 2rem;
       display: flex;
   }
   dt{
       font-size: 1.8rem;
       width: 10rem;
       color: rgb(126, 122, 122);
   }
   dd{
        font-weight: 400;
        font-size: 1.6rem;
   }
    .input_info_content{
       width: 38rem;
       height: 14.8rem;
       /* background-color: beige; */
       display: flex;
       flex-direction: column;
       justify-content: center;
   }
   .input_info_item{
       height: 3rem;
       font-size: 2rem;
       margin: 0.5rem 2rem;
       display: flex;
       
   }


   .second_container{
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: center;


   }

    .reserv_term_of_use_container{
       width: 32rem;
       height: 24rem; 
       display: flex;
       flex-direction: column;
       margin-left: 0rem;
       margin-right: 1rem;
   } 
   .right_container{
       width: 42rem;
       height: 24rem;     
   }
   .total_Price_box{
       /* background-color: red; */
       width: 100%;
       height: 7rem;
       margin-top: 1rem;
       margin-left: 0rem;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .total_Price{
       width: 50%;
       font-weight:700; 
       font-size:2.2rem; 
       display: inline; 
       margin-right:2rem
      
   }
   .total_Price :nth-child(1){
       color: rgb(255, 94, 0);
   }


   .deposit_box{
       /* background-color: rgb(255, 230, 0); */
        width: 100%;
        height: 16rem;
        margin-left: 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        
   }


   .dt{
        height: 4rem;
        width: 30rem;
        padding: 1rem;
        font-size: 1.7rem;
        font-weight: bold;
        text-align: center;
        margin: 0 0.6rem;
        color: rgb(126, 122, 122);
        border-bottom: 2px solid rgb(207, 199, 199);
        /* border-radius: 10px; */
        margin-bottom: 0.5rem;
   }
   .dd{
        margin-top: 1.5%;
        height: 18rem;
        margin-left: 2%;
        margin-right: 2%;
        background-color: rgb(248, 248, 248);
        overflow: auto;
        border: 0.08rem solid rgb(163, 159, 159);
        border-radius: 2px;
        -ms-user-select: none; 
       -moz-user-select: -moz-none;
       -khtml-user-select: none;
       -webkit-user-select: none;
        user-select: none;
    }

    .payment_Method_box{
        width: 100%;
        height: 25%;
        /* justify-content: center; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pay_onSite{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .agreeCheckBox{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75rem;
        height: 3.5rem;
        font-size: 1.4rem;
        margin-top: 1rem;
    }



     @media (max-width: 798px) {
        .reserv_info_container{
            width: 100%;
            flex-direction: column;
            height: 40rem;
        }
        dt{
            font-size: 1.2rem;
            width: 6rem;
        }
        dd{
            font-size: 1.1rem;
        }
        .theme_info_item item{
            margin: 1rem 2rem;
        }
        .theme_info_content{
            width: 100%;
        }
        .input_info_content{
            width: 100%;
        }
        .reserv_term_of_use_container{
            width: 100%;
            margin: 0rem 0rem;
            margin-bottom: 1rem;
        }
        .dt{
            width: 100%;
            margin: 0rem 0rem;
            font-size: 1.5rem;
        }
        .dd{
           

        }
        .second_container{
            flex-direction: column;
            width:100%;
        }
        .right_container{
            width:100%;
        }

        .agreeCheckBox{
            width: 100%;
            font-size: 1rem;
        }
        .total_Price_box{
            width: 100%;
        }
        .selectDepositBank{
            width: 10rem !important;
        }
        .pay_method{
            font-size: 0.8rem;
        }
        .total_Price{
            width: 100%;
            font-size: 1.5rem;
            margin-left: 1rem;
        }
        .total_Price_box{
            height: 5rem;
        }
    }    

</style>