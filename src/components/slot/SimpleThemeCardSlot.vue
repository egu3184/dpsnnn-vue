<template>
  <div class="SimpleThemeCardSlot">
    <div class="simple-theme-picture" v-bind:style="{'background-image':'url('+this.background+')'}"> 
    </div>   
    <div class="simple-theme-title">
      <slot name="title"></slot>
    </div>
    <div class="simple-theme-content">
      <slot name="content"></slot>
    </div>  
    <div class="more"><a href="#">더보기</a></div>
    <div class="simple-theme-line"><span></span></div>
    <div class="simple-theme-playtime">
      <slot name="playtime"></slot>
    </div>
    <div class="simple-theme-button"><button>예약하기</button></div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props:{
    background: {
      type:String,
    }
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
<style > 
.SimpleThemeCardSlot {
    border: rgb(177, 166, 166) 1px solid;
    width: 18rem;
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {

    .SimpleThemeCardSlot {
        width: 20rem;
        margin: 4rem 3rem;
    }
    .simple-theme-picture {
        height: 42vh;
        background-image: url("");
    }
    .simple-theme-title span {
        height: 3rem;
        font-weight: bold;
        font-size: 23px;

    }
    .simple-theme-title {
        padding: 1.5rem 1.75rem 0.5rem;
    }
    .simple-theme-content {
        text-align: left;
        padding: 1.0rem 1.75rem;
        margin-bottom: 1rem;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
    .more {
        padding-bottom: 1rem;
        padding-left: 1.75rem;
    }
    .more a {
        color: gray;
        text-decoration: underline;
        text-underline-position: under;
    }
    .simple-theme-line {
        border: 1px solid rgb(228, 221, 221);
        margin: 0 1.8rem;
        align-items: center;
    }
    .simple-theme-playtime {
        text-align: left;
        padding: 1.5rem 1.75rem;
        color: gray;
    }
    
    .simple-theme-button button {
        padding: 0.3rem 2rem;
        background-color: transparent;
        color: gray;
        font-size: 1.2rem;
        border: 1px solid rgb(160, 156, 156);
        display: flex;
        margin-left: 1.45rem;
        margin-bottom: 1.6rem;
    }
}

/* 데스크톱 */
@media (min-width: 768px) {
    .SimpleThemeCardSlot {
        width: 25rem;
        border: 1px solid rgb(182, 179, 172);
        margin: 6rem 3rem;
    }

    .simple-theme-picture {
        height: 25.5rem;
        background-image: url("");
    }
    .simple-theme-title span {
        height: 3rem;
        font-weight: bold;
        font-size: 20px;
        font-weight: bold;
        font-size: 1.1rem;

    }
    .simple-theme-title {
        padding: 1.5rem 1.75rem 0.5rem;
    }
    .simple-theme-content {
        text-align: left;
        padding: 1.0rem 1.75rem;
        margin-bottom: 1rem;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    .more {
        padding-bottom: 1rem;
        padding-left: 1.75rem;
    }
    .more a {
        color: gray;
        text-decoration: underline;
        text-underline-position: under;
    }
    .simple-theme-line {
        border: 1px solid rgb(228, 221, 221);
        margin: 0 1.8rem;
        align-items: center;
    }
    .simple-theme-playtime {
        text-align: left;
        padding: 1.5rem 1.75rem;
        color: gray;
    }
    
    .simple-theme-button button {
        padding: 0.3rem 2rem;
        background-color: transparent;
        color: gray;
        font-size: 1.2rem;
        border: 3px solid rgb(160, 156, 156);
        display: flex;
        margin-left: 1.45rem;
        margin-bottom: 1.6rem;
    }

}

</style>