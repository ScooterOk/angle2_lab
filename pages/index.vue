<template>
  <div id="app-start" class="noselect">
    <ul class="home__title" v-if="mobile">
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.mobile.row1}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.mobile.row1}}</span>
          </h2>
        </div>            
      </li> 
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.mobile.row2}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.mobile.row2}}</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.mobile.row3}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.mobile.row3}}</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.mobile.row4}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.mobile.row4}}</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.mobile.row5}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.mobile.row5}}</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.mobile.row6}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.mobile.row6}}</span>
          </h2>
        </div>
      </li>
    </ul>
    <ul class="home__title" v-else>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.desktop.row1}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.desktop.row1}}</span>
          </h2>
        </div>            
      </li> 
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.desktop.row2}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.desktop.row2}}</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.desktop.row3}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.desktop.row3}}</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>            
            <span>{{text.desktop.row4}}</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                            
            <span>{{text.desktop.row4}}</span>
          </h2>
        </div>
      </li>
    </ul>    
  </div>    
</template>

<script>
export default {
  // head : function(){
  //   return {
  //     title : 'About Us | Sparky',
  //     meta: [        
  //       { hid: 'description', name: 'description', content: 'We provide a fresh set of eyes for powerful brands looking to maximize moments, elevate experiences, and ignite innovation. Get in touch to learn more.' }
  //     ]
  //   }
  // },
  mounted: function(){
    const app = this;    
  },
  data () {
    return {
      text : {
        desktop : {
          row1: 'look at your',
          row2: 'product from',
          row3: 'a different',
          row4: 'angle',    
        },
        mobile : {
          row1: 'look at',          
          row2: 'your',
          row3: 'product',
          row4: 'from a',
          row5 : 'different',
          row6 : 'angle'
        },
      }      
    }
  },
  computed: {        
    transitionPage: function(){
      return this.$store.state.transitionPage;
    },
    firstPage: function(){
      return this.$store.state.firstPage;
    },
    mobile: function(){
      return this.$store.state.mobile;
    },
    resize: function(){
      return this.$store.state.resize;
    },
    mousemove: function(){
      return this.$store.state.mousemove;
    },
    deviceorientation: function(){
      return this.$store.state.deviceorientation;
    },
    cursorLongAnimate: function(){
      return this.$store.state.cursorLongAnimate;
    }
  },  
  watch : {
    mousemove: function(val){
      const app = this;      
      if(app.cursorLongAnimate || app.transitionPage)return;
        var rootX = -((window.innerWidth / 2) - val.x);
        TweenMax.to(document.querySelectorAll('#app-start .home__title span'), 1, {x: function(i, el){
          var moveX = 100 / ((window.innerWidth / 2) / rootX);
          var x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);
          return x;
        }, force3D: true});      
    },
    deviceorientation: function(e){
      const app = this;
      if(app.cursorLongAnimate || e > 45 || e < -45 || app.transitionPage)return;
      TweenMax.to(document.querySelectorAll('#app-start .home__title span'), 1, {x: function(i, el){
        var moveX = 100 / (45 / e);
        var x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);
        return x;
      }, force3D: true});
    },
    cursorLongAnimate: function(val){
      const app = this;
      if(val){        
        TweenMax.to(document.querySelectorAll('.home__title li:nth-child(odd) span'), 2.1, {x : '-102vw', ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.home__title li:nth-child(even) span'), 2.1, {x: '102vw', ease: Power3.easeInOut});
      }else{
        TweenMax.to(document.querySelectorAll('.home__title span'), 1.4, {x : '0vw', ease: Power3.easeInOut});
      }
    },
    mobile: function(val){      
      TweenMax.set('.preloader', {height: (val == 'mobile' ? 60 : 90), y : (val == 'mobile' ? -30 : -70)});      
    }
  },
  methods: {
    
  },
  transition : {
    mode : 'out-in',
    css : false,
    enter : function(el, done){
      const app = this;
      app.$store.commit('set', {
        name: 'page',
        value: 'home'
      });      
      app.$store.commit('set', {
        name: 'cursorColor',
        value: '#b6b6b6'
      });
      app.$store.commit('set', {
        name: 'cursorHoverColor',
        value: '#2af8eb'
      });
      app.$store.commit('set', {
        name: 'cursorLongAnimatePermit',
        value: true
      });
      app.$store.commit('set', {
        name: 'scroll',
        value: true
      });
      TweenMax.set(document.querySelectorAll('.home__title li:nth-child(odd) span'), {x: '-100vw'});
      TweenMax.set(document.querySelectorAll('.home__title li:nth-child(even) span'), {x: '100vw'});
      if(app.$store.state.firstPage){
        /*============= First render ========== */
        TweenMax.to('.preloader span', 1.3, {y : 50});    
        TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
        app.$store.commit('set', {
          name : 'transitionPage',
          value : false
        });
        TweenMax.to('.preloader', 1.3, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power3.easeOut, onComplete : function(){                    
          TweenMax.to('.g-pager div', 0.4, {x : '0%', onComplete: function(){
            TweenMax.to('.g-pager i', 1, { width: '60px', ease: Power4.easeInOut});
          }});
          TweenMax.to('.logo', 0.4, {y : 0});
          TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
              TweenMax.to('header .menu span', 0.3, {y : 0});              
              TweenMax.staggerTo(document.querySelectorAll('header nav > div'), 0.3, {y : 0}, 0.1);
            TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);
          }});
        }});
        
        new TimelineMax().to(document.querySelectorAll('.home__title li:nth-child(odd) span'), 1.5, {x: '0vw', force3D: true, ease: Power4.easeOut}, 'title')
        .to(document.querySelectorAll('.home__title li:nth-child(even) span'), 1.5, {x: '0vw', force3D: true, ease: Power4.easeOut}, 'title')

        
        
        app.$store.commit('set', {
          name : 'firstPage',
          value : false
        });        
      }else{
        /*============= Transition render ========== */        
        TweenMax.set('#app-start .text', {visibility: 'hidden'})
        TweenMax.set('.main-bg', {backgroundColor : '#ffffff', height : '100%', width : 0, x : 0});        
        TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
        TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
        TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 0, delay : 0.4});
        TweenMax.to('.preloader', 0.7, {backgroundColor : '#000000', ease: Power3.easeIn, onComplete : function(){
          app.$store.commit('set', {
            name: 'pager',
            value: '01'
          });
          new TimelineMax().set('header .logo', {width: 126})
          .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo1'}, 'uno')
          .to('#logo .number1', 0.3, {morphSVG: '#logo .number1'}, 'uno')
          .to('#logo .gaps', 0.3, {opacity: 1});
          TweenMax.set('#app', {backgroundColor : '#ffffff'});
          TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});
          TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
          app.$store.commit('set', {
            name : 'transitionPage',
            value : false
          });
          TweenMax.to('.preloader', 0.7, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power3.easeOut, onComplete:function(){
            app.$store.commit('set', {
              name : 'transitionPage',
              value : false
            });
            TweenMax.to('.g-pager div', 0.4, {x : '0%', onComplete: function(){
              TweenMax.to('.g-pager i', 1, { width: '60px', ease: Power4.easeInOut});
            }});
            TweenMax.to('.logo', 0.4, {y : 0});
            TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
                TweenMax.to('header .menu span', 0.3, {y : 0});              
                TweenMax.staggerTo(document.querySelectorAll('header nav > div'), 0.3, {y : 0}, 0.1);
              TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);
            }});
          }});
          new TimelineMax().to(document.querySelectorAll('.home__title li:nth-child(odd) span'), 1.5, {x: '0vw', force3D: true, ease: Power4.easeOut}, 'title')
        .to(document.querySelectorAll('.home__title li:nth-child(even) span'), 1.5, {x: '0vw', force3D: true, ease: Power4.easeOut}, 'title')          
        }});
      }      
    },
    leave : function(el, done){
      const app = this;
      app.$store.commit('set', {
        name: 'menu',
        value: false
      });
      app.$store.commit('set', {
        'name': 'transitionPage',
        value: true
      });      
      if(app.$store.state.cursorLongAnimate){
        app.$store.commit('set', {
          name: 'cursorLongAnimate',
          value: false
        });
        done();
      }else{
        TweenMax.to(document.querySelectorAll('.home__title li:nth-child(odd) span'), 0.6, {x: '-100vw', ease: Power2.easeIn})
        TweenMax.to(document.querySelectorAll('.home__title li:nth-child(even) span'), 0.6, {x: '100vw', ease: Power2.easeIn})
        TweenMax.killTweensOf([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')]);
        TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s', 'letter-spacing': (app.$store.state.mobile == 'mobile' ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
        TweenMax.to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){          
          TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
          done();
        }});
      }      
    }
  }
}
</script>

