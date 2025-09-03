<template>
  <div id="app-services-design">    
    <!-- ============ BACK =============== -->
    <div class="back" @mouseenter="hover" @mouseleave="hover">
      <nuxt-link to="/services">
        <b>
          <span>{{back}}</span>
        </b>        
        <i></i>
      </nuxt-link>      
    </div>

    <div class="services-wrapper">
      <!-- ============ TITLE =============== -->      
      <ul class="services__title">
        <li>
          <div class="left">
            <h2>
              <span>design</span>
            </h2>
          </div>
          <div class="right">
            <h2>
              <span>design</span>
            </h2>
          </div>
        </li>
        <li>
          <div class="left">
            <h2>
              <span>team</span>
            </h2>
          </div>
          <div class="right">
            <h2>
              <span>team</span>
            </h2>
          </div>
        </li>
      </ul>

      <!-- ============ ARTICLE =============== -->
      <article id="services-scroll">
        <h3>Your go-to design team</h3>        
        We provide you with high quality design expertise, frictionless collaboration, and on-time delivery. Always. Your perfect design partner.
        <br><br><br>
        <h3>What we do </h3>
        We’re passionate about complex web and mobile interfaces, and we’re great at designing them. Our UI designs are streamlined, intuitive, and solve problems; making every interaction a breeze for you and your customers. 
        <br><br>
        We work seamlessly with developers and product owners; arming them with excellent designs that bring their code to life. 
        <br><br><br>
        <h3>Approach</h3>
        Design is so much more than what meets the eye. A strong interface requires lots of research and many iterations before it goes to market. We dive in and learn about your business and understand the problems you need to solve. Then we build an initial prototype of your design, and we test test test! The prototype serves as the foundation of your experience, and we work with you every step of the way to build upon it. 
        <br><br>
        We’re really good at this. Our interfaces just work. 
        <br><br>
        And we also work…
        <br><br>
        ...well with others, that is! We blend right in with your existing processes and teams. You wouldn’t even notice us if our designs weren’t so darn beautiful. 
      </article>

      <!-- ============ LINK =============== -->      
      <aside class="link">
        <a href="./Angle2_Your_seamless_design_team.pdf" target="_blank" @mouseenter="hover" @mouseleave="hover">
          <span v-if="mobile == 'mobile'">About the design process</span>
          <span v-else>More about the design process</span>
        </a>
        <i class="line"></i>      
        <i class="angle"></i>
      </aside>
    </div>    
  </div>
</template>

