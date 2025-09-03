<template>
  <div id="app-projects-floston">
    <div class="allprojects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
      <nuxt-link to="/projects">
        <b>
          <span>all projects</span>
        </b>        
        <i></i>
      </nuxt-link>      
    </div>
    <article class="case floston">
      <section class="case__head">
        <div class="case__head_img" data-displacement="/lab/img/displacement/pattern2.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="/lab/img/displacement/start.png">
          <img src="/lab/img/projects/floston/preview.jpg" alt="">          
        </div>
        <ul class="case__head_title">
          <li>
            <div class="left">            
              <h2>
                <span>Floston</span>                
              </h2>          
            </div>
            <div class="right">
              <h2>                
                <span>Floston</span>                
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
              <span>Service</span>
            </h5>
          </div>
          <div class="creative">
            <h4>
              <span>creative fields</span>
            </h4>
            <h5>
              <span>Prototyping, UX\UI design</span>
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
      <div class="wrapper">
      <div class="contr">
        <div class="content-box1 startanim" data-type="management">
          <div class="bg-absolute">
            <img src="/lab/img/projects/floston/bg1.png" alt>
          </div>
          <section class="section section--management">
            <div class="row">
              <p
                class="content__subtitle management__descr"
              >Simple and beautiful fleet management solution for small and medium-sized businesses.</p>
              <div class="col img-wrapper">                
                <img src="/lab/img/projects/floston/management.png" alt>
              </div>
            </div>
          </section>
          <section class="section startanim" data-type="aboutSystem">
            <div class="row">
              <div class="content__block content__block--right">
                <h3 class="content__title">
                  <span class="content__title-numb">1</span>About the system
                </h3>
                <p class="content__subtitle">System helps to receive the answers:</p>
                <div class="content__descr">
                  <ul class="content__list">
                    <li>How efficient are the cars?</li>
                    <li>Are corporate cars used properly?</li>
                    <li>What is their technical condition?</li>
                    <li>How professional and honest are the drivers?</li>
                    <li>How to spend less on fuel and maintenance?</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section class="section section--eval startanim" data-type="evaluation">
            <div class="row">
              <div class="content__block">
                <h3 class="content__title">
                  <span class="content__title-numb">2</span>Evaluation report findings
                </h3>
                <p
                  class="content__subtitle"
                >After we audited the existing system, we focused on the following problems:</p>
                <div class="content__descr">
                  <ul class="content__list">
                    <li>Important and even critical issues are hidden</li>
                    <li>It's not clear for users how can they do their work in the system</li>
                    <li>A huge bunch of redundant information and UI elements</li>
                    <li>Мisleading navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section class="section startanim" data-type="solutions">
            <div class="row">
              <div class="content__block content__block--right">
                <h3 class="content__title">
                  <span class="content__title-numb">3</span>Solutions
                </h3>
                <p class="content__subtitle">And we provided following solutions:</p>
                <div class="content__descr">
                  <ul class="content__list">
                    <li>Separate all users into three roles and wrote scenarios and procedures for each of role</li>
                    <li>Create a new alert system</li>
                    <li>Neat and clean navigation</li>
                    <li>Simple minimalistic design</li>
                    <li>Improved user experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="content-box2 startanim" data-type="roles">
        <div class="contr">
        <div class="bg-absolute">
          <img src="/lab/img/projects/floston/roles.svg" alt>
        </div>
          <section class="section">
            <div class="content__block">
              <h3 class="content__title">
                <span class="content__title-numb">4</span>Roles
              </h3>
              <p class="content__subtitle">We built a dedicated area for each role</p>
            </div>
            <div class="row row--role1 col-1">
              <div class="content__descr">
                <h5 class="content__list-title">Fleet manager</h5>
                <ul class="content__list">
                  <li>Works «here and now»</li>
                  <li>Important to know current car state and location</li>
                  <li>Quick reaction on alerts</li>
                  <li>Quick access to the list of issues</li>
                </ul>
              </div>
            </div>
            <div class="row row--role2">
              <div class="content__descr col-3">
                <h5 class="content__list-title">Data scientist</h5>
                <ul class="content__list">
                  <li>Works with history</li>
                  <li>Reporting tools</li>
                  <li>Research tools</li>
                  <li>Report delivery tools</li>
                </ul>
              </div>
              <div class="content__descr col-2">
                <h5 class="content__list-title">Technical support engineer</h5>
                <ul class="content__list">
                  <li>Adds cars, drivers and users to the system</li>
                  <li>Makes all profile changes</li>
                  <li>System maintenance</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <article class="content-article startanim" data-type="wireframes">
        <section class="section">
          <div class="contr">
            <div class="row">
              <div class="content__block">
                <h3 class="content__title content-article__title">
                  <span class="content__title-numb">5</span>Wireframes
                </h3>
              </div>
            </div>
          </div>
          <div class="contr contr--wireframes">
            <div class="pic-contain-width img-wrapper">              
              <img src="/lab/img/projects/floston/wireframes.png" alt>
            </div>
          </div>
        </section>
      </article>
      <div class="content-box3">
        <div class="bg-absolute">
          <img data-type="background" src="/lab/img/projects/floston/interface-design-bg.png" alt>
        </div>
        <article class="content-article">
          <section class="section startanim" data-type="userInterface">
            <div class="contr">
              <div class="row justify-content-center">
                <div class="content__block">
                  <h3 class="content__title content-article__title">
                    <span class="content__title-numb">6</span>User Interface Design
                  </h3>
                </div>
              </div>
              <div class="pic-full-width img-wrapper">                
                <img src="/lab/img/projects/floston/interface-design1.png" alt>
              </div>
            </div>
          </section>
        </article>
        <section class="section section--alerts startanim" data-type="alert">
          <div class="contr">
            <div class="row">
              <div class="content__block">
                <p class="content__subtitle">Alert system and color coding</p>
              </div>
            </div>
            <div class="pic-full-width img-wrapper">              
              <img src="/lab/img/projects/floston/interface-design2.png" alt>
            </div>
          </div>
        </section>
        <article class="content-article">
          <section class="section section--cars startanim" data-type="cars">
            <div class="contr">
              <div class="row">
                <div class="car__block">
                  <figure class="car__figure">
                    <img src="/lab/img/projects/floston/car-blue.svg" alt>
                    <figcaption class="car__figcaption">active</figcaption>
                  </figure>
                </div>
                <div class="car__block">
                  <figure class="car__figure">
                    <img src="/lab/img/projects/floston/car-yellow.svg" alt>
                    <figcaption class="car__figcaption">free</figcaption>
                  </figure>
                </div>
                <div class="car__block">
                  <figure class="car__figure">
                    <img src="/lab/img/projects/floston/car-red.svg" alt>
                    <figcaption class="car__figcaption">critical problem</figcaption>
                  </figure>
                </div>
                <div class="car__block">
                  <figure class="car__figure">
                    <img src="/lab/img/projects/floston/car-grey.svg" alt>
                    <figcaption class="car__figcaption">offline</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </article>
        <article class="content-article startanim" data-type="screenshots">
          <div class="contr">
            <div class="pic-full-width">
              <div class="img-wrapper">                
                <img src="/lab/img/projects/floston/interface-design3.png" alt></div>              
            </div>
          </div>
        </article>
        <article class="content-article contacts">
          <section class="section startanim" data-type="contacts">
            <div class="contr contr--no-pading">
              <div class="pic-full-width">
                <div class="img-wrapper">                  
                  <img src="/lab/img/projects/floston/contacts.png" alt></div>                
              </div>
            </div>
          </section>
        </article>        
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
              <img src="/lab/img/projects/sparky.jpg" alt="">
            </span>
            <i></i>            
          </div>
          <div class="next-project__label">
            <h4>
              <span>client</span>
            </h4>  
            <h5>
              <span>Sparky</span>
            </h5>
          </div>        
        </section>
      </div>      
    </div>
    </article>
    
    
  </div>