<style lang="scss" scoped>
  #app-start {
    width: 100%;
    height: 100%;
    overflow: hidden;    
  }
  .home__title {
    list-style: none;
    margin: 120px 0 0 0;
    overflow: hidden;
    padding: 13vw 0 0 0;    
    width: 100vw;    
    li {
      display: flex;    
      position: relative;
      height: 21.3vw;
      pointer-events: none; 
      margin: -13vw -1.7vw 0 -1.7vw;
      @media screen and (max-width: 900px) {
        height: 24.8vw;
      }
      .left {
        width: 50%;
        overflow: hidden;  
        color: #2af8eb;
        h2 {
          transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
        }
      }
      .right {
        width: 50%;
        overflow: hidden;  
        color: #191919;
        h2 {
          margin-left: -100%;
          transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);          
        }
      }
      h2 {
        font-size: 10.7vw;
        margin: 0;
        padding: 0;
        line-height: 8.2vw;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: -.45vw;
        width: 200%;          
        overflow: hidden;  
        position: relative;
        z-index: 1;
        text-align: center;
        @media screen and (max-width: 900px) {
          font-size: 15vw;
          line-height: 11vw;
        }
        span {
          display: inline-block;            
        }          
      }
    }
  }  

@media screen and (max-width: 900px) {
  #app-start .text.portrait li .text-wrapper {
    text-align: left;
    padding: 150px 5vw 0 5vw;
  }
  #app-start .text-wrapper h2 {
    font-size: 15vw;    
    line-height: 11vw;    
  }
}
@media screen and (max-width: 480px) {
  #app-start .text.portrait li .text-wrapper {
    text-align: left;
    padding: 180px 5vw 0 5vw;
  }  
}
</style>
