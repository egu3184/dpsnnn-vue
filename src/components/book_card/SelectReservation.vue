<template>
    <div class= "select_container">
        <div class="book_item branch">
            <dt>지점</dt>
            <dd>
                <ul>
                    <div :key="index" v-for="(branch, index) in branchList">
                        <li>
                            <a href="javascript:void(0);" :class="{on : activatedBranchId == branch.id}" v-on:click="selectBranch(branch.id), getSlotTime(), getSlotMaxDateAndDisableDate()">{{branch.name}}</a>
                        </li>
                    </div>
                </ul>
            </dd>
        </div>
        <div class="book_item theme">
            <dt>테마</dt>
            <dd>
                <ul>
                    <div :key="index" v-for="(theme, index) in themeList">
                        <li>
                            <a  style="white-space: pre;" 
                                href="javascript:void(0);"
                                :class="{on : activatedThemeId == theme.id}"
                                v-on:click="selectTheme(theme.id) , getSlotTime(), getSlotMaxDateAndDisableDate()">{{theme.alteredName}}</a>
                        </li>
                    </div>
                </ul>
            </dd>
        </div>
        <div class="book_item cal">
            <dt>날짜</dt>
            <dd>
               <!-- <b-row lg="10">
                  <b-col lg="10">  -->
                <b-calendar
                    :date-info-fn="dateClass"
                    :date-disabled-fn="dateDisabled"
                    v-model="value"
                    :min="min"
                    :max="max"
                    :hide-header="hideHeader"
                    @context="onContext"
                    block
                    locale="en-US">
                </b-calendar>
                 <!-- </b-col>
             </b-row>   -->
            <!-- <b-col> <p>Value: <b>'{{ context.selectedYMD }}'</b></p> <p
            class="mb-0">Context:</p> <pre class="small">{{ context }}</pre> </b-col> -->
            </dd>
        </div>
        <div class="book_item time">
            <dt>시간</dt>
            <dd>
                <ul>
                    <div v-for="(time, index) in slotList" :key="index">
                        <div
                            v-if="time.isShowed == true && time.isOpened == true && time.isReserved == false">
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    :class="{on : activatedSlotId == time.id}"
                                    v-on:click="selectSlot(time.id)">
                                    <b-icon v-if="activatedSlotId == time.id" icon="check-square"></b-icon>
                                    <b-icon v-else-if="activatedSlotId != time.id" icon="square"></b-icon>&nbsp;
                                   {{time.alterdSlotTime}}</a>
                            </li>
                        </div>
                        <div
                            v-else-if="time.isShowed == true && time.isOpened == true && time.isReserved == true">
                            <li>
                                <a href="javascript:void(0);" class="none">
                                    <b-icon icon="x-square" scale="1" variant="light"></b-icon>
                                   {{time.alterdSlotTime}}</a>
                            </li>
                        </div>
                    </div>
                </ul>
            </dd>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'
    // CommonJS
    const Swal = require('sweetalert2')
    import {mapMutations, mapState} from 'vuex'
    import {eventBus} from '../../main.js'

    export default {
        name: '',
        components: {},
        data() {
            const now = new Date() //현재 날짜 및 시간
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            const minDate = new Date()
            minDate.setMonth(minDate.getMonth())
            minDate.setDate(minDate.getDate())

            return {
                value: today, context: 'null', min: this.toStringByFormattingDate(minDate),
                //max: maxDate,
                max: '',
                hideHeader: true,

                branchList: [],
                themeList: [],
                slotList: [],
                alterdSlotTimes:[],

                activatedBranchId: 1, //초기값
                activatedThemeId: 1, //초기값
                activatedDate: '',
                // activatedTime: '',
                activatedSlotId: '',

                isNotShowSlotDate: [],
                availableSlotDate: [],
                intervalTotalSlotDate: []
            }
        },
        setup() {},
        created() {
            this.$store.commit("deleteInputItems")
            this.$store.commit("deleteSelectedItems")
            this.$store.commit("setReservationInfo",{})
        },
        mounted() {
            //페이지 열리자마자 실행
            this.getBranchAndTheme();
            this.getSlotMaxDateAndDisableDate();
            
        },
        computed:{
            ...mapState(['selectedTheme'])
        },
        unmounted() {},
        beforeDestroy(){
            // this.saveItemsToVuex();
        },
        methods: {
            ddd(){
                alert("ddd")
            },
            //vuex의 mapMutation
            ...mapMutations(['alert_Error', 'alert_Warning']),
           
            //선택 항목들을 vuex에 저장하는 메서드(부모 컴포넌트에서 호출)
            saveItemsToVuex(){
                this.setSelectedItem(this.themeList, this.activatedThemeId, "setSelectedTheme")
                this.setSelectedItem(this.branchList, this.activatedBranchId, "setSelectedBranch")
                this.setSelectedItem(this.slotList, this.activatedSlotId, "setSelectedSlot")
            },
            setSelectedItem(list,id,mutationName){
                let object ={}
                for(let i in list)
                    if(list[i].id == id)
                        object = list[i]
                this.$store.commit(mutationName, object);
            },
            //이전 버튼 클릭시 선택 항목들이 저장된 vuex 비우기
            deleteItemFromVuex(){
                
                this.$store.commit("setSelectedTheme", "")
                console.log(this.$store.state.selectedThemeInfo)
                this.$store.commit("setSelectedBranch", "")
                console.log(this.$store.state.selectedBranchInfo)
                this.$store.commit("setSelectedSlot", "")
                console.log(this.$store.state.selectedSlotInfo)
            },
            //선택항목을 모두 선택했는지 확인하는 메서드(부모 컴포넌트에서 호출)
            isItemSelected(){
                let check = false
                if(!this.activatedBranchId){ 
                    return this.alert_Warning("지점을 선택해주세요.")
                }else if(!this.activatedThemeId){
                    return this.alert_Warning("테마를 선택해주세요.")
                }else if(!this.activatedSlotId){
                    return this.alert_Warning("예약 시간을 선택해주세요.")
                }else if(!!this.activatedBranchId && !!this.activatedThemeId && !!this.activatedSlotId){
                    check = true
                }
                return check
            },
            //달력 날짜를 선택했을 때 호출되는 메서드
            onContext(ctx) {
                this.context = ctx
                this.activatedDate = ctx.selectedYMD
                this.getSlotTime()
            },
            //선택 항목을 클릭했을 때 activated~Id에 ~id값을 저장
            selectBranch(branchId) { this.activatedBranchId = branchId; },
            selectTheme(themeId) { this.activatedThemeId = themeId; },
            selectSlot(slotId) { this.activatedSlotId = slotId; },

            getBranchAndTheme() {
                //테마 정보 가지고 오기
                axios(
                    {method: "get", url: "http://localhost:2030/themes", responseType: "json"}
                ).then((response) => {
                    for (var i in response.data.list) {
                        let themeName = response.data.list[i].themeName
                        let themeNameArray = themeName.split(" ");
                        this.themeList.push(
                            {
                                id: response.data.list[i].themeId,
                                name : themeName,
                                alteredName: themeNameArray.length < 2 ?  
                                   themeName : themeNameArray.slice(0,2).join(" ")+"\n"+ themeNameArray.slice(2).join(" "),   
                                admissionFee: response.data.list[i].admissionFee,
                                playTime: response.data.list[i].playTime,
                                maximumCapacity: response.data.list[i].maximumCapacity,
                                minimumCapacity: response.data.list[i].minimumCapacity,
                                themeImg : response.data.list[i].themeImg,
                           }
                        )
                    }
                });
                //지점 정보 가지고 오기
                axios(
                    {method: "get", url: "http://localhost:2030/branches", responseType: "json"}
                ).then((response) => {
                    // console.log(response);
                    for (var j in response.data.list) {
                        this
                            .branchList
                            .push({
                                id: response
                                    .data
                                    .list[j]
                                    .branchId,
                                name: response
                                    .data
                                    .list[j]
                                    .branchName,
                                depositPrice : response.data.list[j].depositPrice    
                            });
                    }
                });
            },

            //슬롯의 타임테이블을 가지고 오는 메서드
            async getSlotTime() {
                //3개의 값이 모두 있을 때만 비동기 통신
                if (!!this.activatedBranchId && !!this.activatedThemeId && !!this.activatedDate) {

                    await axios({
                        method: 'get',
                        url: 'http://localhost:2030/slots',
                        responseType: 'json',
                        params: {
                            slotDate: this.activatedDate,
                            themeId: this.activatedThemeId,
                            branchId: this.activatedBranchId
                        }

                    }).then((response) => { //화살표 함수로 써야 컴포넌트 데이터에 this로 접근 가능
                        this.slotList = []; //재호출시 무한 추가 방지를 위한 초기화 작업
                        // console.log(response);
                        for (var i in response.data.list) {
                            this
                                .slotList
                                .push({
                                    id: response
                                        .data
                                        .list[i]
                                        .slotId,
                                    slotTime: response
                                        .data
                                        .list[i]
                                        .slotTime,
                                    isShowed: response
                                        .data
                                        .list[i]
                                        .showed,
                                    isReserved: response
                                        .data
                                        .list[i]
                                        .reserved,
                                    isOpened: response
                                        .data
                                        .list[i]
                                        .opened,
                                    slotDate : response.data.list[i].slotDate,     
                                    alterdSlotTime : this.dropSeconds(response.data.list[i].slotTime)     
                                });
                        }
                    });
                }
            },
            //받아온 slotTime의 시간을 hh:mm:ss가 아닌 hh시 mm분으로 바꿔주는 메서드
            dropSeconds : function(time){
              var strArray = time.split(':');
              strArray.pop();
              return strArray[0]+'시 '+strArray[1]+'분'
            },
            async getSlotMaxDateAndDisableDate() {
                this.max = ""; //초기화
                this.isNotShowSlotDate = [];
                this.availableSlotDate = [],
                this.intervalTotalSlotDate = []
                //maxDate 설정 - 생성된 슬롯 중 가장 마지막의 날짜를 가지고 오기
                await axios({
                    method: "get",
                    url: "http://localhost:2030/slots/date",
                    params: {
                        branchId: this.activatedBranchId,
                        themeId: this.activatedThemeId
                    }
                }).then((response) => {
                    this.max = response.data.data; //max값 설정
                    this.makeDateList(this.min, this.max); //minDate~maxDate까지 날짜 만드는 메서드
                });
                //minDate와 maxDate 사이의 날짜 중 공개되지 않은 date들 가져오기
                if (!!this.max) { //테마 변경시 date가 아무 것도 없을 때 max가 ''이기 때문에 500번 에러가 나는 것을 방지
                    await axios({
                        method: "get",
                        url: "http://localhost:2030/slots/date/disabled",
                        responseType: "json",
                        params: {
                            max: this.max,
                            min: this.min
                        }
                    })
                        .then((response) => {
                            // console.log(response);
                            for (let i in response.data.list) {
                                this
                                    .isNotShowSlotDate
                                    .push(response.data.list[i]);
                            }
                            this.getAvailableSlotDate();
                            // console.log(this.isNotShowSlotDate);

                        })
                        .catch((error) => {
                            console.log(error);
                            this.alert_Error("현재 예약 가능한 날짜가 없습니다.")
                        });
                } else {
                    this.alert_Error("현재 예약 가능한 날짜가 없습니다.")
                }

            },
            //날짜 데이터를 yyyy-mm-dd로 바꿔주는 메서드
            toStringByFormattingDate(date, delimiter = '-') {
                const year = date.getFullYear();
                const month = this.leftPad(date.getMonth() + 1);
                const day = this.leftPad(date.getDate());
                return [year, month, day].join(delimiter);
            },
            //한 자리수의 월,일의 앞에 0을 붙여주는 메서드
            leftPad(value) {
                if (value >= 10) {
                    return value;
                }
                return `0${value}`;
            },
            //공개하지 않은 date를 달력에서 비활성화하는 메서드
            dateDisabled(ymd, date) {
                //console.log("ymd = "+ymd);
                let dateOfString = '';
                for (var d in this.isNotShowSlotDate) {
                    if (ymd == this.isNotShowSlotDate[d]) {
                        dateOfString = this.isNotShowSlotDate[d]
                    }
                }
                // const no = new Date(dateOfString); const gkgk =
                // this.toStringByFormattingDate(no); console.log(gkgk);
                return ymd === this.toStringByFormattingDate(new Date(dateOfString));
            },

            //getAvailableSlotDate에 필요한 minDate와 maxDate로 전체 날짜 리스트 생성
            makeDateList(min, max) {
                const minite = 1000 * 60;
                const hour = minite * 60;
                const day = hour * 24;
                let minDate = new Date(min);
                let maxDate = new Date(max);
                let spendTime = maxDate.getTime() - minDate.getTime();
                let interval = Math.round(spendTime / day);
                let date = new Date(minDate);
                for (let i = 0; i < interval + 1; i++) {
                    this.intervalTotalSlotDate.push(new Date(date.getTime()))
                    date.setDate(date.getDate() + 1)
                }
            },
            //달력 예약 가능일 색상 강조
            dateClass(ymd, date) {
                let bool = false
                let calendarDate = this.toStringByFormattingDate(new Date(ymd))
                for (let i in this.availableSlotDate) {
                    if (calendarDate == this.availableSlotDate[i]) {
                        bool = true;
                    }
                }
                return bool == true? 'table-primary': ''
            },
            //전체날짜(minDate~maxDate 사이의 총 날짜)-disable
            getAvailableSlotDate() {
                let list = []
                for (var n in this.intervalTotalSlotDate) {
                    list.push(this.toStringByFormattingDate(this.intervalTotalSlotDate[n]))
                }
                this.availableSlotDate = list.filter(x => !this.isNotShowSlotDate.includes(x));
            },
           
            //Axios 에러 처리
            errorMessage(error) {
                if (error.response) {
                    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // 요청이 이루어 졌으나 응답을 받지 못했습니다. `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                    // Node.js의 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                } else {
                    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                    console.log('Error', error.message);
                }
                console.log(error.config);
            }

        }

    }
