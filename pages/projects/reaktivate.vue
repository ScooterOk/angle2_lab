<template>
  <div id="app-projects-reactivate" :class="mobile ? 'mobile': ''">
    <div class="allprojects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
      <nuxt-link to="/projects">
        <b>
          <span>all projects</span>
        </b>        
        <i></i>
      </nuxt-link>      
    </div>
    <article class="case reactivate">      
      <section class="case__head">
        <div class="case__head_img" data-displacement="/lab/img/displacement/pattern2.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="/lab/img/displacement/start.png">
          <img src="/lab/img/projects/reactivate/preview.jpg" alt="">          
        </div>
        <ul class="case__head_title" v-if="mobile">
          <li>
            <div class="left">            
              <h2>
                <span>Reakti-</span>
              </h2>          
            </div>
            <div class="right">
              <h2>                
                <span>Reakti-</span>
              </h2>
            </div>
          </li>
          <li>
            <div class="left">            
              <h2>
                <span>vate</span>
              </h2>          
            </div>
            <div class="right">
              <h2>                
                <span>vate</span>
              </h2>
            </div>
          </li>
        </ul>
        <ul class="case__head_title" v-else>
          <li>
            <div class="left">            
              <h2>
                <span>Reaktivate</span>                
              </h2>          
            </div>
            <div class="right">
              <h2>                
                <span>Reaktivate</span>                
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
              <span>Promo-Website</span>
            </h5>
          </div>
          <div class="creative">
            <h4>
              <span>creative fields</span>
            </h4>
            <h5>
              <span>UI/UX, Strategy, Interaction Design, Animation</span>
            </h5>
          </div>
          <!-- <div class="link">
            <div class="background">
              <a href="">
                <span>View site</span>
              </a>
            </div>
          </div> -->
        </div>
      </section>

      <div class="reactivate__body">
        <div class="quick-words startanim" data-type="quickWords">
        <div class="contr">
          <div class="interception"></div>
          <div class="descr">
            <div class="descr__block">
              <h5 class="descr__title">quick words</h5>
              <p class="descr__text">
                Promotional website for agency that develops the Mobile Apps. The
                project has a simple idea, it is to show the unity of style only
                when interacting. Also, this unusual interaction helps to better
                involve and immerse in the agency's cases.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-with-bg startanim" data-type="preview">
        <div class="bg-absolute"><img src="/lab/img/projects/reactivate/bg.jpg" alt="" /></div>
        <div class="contr">
          <div class="img-wrapper">
            <i class="interception"></i>
            <img src="/lab/img/projects/pulser.jpg" alt="" />  
          </div>          
        </div>
      </div>

      <ul class="slides startanim" data-type="slides">
        <li>
          <div class="interception"></div>
          <img src="/lab/img/projects/carousel/slide3.jpg" alt="">
        </li>
        <li>
          <div class="interception"></div>
          <img src="/lab/img/projects/carousel/slide1.jpg" alt="">
        </li>
        <li>
          <div class="interception"></div>
          <img src="/lab/img/projects/carousel/slide2.jpg" alt="">
        </li>        
      </ul>
      

      <div class="fullwidth-section startanim" data-type="video">
        <div class="contr">
          <p class="descr__text">Interactions</p>
          <div class="fullwidth-section__video">
            <div class="img-wrapper">
              <i class="interception"></i>
              <img src="/lab/img/projects/pulser.jpg" alt="" /></div>            
          </div>          
        </div>
      </div>     

      <div class="section-about startanim" data-type="about">
        <div class="section-about__header">
          <div class="bg-absolute"><img src="/lab/img/projects/reactivate/bg.jpg" alt="" /></div>
        </div>
        <div class="contr">
          <div class="img-wrapper">
            <i class="interception"></i>
            <img src="/lab/img/projects/pulser-about.jpg" alt="" />
          </div>          
        </div>
      </div>
      <div class="mobile-section startanim" data-type="mobile">
        <div class="contr">
          <div class="mobile-section__circle">
            <p class="descr__text">Mobile version</p>
            <div class="samples">
              <div class="samples__left">
                <div class="interception"></div>
                <img src="/lab/img/projects/mobile-samples.png" alt="" />
              </div>
              <div class="samples__right">
                <div class="interception"></div>
                <img src="/lab/img/projects/mobile-stat.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>  
      </div>     

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
                <img src="/lab/img/projects/reactivate/next-project.jpg" alt="">
              </span>
              <i></i>              
            </div>
            <div class="next-project__label">
              <h4>
                <span>client</span>
              </h4>  
              <h5>
                <span>Floston</span>
              </h5>
            </div>        
          </section>
        </div>
    </article>
  </div>
  

</template>