</template>

<script>
//import Scrollbar from "smooth-scrollbar";
import * as hoverEffect from '~/assets/js/photosMorph';
import * as hoverEffect2 from '~/assets/js/photosMorph2';
//import Swiper from 'swiper';
export default {
  mounted: function() {
    const app = this;
    TweenMax.set(document.querySelectorAll('.next-project'), {visibility: 'hidden'});
    app.scrollbar = Scrollbar.init(document.querySelector(".floston"), {
      alwaysShowTracks: true
    });
    app.scrollbar.addListener((status) => {
      app.scrollTop = status.offset.y;
    });    
    // document.querySelector('#app-projects-floston').addEventListener('scroll', function(e){      
    //   app.scrollTop = document.querySelector('#app-projects-floston').scrollTop;
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
        app.$router.push({path: '/projects/sparky'});
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
        value: 'floston'
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
      TweenMax.set('.main-bg', {backgroundColor : 'rgb(0, 32, 71)', height : '100%', width : 0, x : 0});
      TweenMax.set('.case__head', {x: '-100%'});
      TweenMax.set(document.querySelectorAll('.wrapper > *:not(.next-project-wrapper)'), {opacity: 0})
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
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#fff', ease: Power3.easeIn, onComplete : function(){
        TweenMax.set('#app', {backgroundColor : 'rgb(0, 32, 71)'});        
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
            TweenMax.to(document.querySelectorAll('.wrapper > *:not(.next-project-wrapper)'), 1.4, {opacity: 1});
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
      new TimelineMax().staggerTo(document.querySelectorAll('.case__head .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.case__head .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .addCallback(function(){
        hoverEffect2.end();
      }, '-=0.4')
      .set('.scrollbar-track-y', {opacity: 0}, 'end')
      .to('.next-project__img', 0.7, {x: '100%', ease: Power4.easeInOut}, 'end+=1.5')
      .staggerTo(document.querySelectorAll('.next-project__label span'), 0.4, {y: '110%'}, 0.3, 'end+=1')
      .to(document.querySelectorAll('.wrapper > *:not(.next-project-wrapper)'), 1.4, {opacity: 0}, 'end')
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
    }
  }
};
</script>

