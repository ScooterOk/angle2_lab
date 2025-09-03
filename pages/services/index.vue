<template>
  <div id="app-services">    
    <!-- ============ DDA =============== -->
    <div class="cww noselect">
      <div>
        <span>chose</span>
      </div>
      <div>
        <span>your</span>
      </div>
      <div>
        <span>service</span>
      </div>
    </div>    

    <!-- ============ TITLE =============== -->
    <ul class="services__title">
      <li class="head">
        <div class="left">            
          <h2>
            <span>Seamless</span>                
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>Seamless</span>                
          </h2>
        </div>            
      </li>
      <li class="list design-team hover-link">
        <div class="left">            
          <h2 :class="transitionPage?'prevent':''">
            <router-link :to="'/services/design-team'">
              <span @mouseenter="hover" @mouseleave="hover" @click="click" @touchstart="touchevent" @touchmove="touchevent" @touchend.stop="touchevent">
                <div class="sign">
                  <i class="plus">+</i>
                  <i class="minus">&ndash;</i>
                </div>
                design <br/>team
              </span>
            </router-link>
          </h2>          
        </div>
        <div class="right">
          <h2 :class="transitionPage?'prevent':''">                
            <router-link :to="'/services/design-team'">
              <span @mouseenter="hover" @mouseleave="hover" @click="click" @touchstart="touchevent" @touchmove="touchevent" @touchend.stop="touchevent">
                <div class="sign">
                  <i class="plus">+</i>
                  <i class="minus">&ndash;</i>
                </div>
                design <br/>team
              </span>
            </router-link>
          </h2>
        </div>            
      </li>
      <li class="list hover-link">
        <div class="left">            
          <h2 :class="transitionPage?'prevent':''">
            <router-link :to="'/services/lab'">
              <span @mouseenter="hover" @mouseleave="hover" @click="click" @touchstart="touchevent" @touchmove="touchevent" @touchend.stop="touchevent">
                <div class="sign">
                  <i class="plus">+</i>
                  <i class="minus">&ndash;</i>
                </div>
                Creative <br/>Lab
              </span>
            </router-link>
          </h2>          
        </div>
        <div class="right">
          <h2 :class="transitionPage?'prevent':''">                
            <router-link :to="'/services/lab'">
              <span @mouseenter="hover" @mouseleave="hover" @click="click" @touchstart="touchevent" @touchmove="touchevent" @touchend.stop="touchevent">
                <div class="sign">
                  <i class="plus">+</i>
                  <i class="minus">&ndash;</i>
                </div>
                Creative <br/>Lab
              </span>
            </router-link>
          </h2>
        </div>            
      </li>
    </ul>
  </div>    
</template>