<script>
export default {
  mounted : function () {
    const app = this;
    let split = new SplitText("#services-scroll", {type:'words'});
    if(app.mobile && app.mobile == 'mobile'){
      app.scrollbar = Scrollbar.init(document.querySelector('.services-wrapper'), {
        alwaysShowTracks: true
      });
    }else{
      app.scrollbar = Scrollbar.init(document.querySelector('#services-scroll'), {
        alwaysShowTracks: true
      });
    }
    
    
    
  },
  data () {
    return {
      scrollbar: null
    }
  },
  computed: {    
    appStart: function(){
      return this.$store.state.appStart;
    },
    firstPage: function(){
      return this.$store.state.firstPage;
    },
    mobile: function(){
      return this.$store.state.mobile;
    },    
    transitionPage: function(){
      return this.$store.state.transitionPage;
    },    
    touch: function(){
      return this.$store.state.touch;
    },
    cursorColor: function(){
      return this.$store.state.cursorColor;
    },
    cursorHoverColor: function(){
      return this.$store.state.cursorHoverColor;
    },
    back: function(){
      if(this.mobile){
        return 'back';
      }else{
        return 'back to services';
      }
    }
  },
  watch: {    
    mobile: function(m){
      const app = this;
      app.scrollbar.destroy();
      if(app.mobile && app.mobile == 'mobile'){
        app.scrollbar = Scrollbar.init(document.querySelector('.services-wrapper'), {
          alwaysShowTracks: true
        });
      }else{
        app.scrollbar = Scrollbar.init(document.querySelector('#services-scroll'), {
          alwaysShowTracks: true
        });
      }
      TweenMax.to('.scrollbar-track-y', 0.7, {opacity: 1});
    }
  },  
  methods: {    
    hover: function(e){      
      const app = this;
      if(app.appStart && !app.touch){
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
  transition : {
    mode : 'out-in',
    css : false,
    enter : function(el, done){      
      const app = this;      
      app.$store.commit('set', {
        name: 'page',
        value: 'services-team'
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
        value: false
      });
      app.$store.commit('set', {
        name: 'scroll',
        value: false
      });      
      TweenMax.set('#app-services-design .back a span', {y: '100%'});
      TweenMax.set('#app-services-design .back i', {scale: 0});
      TweenMax.set(document.querySelectorAll('.services__title span'), {x: app.$store.state.mobile ? '104vw' : '102vw', force3D: true});
      TweenMax.set(document.querySelectorAll('#services-scroll'), {visibility: 'hidden'});      
      TweenMax.set('.link span', {y: '100%'});
      TweenMax.set('.link .line', {width: '0%'});
      TweenMax.set('.link .angle', {opacity: 0});

      TweenMax.to(document.querySelectorAll('.go-tonext span, .dda span'), 0.4, {y : 13, delay : 0.4});
      TweenMax.set('.main-bg', {backgroundColor : '#fff', height : '100%', width : 0, x : 0});
      TweenMax.to('.preloader span', 1.3, {y : 50});            
      TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
      TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
      TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 13, delay : 0.4});      
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#191919', ease: Power3.easeIn, onComplete : function(){        
        TweenMax.to('.g-pager i', 1, { width: '0px', ease: Power4.easeInOut, onComplete(){
          TweenMax.to('.g-pager div', 0.4, {x : '-100%'});  
        }});
        new TimelineMax().to('#logo .gaps', 0.3, {opacity: 0})
        .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo2'}, 'uno')
        .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno')
        .set('header .logo', {width: 50}, 'uno');
        new TimelineMax().staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 20}, 0.07)
        .to('.follow-us_title span', 0.4, {y : 10})
        
          
        TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
          TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s'}});          
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.$store.state.cursorColor});
          TweenMax.to('.cursor-ring', 0.2, {scale : 1});
        }});

        TweenMax.set('#app', {backgroundColor : '#fff'});
        TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});                
        TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut, onComplete : function(){
          app.$store.commit('set', {
            name : 'transitionPage',
            value : false
          });          
        }});
      }});

      
      new TimelineMax({delay: 0.4}).staggerTo(document.querySelectorAll('.services__title .left span'), 1.4, {x : '0vw', ease: Power3.easeInOut}, 0.1, 'title')
      .staggerTo(document.querySelectorAll('.services__title .right span'), 1.4, {x : '0vw', ease: Power3.easeInOut}, 0.1, 'title')
      .set(document.querySelectorAll('#services-scroll'), {visibility: 'visible'}, 'title+=1.2')
      .staggerFrom(document.querySelectorAll('#services-scroll div:not(.scroll-content)'), 0.4, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.01, 'title+=1.2')      
      .addCallback(function(){
        new TimelineMax()        
        .staggerTo(document.querySelectorAll('header nav > div'), 0.3, {y : 0}, 0.1, 'uno')
        .to('header .menu span', 0.3, {y : 0}, 'uno')
        .to('.logo', 0.4, {y : 0}, 'uno')
        .to('.back a span', 0.4, {y: '0%'}, 'uno+=0.5')
        .to('.back i', 0.4, {scale: 1}, 'uno+=0.5')
        .to('.link a span', 0.4, {y: '0%'}, 'uno+=0.5')
        .to('.link .line', 0.4, {width: '100%', ease: Power4.easeInOut})
        .fromTo('.link .angle', 0.4, {opacity: 0, x: '-50%', y: '50%'}, {opacity: 1, x: '0%', y: '0%', ease: Power4.easeInOut})
        
      }, 'title+=1.4')
      .set('.scrollbar-track-y', {opacity: 1})
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
      new TimelineMax().to('.back a span', 0.4, {y: '-100%'}, 'uno')
      .to('.back i', 0.4, {scale: 0}, 'uno')
      .to('.scrollbar-track-y', 0.7, {opacity: 0}, 'uno')
      .to('.link .line', 0.7, {width: '0%', ease: Power4.easeInOut}, 'uno')
      .to('.link .angle', 0.7, {opacity: 0, x: '-50%', y: '50%', ease: Power4.easeInOut}, 'uno')
      .to('.link a span', 0.4, {y: '100%'}, 'uno')
      .to('#services-scroll', 0.4, {opacity: 0}, 'uno')
      .staggerTo(document.querySelectorAll('.services__title .left span'), 1.4, {x : '-102vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .staggerTo(document.querySelectorAll('.services__title .right span'), 1.4, {x: '-100vw', ease: Power3.easeInOut}, 0.15, 'uno')      
      .to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
        TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
        Scrollbar.destroyAll();
        done();
      }}, '-=1')
      .to(document.querySelectorAll('.dda span'), 0.4, {y : 0}, 'uno+=1')      
    }     
  }  
};
</script>

<style lang="scss">
#app-services-design {
  width: 100%;
  height: 100%;
  .services-wrapper {
    @media screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding-right: 10px;      
      .scroll-content {
        overflow: hidden;        
      }
    }
    .scrollbar-track {
      width: 6px;
      background-color: transparent;
      &.scrollbar-track-y {
        opacity: 0;
        .scrollbar-thumb {
          width: 6px;
          background-color: #191919;
          border-radius: 0;
        }
      }    
    }
  }