<style lang="scss">



#app-projects-floston {
  overflow: hidden;  
  height: 100%;
  .case {
    overflow: hidden;
    height: 100%;    
  }
  .scroll-content {
    overflow: hidden;
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
  .img-wrapper {
  display: inline-block;
  margin: auto;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
}
  
  [data-type="userInterface"] .img-wrapper,
  [data-type="contacts"] .img-wrapper {
    max-width: 1280px;
  }  
  [data-type="alert"] .interception {
    background-image: url('/lab/img/projects/floston/interface-design2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
  }
  [data-type="screenshots"] .interception {
    background-image: url('/lab/img/projects/floston/interface-design3.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
  }
  .content-article.contacts {
    margin: 370px 0;
    @media screen and (max-width: 900px) {
      margin: 70px 0;
    }
  }  
  [data-type="contacts"] .interception {
    background-image: url('/lab/img/projects/floston/contacts.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    background-position: right;
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
  .wrapper {
    width: 100%;
    padding-top: 150px;
    color: #fff;
    overflow: hidden;
  }
  .row {
    display: flex;
    width: 100%;
    @media only screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .contr {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 140px;
    @media only screen and (max-width: 1000px) {
      padding: 0 15px;
    }
  }
  .contr--no-pading {
    padding: 0;
  }
  img {
    max-width: 100%;
  }
  h3,
  h5,
  p,
  ul,
  li,
  figure {
    margin: 0;
  }
  .justify-content-center {
    justify-content: center;
  }
  .bg-absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .section {
    margin: 30px 0;
  }
  .pic-full-width img {
    display: block;
    width: 100%;
  }
  .content-box1,
  .content-box2,
  .content-box3 {
    position: relative;
  }
  .content-box1 {
    .bg-absolute {
      width: 106%;
      top: 218px;
      left: -71px;
    }
  }
.content-box2 > .contr {
position: relative;
}
  .content-box3 {
    overflow: hidden;
    .bg-absolute {
      width: 1280px;
      top: 108px;
      left: 0;
      right: 0;
      margin: auto;
      img {
        height: auto;
      }
    }
  }
  .content-article {
    margin: 94px 0 143px;
    .content-article__title {
      margin-bottom: 70px;
    }
    @media only screen and (max-width: 768px) {
      margin: 50px 0 50px;
      .content-article__title {
        margin-bottom: 30px;
      }
    }
  }
  .content__block {
    width: 100%;
    max-width: 600px;
  }
  .content__title {
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .content__title-numb {
    display: inline-block;
    font-size: 48px;
    font-weight: bold;
    color: #feca00;
    margin-right: 10px;
    transform: translateY(5px);
  }

  .content__subtitle {
    margin-bottom: 11px;
    padding-left: 45px;
  }
  .content__subtitle,
  .content__descr {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.82;
  }
  .content__list-title {
    margin-bottom: 26px;
    font-size: 27px;
    font-weight: 600;
    line-height: 1.48;
    color: #2fd782;
  }
  .content__list {
    padding-left: 0;
    font-size: 18px;
    line-height: 2.44;
    li {
      position: relative;
      padding-left: 45px;
      list-style-type: none;
      opacity: 0.8;
      &:after {
        content: "";
        position: absolute;
        left: 14px;
        top: 15px;
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: #2fd782;
        border-radius: 50%;
      }
    }
  }
  .contr--wireframes {
    padding: 0 !important;
    @media only screen and (min-width: 1280px) {
      max-width: 100%;
    }
  }
  .pic-contain-width {
    overflow: hidden;
    display: flex;
    justify-content: center;
    max-width: 100%;
    img {
      object-fit: contain;
      max-width: 1920px;
      object-position: center;
    }
  }
  @media only screen and (max-width: 480px) {
    .content__title {
      font-size: 26px;
    }
    .content__title-numb {
      font-size: 32px;
    }
    .content__subtitle,
    .content__descr {
      font-size: 20px;
      line-height: 1.56;
    }
    .content__list {
      line-height: 1.56;
    }
  }
  .content__block--right {
    max-width: 455px;
    margin-left: auto;
    margin-right: 13.3vw;
  }
  .content-box2 {
    .bg-absolute {
      top: -21px;
      width: 54%;
      height: auto;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    .content__list {
      line-height: 1.56;
      li {
        padding-left: 34px;
        margin-bottom: 16px;
        &:after {
          left: 0;
          top: 7px;
        }
      }
    }
  }
  .row--role1 {
    justify-content: flex-end;
    margin: 33px 0 57px;
    .content__descr {
      max-width: 370px;
      margin-right: 23.7%;
    }
  }
  .row--role2 {
    justify-content: flex-end;
    .content__descr {
      &:first-child {
        margin-top: 83px;
        margin-right: 7%;
      }
      max-width: 410px;
      margin-right: 13.4%;
    }
    @media only screen and (max-width: 768px) {
      .content__descr {
        margin: 0 !important;
        width: 50%;
      }
    }
    @media only screen and (max-width: 768px) {
      .content__descr {
        width: 100%;
        max-width: 100%;
      }
    }
  }
  .management__descr {
    max-width: 280px;
    padding-left: 0;
    margin-right: 60px;
    align-self: center;
    @media only screen and (max-width: 768px) {
      margin: 0 0 30px 0;
      max-width: 480px;
    }
  }
  .section--eval {
    margin: 50px 0 -13px;
  }
  .section--management {
    margin-bottom: 115px;
  }
  .section--alerts {
    margin: 253px 0 134px;
    .content__subtitle {
      font-size: 26px;
      padding-left: 0;
      margin-bottom: 26px;
    }
    @media only screen and (max-width: 768px) {
      margin: 100px 0 50px;
    }
  }

  .car__block {
    text-align: center;
    &:not(:last-child) {
      margin-right: 7.5%;
    }
  }
  .car__figcaption {
    margin-top: 40px;
    text-align: center;
    opacity: 0.8;
    font-size: 18px;
    line-height: 1.67;
  }
  @media only screen and (max-width: 768px) {
    .section--cars .row {
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .car__block {
      width: 45%;
      margin-top: 30px;
      margin-right: 0 !important;
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