<script>
export default {
  mounted : function () {
    const app = this;
    var split = new SplitText(".services__title h2 span", {type: 'chars'});
    
  },
  data () {
    return {
      
    }
  },
  computed: {
    firstPage: function(){
      return this.$store.state.firstPage;
    },
    mobile: function(){
      return this.$store.state.mobile;
    },
    deviceorientation: function(){
      return this.$store.state.deviceorientation;
    },
    transitionPage: function(){
      return this.$store.state.transitionPage;
    },    
    touch: function(){
      return this.$store.state.touch;
    },    
    mousemove: function(){
      return this.$store.state.mousemove;
    },    
    cursorLongAnimate: function(){
      return this.$store.state.cursorLongAnimate;
    },
    cursorLongAnimatePermit: function(){
      return this.$store.state.cursorLongAnimatePermit;
    }, 
    titleAnimate: function(){
      return this.$store.state.services.titleAnimate;
    },
    enterDone: function(){
      return this.$store.state.services.enterDone;
    },
  },
  watch: {    
    mousemove: function(e){
      const app = this;
      let val = e.x;
      if(app.cursorLongAnimate || !app.titleAnimate)return;
        var rootX = -((window.innerWidth / 2) - val);
        document.querySelectorAll('#app-services .services__title .head span').forEach(function(el, i, arr){
        var moveX = 100 / ((window.innerWidth / 2) / rootX);
        var x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);
        TweenMax.to(el, 1, {x : x, force3D: true});
      }); 
    },
    cursorLongAnimate: function(val){      
      const app = this;
      if(val){
        app.$store.commit('services', {
          name : 'enterDone',
          value : false
        });
        TweenMax.staggerTo(document.querySelectorAll('.services__title .left span'), 2.1, {x : '-102vw', ease: Power3.easeInOut, force3D: true}, 0.15);
        TweenMax.staggerTo(document.querySelectorAll('.services__title .right span'), 2.1, {x: '-102vw', ease: Power3.easeInOut, force3D: true}, 0.15);
      }else{
        function back(){
          app.$store.commit('services', {
            name : 'enterDone',
            value : true
          });
        }
        TweenMax.staggerTo(document.querySelectorAll('.services__title .left span'), 1.4, {x : '0vw', ease: Power3.easeInOut, force3D: true}, 0.15);
        TweenMax.staggerTo(document.querySelectorAll('.services__title .right span'), 1.4, {x: '0vw', ease: Power3.easeInOut, force3D: true}, 0.15, back);
      }
    },
    deviceorientation: function(e){
      const app = this;      
      if(app.cursorLongAnimate || !app.titleAnimate || e > 45 || e < -45)return;
      document.querySelectorAll('#app-services .services__title .head span').forEach(function(el, i, arr){
        var moveX = 100 / (45 / e);
        var x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);       
        TweenMax.to(el, 1, {
          css : {x : x, force3D: true}
        });          
      });      
    },
    mobile: function(val){
      const app = this;      
      TweenMax.killTweensOf('.preloader');
      new TimelineMax({repeat: -1}).set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
      .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
      .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
      .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});
    }
  },  
  methods: {    
    hover: function(e){
      const app = this;
      if(!app.enterDone || app.touch)return;
      if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
          var node = this;
          while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
        };
      }
      if(e.type == 'mouseenter'){
        app.$store.commit('set', {
          name: 'cursorLongAnimatePermit',
          value: false
        });
        TweenMax.to(e.target.closest('li').querySelector('.left span'), 0.4, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.right span'), 0.4, {x : window.innerWidth / 100 * 6.2, color : '#191919', opacity : 1, ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.sign .plus'), 0.4, {x: '-100%', ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.sign .minus'), 0.4, {x: '-100%', ease: Power3.easeInOut, force3D: true});
      }else{
        app.$store.commit('set', {
          name: 'cursorLongAnimatePermit',
          value: true
        });
        TweenMax.to(e.target.closest('li').querySelector('.left span'), 0.4, {x : 0, color : '#191919', opacity : 0.1, ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.right span'), 0.4, {x : 0, color : '#191919', opacity : 0.1, ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.sign .plus'), 0.4, {x: '0%', ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.sign .minus'), 0.4, {x: '0%', ease: Power3.easeInOut, force3D: true});
      }
    },
    touchevent: function(e){
      const app = this;
      if(!app.enterDone)return;
      if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
          var node = this;
          while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
        };
      }
      if(e.type == 'touchstart'){
        app.$store.commit('set', {
          name: 'cursorLongAnimatePermit',
          value: false
        });
        TweenMax.to(e.target.closest('li').querySelector('.left span'), 0.4, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.right span'), 0.4, {x : window.innerWidth / 100 * 6.2, color : '#191919', opacity : 1, ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.sign .plus'), 0.4, {x: '-100%', ease: Power3.easeInOut, force3D: true});
        TweenMax.to(e.target.closest('li').querySelector('.sign .minus'), 0.4, {x: '-100%', ease: Power3.easeInOut, force3D: true});
      }else if(e.type == 'touchend'){        
        app.$store.commit('set', {
          name: 'cursorLongAnimatePermit',
          value: true
        });
        // TweenMax.to(e.target.closest('li').querySelector('.left span'), 0.4, {x : 0, color : '#191919', opacity : 0.1, ease: Power3.easeInOut, force3D: true});
        // TweenMax.to(e.target.closest('li').querySelector('.right span'), 0.4, {x : 0, color : '#191919', opacity : 0.1, ease: Power3.easeInOut, force3D: true});
        // TweenMax.to(e.target.closest('li').querySelector('.sign .plus'), 0.4, {x: '0%', ease: Power3.easeInOut, force3D: true});
        // TweenMax.to(e.target.closest('li').querySelector('.sign .minus'), 0.4, {x: '0%', ease: Power3.easeInOut, force3D: true});
      }
    },
    click: function(e){
      if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
          var node = this;
          while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
        };
      }
      e.target.closest('li').classList.add('current');
    }
  },
  transition : {
    mode : 'out-in',
    css : false,
    enter : function(el, done){      
      const app = this;      
      app.$store.commit('set', {
        name: 'page',
        value: 'services'
      });      
      app.$store.commit('set', {
        name: 'cursorColor',
        value: '#b6b6b6'
      });
      app.$store.commit('set', {
        name: 'cursorHoverColor',
        value: '#fff'
      });      
      app.$store.commit('set', {
        name: 'cursorLongAnimatePermit',
        value: true
      });
      app.$store.commit('set', {
        name: 'scroll',
        value: true
      });
      app.$store.commit('services', {
        name : 'titleAnimate',
        value : false
      });      
      app.$store.commit('services', {
        name : 'enterDone',
        value : false
      });   
      
      
      TweenMax.set(document.querySelectorAll('#app-services .cww span'), {y : -13});
      TweenMax.set(document.querySelectorAll('.services__title .head:nth-child(1) span'), {x: app.$store.state.mobile ? '104vw' : '102vw'});
      TweenMax.set(document.querySelectorAll('.services__title .head:nth-child(2) span'), {x: app.$store.state.mobile ? '104vw' : '102vw'});
      TweenMax.set(document.querySelectorAll('.services__title .list span'), {x: app.$store.state.mobile ? '104vw' : '102vw'});

      TweenMax.to(document.querySelectorAll('.go-tonext span, .dda span'), 0.4, {y : 13, delay : 0.4});
      TweenMax.to(document.querySelectorAll('#app-services .cww span'), 0.4, {y : 0, delay : 0.4, onComplete: function(){
        TweenMax.set(document.querySelectorAll('#app-services .cww span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
      }});


      TweenMax.set('.main-bg', {backgroundColor : '#2af8eb', height : '100%', width : 0, x : 0});
      TweenMax.to('.preloader span', 1.3, {y : 50});            
      TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
      TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
      TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 13, delay : 0.4});      
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#191919', ease: Power3.easeIn, onComplete : function(){
        app.$store.commit('set', {
          name: 'pager',
          value: '03'
        });
        new TimelineMax().to('#logo .gaps', 0.3, {opacity: 0})
        .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo2'}, 'uno')
        .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno')
        .set('header .logo', {width: 50}, 'uno');
          
        TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
          TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s'}});          
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.$store.state.cursorColor});
          TweenMax.to('.cursor-ring', 0.2, {scale : 1});
        }});

        TweenMax.set('#app', {backgroundColor : '#2af8eb'});
        TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});        
        TweenMax.to('.preloader', 0.7, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power3.easeOut, onComplete : function(){          
          
          new TimelineMax({repeat: -1})
          .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
          .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
          .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});

        }});        
        app.$store.commit('services', {
          name : 'titleAnimate',
          value : true
        });
        new TimelineMax().to(document.querySelectorAll('.services__title .head span'), 1.5, {x: '0vw', ease: Power4.easeOut, force3D: true}, 'title')
        .staggerTo(document.querySelectorAll('.services__title .list .left span'), 1.4, {x : '0vw', ease: Power3.easeInOut, force3D: true}, 0.1, 'title+=0.5')
        .staggerTo(document.querySelectorAll('.services__title .list .right span'), 1.4, {x : '0vw', ease: Power3.easeInOut, force3D: true}, 0.1, 'title+=0.5')
        .addCallback(function(){
          app.$store.commit('services', {
            name : 'enterDone',
            value : true
          });
          TweenMax.to('.g-pager div', 0.4, {x : '0%', onComplete: function(){
            TweenMax.to('.g-pager i', 1, { width: '60px', ease: Power4.easeInOut});
          }});
          TweenMax.to('.logo', 0.4, {y : 0});
          TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
            TweenMax.to('header .menu span', 0.3, {y : 0});
            TweenMax.staggerTo(document.querySelectorAll('header nav > div'), 0.3, {y : 0}, 0.1);
            TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);
            app.$store.commit('set', {
              name : 'firstPage',
              value : false
            });
            app.$store.commit('set', {
              name : 'transitionPage',
              value : false
            });
          }});
        })        
      }});
    },
    leave : function(el, done){
      const app = this;      
      app.$store.commit('set', {
        name: 'menu',
        value: false
      });
      if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
          var node = this;
          while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
          }
          return null;
        };
      }
      app.$store.commit('set', {
        'name': 'transitionPage',
        value: true
      });      
      app.$store.commit('services', {
        name : 'titleAnimate',
        value : false
      });      
      app.$store.commit('services', {
        name : 'enterDone',
        value : false
      });
      if(app.$store.state.cursorLongAnimate){
        TweenMax.to(document.querySelectorAll('.dda span'), 0.4, {y : 0})
        TweenMax.to(document.querySelectorAll('#app-services .cww span'), 0.4, {y : -13, onComplete: function(){
          app.$store.commit('set', {
            name: 'cursorLongAnimate',
            value: false
          });
          done();
        }});
      }else{               
        TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
        TweenMax.killTweensOf('.preloader');
        new TimelineMax().staggerTo(document.querySelectorAll('.services__title .left span'), 1.4, {x : function(index, el){
            if(el.closest('.current')){
              return '104vw';
            }else{
              return '-104vw';
            }          
          }, ease: Power3.easeInOut}, 0.15, 'uno')
          .staggerTo(document.querySelectorAll('.services__title .right span'), 1.4, {x: function(index, el){
            if(el.closest('.current')){
              return '104vw';
            }else{
              return '-104vw';
            }
          }, ease: Power3.easeInOut}, 0.15, 'uno')
          .addCallback(function(){
            TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
            done();
          })        
        .set(document.querySelectorAll('#app-services .cww span, .dda span'), {css : {'transition-duration' : '0.9s', 'letter-spacing': (app.$store.state.mobile == 'mobile' ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}}, 'uno+=0.4')
        .to(document.querySelectorAll('.dda span'), 0.4, {y : 0}, 'uno+=1')
        .to(document.querySelectorAll('#app-services .cww span'), 0.4, {y : -13}, 'uno+=1')        
        .to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn}, 'uno+=0.7')
      }


      //done();      
    }
  }
};
</script>

