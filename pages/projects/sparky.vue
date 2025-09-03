<template>
  <div id="app-projects-sparky">
    <div class="allprojects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
      <nuxt-link to="/projects">
        <b>
          <span>all projects</span>
        </b>        
        <i></i>
      </nuxt-link>      
    </div>
    <article class="case sparky">
      <section class="case__head">
        <div class="case__head_img-wrapper">
          <div class="case__head_img" data-displacement="/lab/img/displacement/pattern2.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="/lab/img/displacement/start.png">
            <img src="/lab/img/projects/sparky/preview.jpg" alt="">          
          </div>
        </div>
        <ul class="case__head_title">
          <li>
            <div class="left">            
              <h2>
                <span>sparky</span>                
              </h2>          
            </div>
            <div class="right">
              <h2>                
                <span>sparky</span>                
              </h2>
            </div>            
          </li>          
        </ul>
        <div class="case__head_characteristic">
          <div class="output">
            <h4>
              <span>output</span>
            </h4>
            <h5>
              <span>Interactive Promo Website</span>
            </h5>
          </div>
          <div class="creative">
            <h4>
              <span>creative fields</span>
            </h4>
            <h5>
              <span>Wireframing, UX/UI design, Interaction Design, Animation, Front-End Development</span>
            </h5>
          </div>
          <div class="link">
            <div class="background">
              <a href="https://www.sparky.us/" target="_blank" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                <span>View site</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="quick-words leave">
        <div class="content startanim" data-type="quickWords">
          <div class="text">
            <h4>QUICK WORDS</h4>
              <p>
                Sparky is a USA based marketing agency. They are provide a fresh set of eyes for powerful brands looking to maximize moments, elevate experiences, and ignite innovation.<br>
                For this client we create Interactive promo-site which help to provide values of brand and services, declare yourself and be remembered. Also created the majority of visual solluetions all focused around the key brand message of fresh eyes for powerful brands.
              </p>
          </div>          
        </div>        
      </section>

      <section class="home leave">
        <div class="content startanim imganim" data-type="home">
          <img src="/lab/img/projects/sparky/home.jpg" alt="">
        </div>
      </section>
      <section class="about leave">
        <div class="content startanim imganim" data-type="about">
          <img src="/lab/img/projects/sparky/about.jpg" alt="">
        </div>
      </section>
      <section class="services leave">
        <div class="content startanim imganim" data-type="services">
          <img src="/lab/img/projects/sparky/services.jpg" alt="">
        </div>
      </section>
      <section class="team leave">
        <div class="content startanim imganim" data-type="team">
          <img src="/lab/img/projects/sparky/team.jpg" alt="">
        </div>
      </section>
      <section class="mobile startanim leave" data-type="mobile">
        <div class="start">
          <div class="imganim">
            <img src="/lab/img/projects/sparky/start-project.jpg" alt="">
          </div>          
        </div>
        <div class="intro-mobile">
          <div class="imganim">
            <img src="/lab/img/projects/sparky/intro-mobile.jpg" alt="">
          </div>
        </div>
        <div class="team-mobile">
          <div class="imganim">
            <img src="/lab/img/projects/sparky/team-mobile.jpg" alt="">
          </div>
        </div>
        <div class="error startanim" data-type="mobile2">
          <div class="imganim">
            <img src="/lab/img/projects/sparky/404.jpg" alt="">
          </div>          
        </div>
      </section>
        
        
      <div class="next-project-wrapper">
        <section class="next-project startanim" data-type="nextProject">
          <ul class="case__head_title" v-if="mobile">
              <li>
                <div class="left">            
                  <h2>
                    <span>Next</span>
                  </h2>          
                </div>
                <div class="right">
                  <h2>                
                    <span>Next</span>
                  </h2>
                </div>            
              </li>
              <li>
                <div class="left">            
                  <h2>
                    <span>project</span>
                  </h2>          
                </div>
                <div class="right">
                  <h2>                
                    <span>project</span>
                  </h2>
                </div>            
              </li>
              <li class="timer">
                <div class="left">            
                  <h2>
                    <span>0{{timer}}</span>
                  </h2>          
                </div>
                <div class="right">
                  <h2>                
                    <span>0{{timer}}</span>
                  </h2>
                </div>            
              </li>
            </ul>
            <ul class="case__head_title" v-else>
              <li>
                <div class="left">            
                  <h2>
                    <span>Next project</span>
                  </h2>          
                </div>
                <div class="right">
                  <h2>                
                    <span>Next project</span>
                  </h2>
                </div>            
              </li>
              <li class="timer">
                <div class="left">            
                  <h2>
                    <span>0{{timer}}</span>
                  </h2>          
                </div>
                <div class="right">
                  <h2>                
                    <span>0{{timer}}</span>
                  </h2>
                </div>            
              </li>
            </ul>
          <div class="next-project__img">
            <span data-displacement="/lab/img/displacement/pattern2.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="/lab/img/displacement/start.png">
              <img src="/lab/img/projects/cavio.jpg" alt="">
            </span>
            <i></i>              
          </div>
          <div class="next-project__label">
            <h4>
              <span>client</span>
            </h4>  
            <h5>
              <span>Cavio</span>
            </h5>
          </div>        
        </section>
      </div>      
    </article>
  </div>