</script>
<style scoped>
    /* 5 layer */
    .select_container {
        /* background-color: rgb(247, 247, 247); */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
        border-bottom-right-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;

    }

    .branch {
        width: 20rem;
        height: 38rem;
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
    }
    .branch dt {
        padding: 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: 0 0.6rem;
        color: rgb(126, 122, 122);
        border-bottom: 2px solid rgb(207, 199, 199);
        margin-bottom: 2rem;
    }
    .branch dd ul {
        display: flex;
        flex-direction: column;
        padding: 1rem;

    }
    .branch dd ul li {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        text-align: center;
        list-style: none;
        border-radius: 4px;

    }
    .branch dd ul li a {
        padding-top: 0.9rem;
        padding-bottom: 0.9rem;
        border: 2px solid rgb(165, 159, 159);
        color: rgb(95, 92, 92);
        font-weight: bold;
        display: block;
    }
    .branch dd ul li a:hover {
        text-decoration: none;
    }

    .cal {
        width: 30rem;
        height: 38rem;
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);

    }
    .cal dt {
        padding: 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: 0 0.6rem;
        color: rgb(126, 122, 122);
        border-bottom: 2px solid rgb(207, 199, 199);
        margin-bottom: 2rem;
    }
    .cal dd {
        margin-top: 0.9rem;
        margin-left: 0.9rem;
        margin-right: 0.9rem;
    }

    .theme {
        width: 20rem;
        height: 38rem;
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
    }
    .theme dt {
        padding: 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        border-bottom: 2px solid rgb(207, 199, 199);
        margin: 0 0.6rem;
        color: rgb(126, 122, 122);
        margin-bottom: 2rem;
    }
    .theme dd ul {
        display: flex;
        flex-direction: column;
        padding: 1rem;

    }
    .theme dd ul li {

        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        text-align: center;
        list-style: none;
        border-radius: 4px;

    }
    .theme dd ul li a {
        padding-top: 0.9rem;
        padding-bottom: 0.9rem;
        border: 2px solid rgb(165, 159, 159);
        color: rgb(95, 92, 92);
        font-weight: bold;
        display: block;
    }
    .theme dd ul li a:hover {
        text-decoration: none;
    }

    .time {
        width: 25rem;
        height: 38rem;
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border: 2px solid rgb(207, 199, 199);
        overflow: auto;
    }

    .time dt {
        padding: 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        border-bottom: 2px solid rgb(207, 199, 199);
        margin: 0 0.6rem;
        color: rgb(126, 122, 122);
        margin-bottom: 0.8rem;
    }
    .time dd ul {
        display: flex;
        flex-direction: column;
        padding: 1rem;

    }
    .time dd ul li {

        font-size: 1.35rem;
        margin-bottom: 0.5rem;
        text-align: center;
        list-style: none;
        border-radius: 4px;

    }
    .time dd ul li a {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border: 2px solid rgb(165, 159, 159);
        color: rgb(95, 92, 92);
        font-weight: bold;
        display: block;
    }
    .time dd ul li a:hover {
        text-decoration: none;
    }

    .on {
        background-color: #287a75;
        color: #fff !important;
        border: 1px solid #287a75 !important;
    }
    .none {
        background-color: rgb(165, 159, 159);
        color: #fff !important;
        border: 1px solid rgb(165, 159, 159) !important;
    }
    .triangle_on {
        border-left: 12px solid #287a75;
    }
    .triangle_none {
        border-left: 12px solid rgb(165, 159, 159);
    }

    .book_item {
        margin: 0rem 0.3rem !important;
    }

    @media (max-width: 1280px) {
        .step {
            width: 28rem;
        }
    }
    @media (max-width: 1111px) {
        .step {
            width: 25rem;
        }
    }

    @media (max-width: 798px) {
        


        .blank {
            padding: 21%;
        }
        .progress2 {
            width: 100%;
            padding: 20%, 0;
        }
        .step {
            width: 7rem;
            height: 70px;
            margin-left: 16px;
            margin-bottom: 5px;
        }
        .step p{
            
        }
        .step :nth-child(1) {
            font-size: 0.8rem;
            margin-left: 16px;
            margin-right: 16px;
        }

        .step :nth-child(2) {
            font-size: 0.8rem;
            margin-left: 16px;
            margin-right: 16px;
        }
        .step4 {
            margin-right: 0.8rem;
        }

        .select_container{
            flex-direction: column;
        }

        .branch {
            width: 100%;
            height: 30vh;
        }
        .branch dt {
            font-size: 1.5rem;
        }

        .theme {
            width: 100%;
            height: 21rem;
        }
        .theme dt {
            font-size: 1.5rem;
            margin-bottom: 0.55rem;
        }
        .book_item{
            margin-bottom: 1rem !important;
        }
        .time{
            height: 27rem;
        }
        .cal{
            height: 27rem;
            width: 100%;
        }
    }
</style>