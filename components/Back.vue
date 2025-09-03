<template>
  <div class="allprojects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
    <nuxt-link to="/projects">
      <b>
        <span>all projects</span>
      </b>        
      <i></i>
    </nuxt-link>      
  </div>
</template>

<script>
  export default {
    mounted : function(){
      
    },
    data : function(){
      return {
        active : false
      }
    },
    methods : {
      hoverLinks: function(e){
        const app = this;      
        if(app.touch)return false;      
        if(app.appStart){
          if(e.type == 'mouseenter'){          
            app.$store.commit('set', {
              name: 'cursorHoverActive',
              value: true
            });
            TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
            TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorHoverColor});
          }else{
            app.$store.commit('set', {
              name: 'cursorHoverActive',
              value: false
            });
            TweenMax.to('.cursor-ring', 0.2, {scale : 1});
            TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorColor});
          }
        }
      } 
    },
    computed : {
      appStart: function() {
        return this.$store.state.appStart;
      },    
      cursorColor: function(){
        return this.$store.state.cursorColor;
      },
      cursorHoverColor: function(){
        return this.$store.state.cursorHoverColor;
      },
    }    
  };
</script>

<style lang="scss" scoped>
.allprojects {
    position: fixed;    
    font-size: 10px;
    line-height: 10px;
    text-transform: uppercase;
    transform: rotate(-90deg) translateX(-70px);
    transform-origin: left;
    z-index: 10;
    #app-projects-4peak & {
      left: 70px;
      top: 265px;   
    }
    @media screen and (max-width: 900px) {
      top: 195px;
      left: 95px;
    }
    @media screen and (max-width: 480px) {
      top: 165px;
      left: 55px;      
    }
    a {
      color: #fff;
      display: inline-block;
      position: relative;
      padding-right: 65px;
      b {
        display: inline-block;
        overflow: hidden;
        font-weight: normal;
      }
      span {
        display: inline-block;
      }
      @media screen and (max-width: 900px) {
        color: #191919;
      }
      @media only screen and (max-width: 480px) {
        
      }
    }    
    i {      
      width: 50px;
      display: block;
      height: 50px;
      border-radius: 50%;
      margin-left: 15px;
      background-color: #fff;
      position: absolute;
      top: -20px;
      right: 0px;
      @media screen and (max-width: 900px) {
        background-color: #191919;
      }
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-left: 1px solid #191919;
        border-top: 1px solid #191919;
        position: absolute;
        top: 22px;
        left: 20px;
        box-sizing: border-box;
        transform: rotate(45deg);
        @media screen and (max-width: 900px) {
          border-left: 1px solid #fff;
          border-top: 1px solid #fff;
        }
      }      
      @media screen and (max-width: 480px) {
        
      }
    }  
  }
</style>

