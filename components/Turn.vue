<template>
  <div class="mobile-turn" v-show="active" @touchstart.stop.prevent="touchevent" @touchmove.stop.prevent="touchevent" @touchend.stop.prevent="touchevent">
    <!-- <div class="mobile-turn__message"> -->
      <div class="mobile-turn__message_img">
        <img src="~assets/img/turn_device.svg">
      </div>
      <div class="mobile-turn__message_text">Please turn your device</div>
    </div>
  <!-- </div>   -->
</template>

<script>
  export default {
    mounted : function(){
      var app = this;
      var h = window.innerHeight;
      if(window.orientation == 90 || window.orientation == -90){
        if(h < 480){
          app.active = true;
          TweenMax.set('body', {backgroundColor: '#191919'});
        }
      }else{
        app.active = false;
        TweenMax.set('body', {clearProps: 'all'});
      }
    },
    data : function(){
      return {
        active : false
      }
    },
    methods : {
      touchevent: function(e){
        
      }
    },
    computed : {
      mobile : function(){
        return this.$store.state.mobile;
      },
      resize : function(){
        return this.$store.state.resize;
      }      
    },
    watch : {
      resize : function(e){
        var app = this;        
        var h = window.innerHeight;
        setTimeout(function(){          
          if(window.orientation == 90 || window.orientation == -90){
            if(h < 480){
              app.active = true;
              TweenMax.set('body', {backgroundColor: '#191919'});
            }
          }else{
            app.active = false;
            TweenMax.set('body', {clearProps: 'all'});
          }
        }, 100);
      }
    }
  };
</script>

<style scoped>
.mobile-turn {
  width: 100%;
  height: 100%;  
  background-color: #191919;
  position: absolute;  
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mobile-turn__message {
  position: absolute;
  /* background-color: #f8f8eb;   */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.mobile-turn__message_img {
  margin-top: 10%;
}
.mobile-turn__message_img img {
  height: 25vh;
}
.mobile-turn__message_text {  
  font-weight: 500;
  font-size: 18px;  
  line-height: 1;
  color: #fff;
  margin-top: 30px;
  margin-bottom: -10px;
}
</style>