<script>
//import Scrollbar from 'smooth-scrollbar';
import * as hoverEffect from '~/assets/js/photosMorph';
import * as hoverEffect2 from '~/assets/js/photosMorph2';
export default {    
    mounted : function () {
      const app = this;      
      app.scrollbar =  Scrollbar.init(document.querySelector('.reactivate'), {
        alwaysShowTracks: true
      });      
      app.scrollbar.addListener((status) => {        
        app.scrollTop = status.offset.y;
      });
      // document.querySelector('#app-projects-reactivate').addEventListener('scroll', function(e){      
      //   app.scrollTop = document.querySelector('#app-projects-reactivate').scrollTop;
      // });
      TweenMax.set(document.querySelectorAll('.next-project'), {visibility: 'hidden'});
      
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
    data: function(){
      return {
        nextProject: false,
        scrollbar: null,
        scrollTop: 0,
        scrollDelay: 250,
        timer: 3,
        windowHeight: window.innerHeight
      }
    },
    computed : {
      appStart: function() {
        return this.$store.state.appStart;
      },
      resize: function(){
        return this.$store.state.resize;
      },
      mobile: function(){
        return this.$store.state.mobile;
      },
      cursorColor: function(){
        return this.$store.state.cursorColor;
      },
      cursorHoverColor: function(){
        return this.$store.state.cursorHoverColor;
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
        app.$router.push({path: '/projects/floston'});
      }})
    }
       
    },
  transition : {
    mode : 'out-in',
    css : false,
    enter : function(el, done){      
      const app = this;
      app.$store.commit('set', {
        name: 'page',
        value: 'reactivate'
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
      TweenMax.set('.main-bg', {backgroundColor : '#191919', height : '100%', width : 0, x : 0});
      TweenMax.set('.case__head', {x: '-100%'});
      TweenMax.set('.reactivate__body', {opacity: 0})
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
      .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno')
      .set('header .logo', {width: 50}, 'uno');
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#fff', ease: Power3.easeIn, onComplete : function(){
        TweenMax.set('#app', {backgroundColor : '#191919'});        
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
            TweenMax.to('.reactivate__body', 1.4, {opacity: 1});
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

        new TimelineMax({delay: 0.6}).to('.case__head', 0.8, {x: '0%', ease: Power3.easeInOut})
        .staggerFromTo(document.querySelectorAll('.case__head .case__head_title .left span'), 1, {x: '-100vw'}, {x : 0, visibility: 'visible', ease: Power4.easeOut}, 0.15, 'title')
        .staggerFromTo(document.querySelectorAll('.case__head .case__head_title .right span'), 1, {x: '-100vw'}, {x : 0, visibility: 'visible', ease: Power4.easeOut}, 0.15, 'title')
        .addCallback(function(){
          hoverEffect.start();
        })
        .to('.allprojects a span', 0.4, {y: '0%'}, 'end')
        .to('.allprojects i', 0.4, {scale: 1}, 'end')
        .staggerTo('.case__head_characteristic h4 span', 0.4, {y: '0%'}, 0.2, 'end')
        .staggerTo('.case__head_characteristic h5 span', 0.4, {y: '0%'}, 0.2, 'end')
        .set('.scrollbar-track-y', {opacity: 1})
        .to('.case__head_characteristic .link .background', 0.4, {width: '100%', ease: Power3.easeInOut})
        .to('.case__head_characteristic .link span', 0.4, {y: '0%'}, '+=0.3')

      }});


      done();      
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
      hoverEffect.end();
      new TimelineMax().staggerTo(document.querySelectorAll('.case__head .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.case__head .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .addCallback(function(){
        hoverEffect2.end();
      }, '-=0.4')
      .set('.scrollbar-track-y', {opacity: 0}, 'end')
      .to('.next-project__img', 0.7, {x: '100%', ease: Power4.easeInOut}, 'end+=1.5')
      .staggerTo(document.querySelectorAll('.next-project__label span'), 0.4, {y: '110%', onStart: function(){
        //hoverEffect2.end();
      }}, 0.3, 'end+=1')
      .to('.reactivate__body', 1.4, {opacity: 0}, 'end')
      .to('.allprojects a span', 0.4, {y: '100%'}, 'end')
      .to('.allprojects i', 0.4, {scale: 0}, 'end')
      .staggerTo('.case__head_characteristic h4 span', 0.4, {y: '110%'}, 0.2, 'end')
      .staggerTo('.case__head_characteristic h5 span', 0.4, {y: '110%'}, 0.2, 'end')
      .to('.case__head_characteristic .link span', 0.4, {y: '100%'}, 'end')
      .to('.case__head_characteristic .link .background', 0.4, {width: '0%', ease: Power3.easeInOut}, 'end')
      .to('.case__head', 0.8, {x: '-100%', ease: Power3.easeInOut}, 'end+=0.8')
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
    }
  }
}
</script>