<style lang="scss">
#app-services {
  .cww {
    width: 56px;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    text-transform: uppercase;
    transform: rotate(270deg);
    position: fixed;
    left: 59px;
    top: 141px;
    letter-spacing: 20px;
    z-index: 5;      
    color: #191919;
    @media screen and (max-width: 480px) {
      top: 93px;
      left: 22px;
    }
    > div {
      overflow: hidden;
      width: 200px;
      > span {
        display: block;
        transition-property: letter-spacing;
        transition-duration: 0.9s;
      }
    }
  }
  .services__title {
    list-style: none;
    margin: 122px -1.7vw 0 -1.7vw;
    padding-bottom: 6vw;
    padding-left: 0;
    padding-right: 0;
    @media screen and (max-width: 900px) {
      margin-top: 140px;
    }
    li {
      display: flex;    
      position: relative;
      height: 21.3vw;
      margin-top: -13vw;
      pointer-events: none;
      @media screen and (max-width: 900px) {
        &.list {
          height: 35.4vw;
        }
        height: 24.8vw;
      }
      &.head {
        h2 {
          text-align: center;
        }
        .left {
          color: #fff;
        }
        .right {
          color: #191919;
        }
      }
      &.list {
        a {
          color: #191919;          
        }
        span {
          opacity: 0.1;
        }        
      }
      &:first-child {
        margin-top: 0;
      }
      color: #fff;
      a {
        color: #fff;
      }      
      .left {
        width: 50%;
        overflow: hidden;
        h2 {
          transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
        }
      }
      .right {
        width: 50%;
        overflow: hidden;
        h2 {
          margin-left: -100%;
          transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
        }
      }
      h2 {
        font-size: 10.7vw;
        margin: 0;
        padding: 0 20px;
        line-height: 8.2vw;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: -.45vw;
        width: 200%;
        cursor: default;
        overflow: hidden;  
        position: relative;
        z-index: 1;
        pointer-events: all;
        -webkit-user-select: none;  
        -moz-user-select: none;    
        -ms-user-select: none;      
        user-select: none;
        @media screen and (max-width: 900px) {
          font-size: 15vw;
          line-height: 11vw;
          padding: 0;
        }
        .sign {
          overflow: hidden;
          display: inline-block;
          position: relative;
          line-height: 8vw;
          .minus {
            position: absolute;
            top: 0;
            left: 100%;
          }
          i {
            display: inline-block;
            font-style: normal;
          }
        }
        span {
          display: inline-block;
        }
        br {
          display: none;
          @media screen and (max-width: 900px) {
            display: inline-block;
          }
        }
      }
    }
  }  
}

</style>