.back {
  position: fixed;
  left: 70px;
  top: 190px;
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;    
  transform: rotate(-90deg) translateX(-70px);
  transform-origin: left;    
  z-index: 10;    
  @media screen and (max-width: 900px) {
    top: 160px;
    left: 95px;
  }
  @media screen and (max-width: 480px) {
    top: 87px;
    left: 45px;      
  }
  a {
    color: #191919;
    display: inline-block;
    position: relative;
    padding-right: 27px;
    b {
      display: inline-block;
      overflow: hidden;
      font-weight: normal;
      @media only screen and (max-width: 480px) {
        display: none;   
      }
    }
    span {
      display: inline-block;
    }
    @media screen and (max-width: 900px) {
      padding-right: 65px;
    }
    @media only screen and (max-width: 480px) {
      
    }
  }    
  i {      
    width: 0;
    display: block;
    height: 0px;
    position: absolute;
    top: 0px;
    right: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #191919;
    @media screen and (max-width: 900px) {
      width: 50px;
      display: block;
      height: 50px;
      border-radius: 50%;
      margin-left: 15px;      
      position: absolute;
      top: -20px;
      right: 0px;
      background-color: #191919;
      border: none;
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        position: absolute;
        top: 22px;
        left: 20px;
        box-sizing: border-box;
        transform: rotate(45deg);
      }      
    }      
    @media screen and (max-width: 480px) {
      
    }
  }  
}
  .services__title {
    list-style: none;
    margin: 150px -1.7vw 0 -1.7vw;
    padding-bottom: 6vw;
    padding-left: 0;
    padding-right: 0;   
    @media screen and (max-width: 900px) {
      margin-top: 220px;
    } 
    @media screen and (max-width: 480px) {
      margin-top: 180px;
    } 
    li {
      display: flex;    
      position: relative;
      height: 21.3vw;
      margin-top: -13vw;
      pointer-events: none;
      @media screen and (max-width: 900px) {        
        height: 24.8vw;
      }
      &:first-child {
        margin-top: 0;
      }      
      .left {
        width: 50%;
        overflow: hidden;
        h2 {
          transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
          color: #191919;
        }
      }
      .right {
        width: 50%;
        overflow: hidden;
        h2 {
          margin-left: -100%;
          transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
          color: #2af8eb;
        }
      }
      h2 {
        font-size: 10.7vw;
        margin: 0;
        padding: 0 70px;
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
        @media screen and (max-width: 900px) {
          padding-left: 0;
          font-size: 15vw;
          line-height: 11vw;
        }
        @media screen and (max-width: 480px) {
          padding-left: 28px;
        }
        span {
          display: inline-block;
        }
      }
    }    
  }  
  article {
    position: fixed;
    top: 220px;
    bottom: 220px;
    right: 140px;
    left: calc(50% + 140px);
    font-size: 18px;
    line-height: 30px;
    z-index: 2;
    padding-right: 20px;
    overflow: hidden;
    H3 {
      padding: 0;
      margin: 0 0 30px 0;
      font-size: 30px;
      font-weight: 800;
    }
    @media screen and (max-width: 900px) {
      right: 70px;
      left: calc(50% + 70px);  
    }
    @media screen and (max-width: 480px) {
      position: static;
      top: initial;
      left: initial;
      right: initial;
      bottom: initial;
      margin: 0 60px;
      padding: 0;
    }
    &#services-scroll {
      .scrollbar-track {
        width: 1px;
        background-color: #eaeaea;
        opacity: 0;
        .scrollbar-thumb {
          width: 1px;
          background-color: #191919;
        }
      }
    }
    
  }
  .link {
    position: fixed;
    left: calc(50% + 140px);
    bottom: 55px;
    font-size: 18px;
    line-height: 20px;
    @media screen and (max-width: 900px) {
      left: 50%;
    }
    @media screen and (max-width: 480px) {
      position: relative;
      left: auto;
      bottom: auto;      
      margin: 60px 0 70px 60px;
      display: inline-flex;
    }
    a {
      color: #191919;
      display: inline-block;
      overflow: hidden;
      span {
        display: inline-block;
      }
    }
    .line {
      display: block;
      height: 1px;
      width: 100%;
      background-color: #2af8eb;
      position: absolute;
      left: 0;
      bottom: -13px;
    }
    .angle {
      display: block;
      position: absolute;
      top: -8px;
      right: -10px;
      width: 0;
      height: 0;
      border-top: 8px solid #2af8eb;
      border-left: 10px solid transparent;
    }
  }
}
</style>