</template>

<script>
//import Scrollbar from "smooth-scrollbar";
import * as hoverEffect from '~/assets/js/photosMorph';
import * as hoverEffect2 from '~/assets/js/photosMorph2';
export default {
  mounted: function() {
    const app = this; 
    TweenMax.set(document.querySelectorAll('.next-project'), {visibility: 'hidden'});       
    app.scrollbar = Scrollbar.init(document.querySelector(".case.sparky"), {
      alwaysShowTracks: true
    });
    app.scrollbar.addListener((status) => {
      app.scrollTop = status.offset.y;
    }); 
    // document.querySelector('#app-projects-sparky').addEventListener('scroll', function(e){      
    //   app.scrollTop = document.querySelector('#app-projects-sparky').scrollTop;
    // });

    const el = document.querySelector('.case__head_img');
    const imgs = Array.from(el.querySelectorAll('img'));    
    hoverEffect.init({
      parent: el,
      startImage: el.dataset.startimage,
      intensity: el.dataset.intensity || undefined,
      speedIn: el.dataset.speedin || undefined,
      speedOut: el.dataset.speedout || undefined,
      easing: el.dataset.easing || undefined,
      hover: el.dataset.hover || undefined,
      images: imgs,
      displacementImage: el.dataset.displacement
    });
    const el2 = document.querySelector('.next-project__img span');
    const imgs2 = Array.from(el2.querySelectorAll('img'));      
    hoverEffect2.init({
      parent: el2,
      startImage: el2.dataset.startimage,
      intensity: el2.dataset.intensity || undefined,
      speedIn: el2.dataset.speedin || undefined,
      speedOut: el2.dataset.speedout || undefined,
      easing: el2.dataset.easing || undefined,
      hover: el2.dataset.hover || undefined,
      images: imgs2,          
      displacementImage: el2.dataset.displacement
    });
  },
  
  data: function() {
    return {
      nextProject: false,
      scrollbar: null,
      scrollTop: 0,
      scrollDelay: 300,
      timer: 3
    };
  },
  computed: {
    appStart: function() {
      return this.$store.state.appStart;
    },
    resize: function(){
      return this.$store.state.resize;
    },
    cursorColor: function(){
      return this.$store.state.cursorColor;
    },
    cursorHoverColor: function(){
      return this.$store.state.cursorHoverColor;
    },
    mobile: function(){
      return this.$store.state.mobile;
    },
    touch: function(){
      return this.$store.state.touch;
    }
  },
  watch: {
    scrollTop: function(top){
      const app = this;
      let nextY = document.querySelector('.next-project').offsetTop;
      let y = top + window.innerHeight - (window.innerHeight/2);      
      if(y>nextY && !app.nextProject){            
        app.nextProjectStart();
      }
      if(app.mobile && top > (window.innerHeight / 2)){
        TweenMax.to('.allprojects b', 0.4, {opacity: 0});
      }else{
        TweenMax.to('.allprojects b', 0.4, {opacity: 1});
      }
    },
    resize: function(e){
      hoverEffect.resize();
      hoverEffect2.resize();
    }
  },
  methods: { 
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
    },
    nextProjectStart: function(type){      
      const app = this;
      app.nextProject = true;
      app.scrollbar.options._damping = 0.07;
      app.scrollbar.scrollIntoView(document.querySelector('.next-project'), {
        alignToTop: true,
        onlyScrollIfNeeded: false,
      });
      var tl = new TimelineMax().set(document.querySelectorAll('.next-project__label span'), {y: '110%'})
      .set(document.querySelectorAll('.next-project .case__head_title li:not(.timer) span'), {visibility: 'hidden'})
      .set(document.querySelectorAll('.next-project .case__head_title li.timer span'), {visibility: 'hidden'})
      .set('.next-project', {visibility: 'visible'})      
      .fromTo('.next-project__img', 0.7, {x: '100%'}, {x: '0%', ease: Power4.easeInOut, onComplete: function(){
        hoverEffect2.start();
      }}, 'list')

      //.staggerTo(document.querySelectorAll('.contacts__title li[data-type="title"] .left h1 span'), 1.5, {x : x, ease: Power4.easeInOut}, 0.08, 'uno')
      //.staggerTo(document.querySelectorAll('.contacts__title li[data-type="title"] .right h1 span'), 1.5, {x : x, ease: Power4.easeInOut}, 0.08, 'uno')


      .staggerFromTo(document.querySelectorAll('.next-project .case__head_title li:not(.timer) .left span'), 1, {x: '-100vw'}, {x : 0, visibility: 'visible', ease: Power4.easeOut}, 0.15, 'list+=1.1')
      .staggerFromTo(document.querySelectorAll('.next-project .case__head_title li:not(.timer) .right span'), 1, {x: '-100vw'}, {x : 0, visibility: 'visible', ease: Power4.easeOut}, 0.15, 'list+=1.1')
      .staggerTo(document.querySelectorAll('.next-project__label span'), 0.4, {y: '0%'}, 0.3, 'list+=1.8')
      .fromTo(document.querySelectorAll('.next-project .case__head_title li.timer span'), 1, {x: function(i, el){              
        let w = -el.clientWidth - 70+'px';              
        return w;
      }}, {x : '100vw', visibility: 'visible', ease: SlowMo.ease.config(0.2, 0.8, false), onComplete: function(){              
        app.timer--;
      }}, 'list+=2.6')
      .fromTo(document.querySelectorAll('.next-project .case__head_title li.timer span'), 1, {x: function(i, el){              
        let w = -el.clientWidth - 70+'px';              
        return w;
      }}, {x : '100vw', visibility: 'visible', ease: SlowMo.ease.config(0.2, 0.8, false), onComplete: function(){
        app.timer--;
      }})
      .fromTo(document.querySelectorAll('.next-project .case__head_title li.timer span'), 1, {x: function(i, el){              
        let w = -el.clientWidth - 70+'px';              
        return w;
      }}, {x : '100vw', visibility: 'visible', ease: SlowMo.ease.config(0.2, 0.8, false), onComplete: function(){
        app.$router.push({path: '/projects/cavio'});
      }})
    }
  },
  transition: {
    mode: "out-in",
    css: false,
    enter: function(el, done) {
      const app = this;
      app.$store.commit('set', {
        name: 'page',
        value: 'sparky'
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
        name: 'cursorLongAnimate',
        value: false
      });
      app.$store.commit('set', {
        name: 'cursorLongAnimatePermit',
        value: false
      });
      app.$store.commit('set', {
        name: 'scroll',
        value: false
      });      
      TweenMax.set(document.querySelectorAll('#app-projects-sparky .leave'), {opacity: 0});
      TweenMax.set('.main-bg', {backgroundColor : '#dedec5', height : '100%', width : 0, x : 0});
      TweenMax.set('.case__head', {x: '-100%'});
      TweenMax.set(document.querySelectorAll('.case__head .case__head_title span'), {x: '-100vw'});
      TweenMax.set(document.querySelectorAll('.case__head_characteristic span'), {y: '110%'});
      TweenMax.set('.case__head_characteristic .link .background', {width: '0%'});
      TweenMax.set('.allprojects a span', {y: '-100%'});
      TweenMax.set('.allprojects i', {scale: 0});
      TweenMax.to('.preloader span', 1.3, {y : 50});
      TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
      TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
      TweenMax.to(document.querySelectorAll('.go-tonext span, .dda span'), 0.4, {y : 13, delay : 0.4});
      new TimelineMax().to('#logo .gaps', 0.3, {opacity: 0})
      .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo2'}, 'uno')
      .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno');
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#1d1d1d', ease: Power3.easeIn, onComplete : function(){
        TweenMax.set('#app', {backgroundColor : '#dedec5'});        
        TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});
        TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut, onComplete : function(){
          TweenMax.to('.g-pager i', 1, { width: '0px', ease: Power4.easeInOut, onComplete(){
            TweenMax.to('.g-pager div', 0.4, {x : '-100%'});  
          }});          
          TweenMax.to('.logo', 0.4, {y : 0});
          TweenMax.to('.follow-us_title span', 0.4, {y : 35, onComplete : function(){
            TweenMax.to('header .menu span', 0.3, {y : 0});
            TweenMax.staggerTo(document.querySelectorAll('header nav > div'), 0.3, {y : 0}, 0.1);
            TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 35}, 0.1);
            TweenMax.to(document.querySelectorAll('#app-projects-sparky .leave'), 1.4, {opacity: 1});            
            app.$store.commit('set', {
              name : 'firstPage',
              value : false
            });
            app.$store.commit('set', {
              'name': 'transitionPage',
              value: false
            });
          }});
        }});

        new TimelineMax({delay: 0.6})
        .to('.case__head', 0.8, {x: '0%', ease: Power3.easeInOut})
        .staggerFromTo(document.querySelectorAll('.case__head .case__head_title .left span'), 1, {x: '-100vw'}, {x : 0, visibility: 'visible', ease: Power4.easeOut}, 0.15, 'title')
        .staggerFromTo(document.querySelectorAll('.case__head .case__head_title .right span'), 1, {x: '-100vw'}, {x : 0, visibility: 'visible', ease: Power4.easeOut}, 0.15, 'title')
        .addCallback(function(){
          hoverEffect.start();
        })
        .to('.allprojects a span', 0.4, {y: '0%'}, 'end')
        .to('.allprojects i', 0.4, {scale: 1}, 'end')
        .to('.allprojects a', 0.4, {y: '0%'}, 'end')
        .staggerTo('.case__head_characteristic h4 span', 0.4, {y: '0%'}, 0.2, 'end')
        .staggerTo('.case__head_characteristic h5 span', 0.4, {y: '0%'}, 0.2, 'end')
        .set('.scrollbar-track-y', {opacity: 1})
        .to('.case__head_characteristic .link .background', 0.4, {width: '100%', ease: Power3.easeInOut})
        .to('.case__head_characteristic .link span', 0.4, {y: '0%'}, '+=0.3')
        .set('.follow-us', {display: 'none'})

      }});


      done(); 
    },
    leave: function(el, done) {
      const app = this;
      app.$store.commit('set', {
        name: 'menu',
        value: false
      });
      app.$store.commit('set', {
        'name': 'transitionPage',
        value: true
      });      
      hoverEffect.end();
      new TimelineMax().set('.follow-us', {display: 'block'})
      .staggerTo(document.querySelectorAll('.case__head .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.case__head .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .addCallback(function(){
        hoverEffect2.end();
      }, '-=0.4')
      .set('.scrollbar-track-y', {opacity: 0}, 'end')
      .to('.next-project__img', 0.7, {x: '100%', ease: Power4.easeInOut}, 'end+=1.5')
      .staggerTo(document.querySelectorAll('.next-project__label span'), 0.4, {y: '110%'}, 0.3, 'end+=1')
      .to(document.querySelectorAll('.leave'), 1.4, {opacity: 0}, 'end')
      .to(document.querySelectorAll('#app-projects-sparky .quick-words, #app-projects-sparky .home, #app-projects-sparky .about, #app-projects-sparky .services, #app-projects-sparky .team, #app-projects-sparky .mobile'), 1.4, {opacity: 0}, 'end')
      .to('.allprojects a span', 0.4, {y: '100%'}, 'end')
      .to('.allprojects i', 0.4, {scale: 0}, 'end')
      .staggerTo('.case__head_characteristic h4 span', 0.4, {y: '110%'}, 0.2, 'end')
      .staggerTo('.case__head_characteristic h5 span', 0.4, {y: '110%'}, 0.2, 'end')
      .to('.case__head_characteristic .link span', 0.4, {y: '100%'}, 'end')
      .to('.case__head_characteristic .link .background', 0.4, {width: '0%', ease: Power3.easeInOut}, 'end')
      .to('.case__head', 0.8, {x: '-100%', ease: Power3.easeInOut}, 'end+=1')
      .to(document.querySelectorAll('.dda span'), 0.4, {y : function(){                
        if(!app.$route.name.split('projects-')[1])return 0;
      }})
      .to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
        hoverEffect.clear();
        hoverEffect2.clear();
        TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
        Scrollbar.destroyAll();
        done();
      }}, 'end+=1.2')
      .to('.next-project-wrapper', 0.7, {opacity: 0}, 'end+=1.2')
      
      //done();
    }
  }
};
</script>