<style lang="scss">
#app-projects-reactivate {
  overflow: hidden;  
  height: 100%;
  .scroll-content {
    overflow: hidden;
  }
  .case {
    overflow: hidden;
    height: 100%;    
  }  
  .scrollbar-track {
    width: 6px;
    background-color: transparent;
    &.scrollbar-track-y {
      opacity: 0;
      .scrollbar-thumb {
        width: 6px;
        background-color: #fff;
        border-radius: 0;
      }
    }    
  }
 .case__head {
    width: calc(100vw - 140px);
    margin-top: 150px;    
    background-color: #fff;
    position: relative;
    @media screen and (max-width: 900px) {
      width: 100%;
      margin-top: 310px;
      overflow: hidden;
    }
    @media screen and (max-width: 480px) {
      margin-top: 125px;
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
        color: #212121;        
        .background {
          background: #90f8eb;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: #212121;
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
        color: #191919;
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
  .slides {
    list-style: none;
    margin: 100px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    li {
      width: 32%;
      position: relative;
      overflow: hidden;
    }
    img {
      max-width: 100%;
      max-height: 100%;      
    }
  }  
  
  .next-project-wrapper {
    background-color: #1c2434;
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
        color: #2af8eb;
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
          height: 49vw;
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
  

.contr {
  position: relative;
  overflow: hidden;
  margin: 0 140px;
  @media only screen and (max-width: 900px) {
    margin: 0 70px;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 30px;
  }
}




.bg-absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }
}
.hero > .contr {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  .contr__inner {
    z-index: 1;
  }
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    background-color: #fff;
    z-index: 0;
  }
}
.hero .descr {
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 0 15px;
  }
}
.hero__label {
  position: relative;
}
.hero__label-abs {
  position: absolute;
  left: 0;
  top: 70px;
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
      color: #fff;
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
      background-color: #fff;
      border: none;
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
      }      
    }      
    @media screen and (max-width: 480px) {
      
    }
  }  
}
.descr {
  display: flex;
  padding: 54px 0;
  color: #212121;
  background-color: #fff;
  .descr__block {
    margin-bottom: 20px;
    &:not(:last-child) {
      margin-right: 83px;
    }
  }
}
.descr__title {
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 7px;
}
.descr__text {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.67;
}
.btn-full {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 203px;
  height: 70px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  color: #212121;
  background-color: #90f8eb;
}
.ml-auto {
  margin-left: auto;
}
.img-wrapper {
  display: inline-block;
  margin: auto;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
}
.interception {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #fff;    
    z-index: 1;    
  }
.quick-words {
  margin: 70px 0 130px;  
  .descr {
    padding-left: 13.8%;
    padding-right: 13%;
  }
}
.section-with-bg {
  padding: 134px 0;
  .contr {
    text-align: center;
  }
  .contr img {
    width: 100%;
    max-width: 1000px;
  }
}
.section-with-bg,
.section-about,
.mobile-section {
  display: flex;
  flex-direction: column;
  position: relative;
  & > .contr {
    z-index: 1;
  }
}
.section-about {
  .contr {
    text-align: center;
  }
}
.section-about img {
  width: 100%;
}
.section-about .contr img {
  max-width: 1000px;
  display: block;
  margin: auto;
}
.fullwidth-section {
  margin: 100px 0;
  .fullwidth-section__video {
    position: relative;
    text-align: center;
  }
  .descr__text {
    margin-bottom: 70px;
    color: #fff;
  }
  img {
    width: 100%;
    max-width: 1000px;
    display: block;
    margin: auto;
  }
}
.section-about__header {
  position: relative;
  height: 643px;
  margin-bottom: -528px;  
}
.carousel {
  margin: 100px 0;
}
#carouselProject .slick-slide {
  padding: 0 22.5px;
  width: 658px !important;
  max-width: 100vw;
  outline: none;
}
.mobile-section {
  margin: 120px 0;
  .descr__text {
    margin-bottom: 100px;
    color: #fff;
  }
}
.mobile-section__circle {
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 30px;
    right: 0;
    margin: auto;
    width: calc(100vw - 140px - 140px);
    height: calc(100vw - 140px - 140px);
    max-width: 870px;
    max-height: 870px;
    border-radius: 50%;
    background-color: #000;
    z-index: -1;
    @media only screen and (max-width: 900px) {   
      display: none;
    }
  }
  
}
.samples {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
}
.samples__left {
  margin-right: 80px;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    margin: 0;
    text-align: center;
  }
}
.samples__right {
  margin-top: 320px;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    margin-top: 70px;
    text-align: center;
  }
}
}


</style>