<style lang="scss">
#app-projects-sparky {
  overflow: hidden;  
  height: 100%;  
  .case {
    overflow: hidden;
    height: 100%;    
  }
  .scroll-content {
    overflow: hidden;
  }
  .imganim {
    position: relative;
    img {      
      display: block;
    }
    i {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  [data-type="feedbacks"] {
    z-index: 1;
  }
  [data-type="newUsers"] {
    i {
      left: auto;
      right: 0;
      background-position: right;
    }    
  }

  .scrollbar-track {
    width: 6px;
    background-color: transparent;
    &.scrollbar-track-x {
      display: none!important;
    }
    &.scrollbar-track-y {
      opacity: 0;
      .scrollbar-thumb {
        width: 6px;
        background-color: #191919;
        border-radius: 0;
      }
    }    
  }
  
  .allprojects {
    position: fixed;
    left: 70px;
    top: 245px;
    font-size: 10px;
    line-height: 10px;
    text-transform: uppercase;    
    transform: rotate(-90deg) translateX(-70px);
    transform-origin: left;    
    z-index: 10;    
    @media screen and (max-width: 900px) {
      top: 195px;
      left: 95px;
    }
    @media screen and (max-width: 480px) {
      top: 165px;
      left: 55px;      
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
  .img-wrapper {
  display: inline-block;
  margin: auto;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
}
  .case__head {
    width: calc(100vw - 140px);
    margin-top: 150px;    
    background-color: #fff;
    position: relative;
    @media screen and (max-width: 900px) {
      width: 100%;
      margin-top: 310px;
    }
    @media screen and (max-width: 480px) {
      margin-top: 125px;
    }
    .case__head_img-wrapper {
      width: 100%;
      overflow: hidden;
    }
    .case__head_img {
      width: calc(100% - 140px);
      height: 34.1vw;
      margin-left: auto;
      overflow: hidden;
      position: relative;
      @media screen and (max-width: 900px) {
        width: 100%;
        height: 48vw;
      }
      @media screen and (max-width: 480px) {
        width: 210vw;
        height: 110vw;
        margin-left: -42%;
      }
      img {
        width: 100%;
        position: absolute;
        display: none;
        bottom: 0;
      }
    }    
    .case__head_characteristic {
      padding: 54px 0 0 0;
      margin-left: 140px;
      position: relative;
      height: 190px;
      display: flex;
      @media screen and (max-width: 900px) {
        margin: 0 70px;
        height: auto;
        padding: 50px 0 100px 0;
      }
      @media screen and (max-width: 480px) {
        margin: 0 30px;
        flex-direction: column;
        padding: 30px 0 70px 0;
      }
      .output {        
        width: 21.5%;
        @media screen and (max-width: 900px) {
          width: 31.5%;
        }
        @media screen and (max-width: 480px) {
          width: 100%;
        }
      }
      .creative {
        width: 57%;
        @media screen and (max-width: 480px) {
          width: 100%;
          margin-top: 30px;
        }
      }
      .link {
        position: absolute;
        top: 50px;
        right: -70px;        
        width: 203px;
        height: 70px;        
        font-size: 18px;
        line-height: 1;
        font-weight: 400;
        color: #fff;
        @media screen and (max-width: 900px) {
          top: initial;
          right: initial;
          left: 0;
          bottom: -35px;
        }
        .background {
          background: #191919;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: #fff;
          overflow: hidden;
          span {
            display: inline-block;
          }
        }
      }
      h4 {
        margin: 0 0 10px;
        padding: 0;
        font-size: 10px;
        line-height: 1;
        font-weight: 400;
        color: #191919;
        text-transform: uppercase;
        overflow: hidden;
        span {
          display: inline-block;
        }
      }
      h5 {
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 1.67;
        font-weight: 400;
        color: #191919;
        overflow: hidden;
        span {
          display: inline-block;
        }
      }
    }
  }
  .case__head_title {
    list-style: none;
    margin: 70px 0 0 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100vw;
    @media screen and (max-width: 480px) {
      margin-top: 35vw;
    }
    li {
      display: flex;    
      position: relative;
      height: 21.3vw;        
      pointer-events: none; 
      margin: -13vw -1.7vw 0 -1.7vw;
      &:first-child {
        margin-top: 0;
      }
      @media screen and (max-width: 900px) {
        height: 24.8vw;
      }
      .left {
        width: 50%;
        overflow: hidden;  
        color: #feca00;
        h2 {
          transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
        }
      }
      .right {
        width: 50%;
        overflow: hidden;  
        color: #feca00;
        h2 {
          margin-left: -100%;
          transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
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
        overflow: hidden;  
        position: relative;
        z-index: 1;
        @media screen and (max-width: 900px) {
          font-size: 15vw;
          line-height: 11vw;
        }
        @media screen and (max-width: 480px) {
          padding: 0 30px;
        }
        span {
          display: inline-block;            
        }          
      }
    }
  }
  .quick-words {
    padding-top: 70px;
    padding-bottom: calc(100px + (531px / 2));    
    @media screen and (max-width: 1000px) {
      padding-bottom: calc(100px + (53.1vw / 2));
    }
    .content {
      margin: 0 auto;
      max-width: 1000px;      
      position: relative; 
      overflow: hidden;     
      .text {
        background-color: #fff;
        padding: 70px 140px 100px 140px;
        @media screen and (max-width: 900px) {
          padding: 70px 70px 100px 70px;
        }
        @media screen and (max-width: 480px) {
          padding: 70px 30px;
        }
      }
    }    
    h4 {
      padding: 0;
      margin: 0 0 10px 0;
      font-size: 10px;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.67;
    }    
    .interception {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      background-color: #fff;
    }
  }
.home {
  background-color: #191919;
  padding-bottom:100px;
  .content {
    max-width: 1000px;
    margin: 0 auto;
    transform: translateY(-50%);
    img {
      width: 100%;
    }    
  }
}
.about {  
  padding-bottom:100px;
  .content {
    max-width: 1000px;
    margin: 0 auto;
    transform: translateY(-50%);
    img {
      width: 100%;
    }    
  }
}
.services {
  background-color: #fff;
  padding-bottom:100px;
  .content {
    max-width: 1000px;
    margin: 0 auto;
    transform: translateY(-50%);
    img {
      width: 100%;
    }    
  }
}
.team {  
  .content {
    max-width: 1000px;
    margin: 0 auto;
    transform: translateY(-50%);
    img {
      width: 100%;
    }
  }
}
.mobile {
  max-width: 1000px;
  margin: auto;
  margin-top: calc((-531px / 2) + 190px);
  display: flex;
  flex-wrap: wrap;  
  img {
    width: 100%;
  }
  .start {
    width: 62.5%;
    margin-bottom: 100px;
  }
  .intro-mobile {
    width: 37.5%;
    > div {
      transform: translateY(-14.47%);
    }    
  }
  .team-mobile {
    width: 37.5%;
  }
  .error {    
    width: 62.5%;
    > div {
      transform: translateY(-31.13%);
      margin-bottom: -28px;
    }    
  }
}
  

  
  
.next-project-wrapper {
    background-color: #191919;
  }
  .next-project {
    position: relative;
    display: flex;    
    align-items: center;
    height: 100vh;
    .case__head_title {
      margin: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      .left {
        color: #fff;
      }
      .right {
        color: #191919;
      }
      .timer {
        margin-top: -11.3vw;
        h2 {
          //text-align: center;
          span {
            transform: translateX(0);
          }
        }
      }
    }
    .next-project__label {
      position: absolute;
      left: 140px;
      bottom: 165px;
      @media screen and (max-width: 480px) {
        left: 90px;
        bottom: 70px;
      }
      h4 {
        margin: 0 0 10px;
        padding: 0;
        font-size: 10px;
        line-height: 1;
        font-weight: 400;
        color: #fff;
        text-transform: uppercase;
        overflow: hidden;
        span {
          display: inline-block;
        }
      }
      h5 {
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 1;
        font-weight: 400;
        color: #fff;
        overflow: hidden;
        span {
          display: inline-block;
        }
      }
    }
    .next-project__img {
      margin: 0 0 0 auto;    
      display: flex;
      @media screen and (max-width: 480px) {
        position: absolute;
        top: 140px;
        right: 0;
        bottom: 140px;
        left: 90px;
        overflow: hidden;
        display: block;
      }
      canvas {
        height: 100%!important;
        display: block;
        @media screen and (max-width: 480px) {
          width: 100%!important;
        }
      }
      // overflow: hidden;
      i {      
        width: 140px;      
        background-color: #fff;
        @media screen and (max-width: 900px) {
          display: none;
        }
      }
      span {
        width: 59vw;
        height: 33.2vw;
        @media screen and (max-width: 900px) {
          width: calc(100vw - 140px);
          height: 53.25vw;
        }
        @media screen and (max-width: 480px) {
          width: calc((100vh - 140px - 140px) * 1.7);
          height: 100%;
          display: block;
          margin-left: -100%;
        }
      }
      img {
        width: 100%;
        display: none;
      }
    }
  }
}
</style>

