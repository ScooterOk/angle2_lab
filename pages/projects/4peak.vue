<template>
  <div id="app-projects-4peak">
    <div class="allprojects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
      <nuxt-link to="/projects">
        <b>
          <span>all projects</span>
        </b>        
        <i></i>
      </nuxt-link>      
    </div>
    <article class="case 4peak">
      <section class="case__head">
        <div class="case__head_img" data-displacement="/lab/img/displacement/pattern2.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="/lab/img/displacement/start.png">
          <img src="/lab/img/projects/4peak/preview.jpg" alt="">          
        </div>
        <ul class="case__head_title">
          <li>
            <div class="left">            
              <h2>
                <span>4peak</span>                
              </h2>          
            </div>
            <div class="right">
              <h2>                
                <span>4peak</span>                
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
        <!-- <div class="bg-absolute">
          <img src="/lab/img/projects/4peak/part-3.jpg" alt>
        </div>-->
        <div class="content-box leave">
          <div class="bg-absolute startanim" data-bg="mainHeadingImg">
            <img src="/lab/img/projects/4peak/bg-management.jpg" alt>
          </div>
          <div class="contr contr--with-padding contr--no-r-padding">
            <h2 class="main-heading startanim" data-type="mainHeading">
              <span>MANAGEMENT SYSTEM</span>
              <br>
              <span class="font-weight-normal">FOR SKI RESORTS</span>
            </h2>
          </div>
          <div class="contr startanim" data-type="mainHeadingImg">
            <div class="pic-full-width imganim">
              <img src="/lab/img/projects/4peak/management.png" alt>
            </div>
          </div>
        </div>
        <section class="section startanim leave" data-type="aboutText">
          <div class="contr contr--with-padding">
            <div class="row justify-content-center">
              <div class="content__block content__block--center">
                <h3 class="content__title">About the project</h3>
                <div class="content__descr">
                  <p>4Peak is a management system for ski resorts (lifts schedules, etc.) and its marketing campaigns. Data for analysis is collected from the mobile application, which users use for check-ins, rankings and lifts schedule. Also, users receive useful information about working hours of different objects in the resort and beneficial marketing offers.</p>
                  <ul class="stat-list">
                    <li class="stat__item">
                      <img src="/lab/img/projects/4peak/icon-reports.svg" alt class="stat__icon">
                      <span class="stat__numb">32</span>
                      <h6 class="stat__caption">resorts</h6>
                    </li>
                    <li class="stat__item">
                      <img src="/lab/img/projects/4peak/icon-countries.svg" alt class="stat__icon">
                      <span class="stat__numb">5</span>
                      <h6 class="stat__caption">countries</h6>
                    </li>
                    <li class="stat__item">
                      <img src="/lab/img/projects/4peak/icon-check.svg" alt class="stat__icon">
                      <span class="stat__numb">10k</span>
                      <h6 class="stat__caption">check-ins per month</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="content-box problem leave">
          <div class="bg-absolute h-auto startanim" data-bg="problemImg">
            <img src="/lab/img/projects/4peak/bg-snowboardist.jpg" alt>
          </div>
          <section class="section">
            <div class="contr contr--with-padding">
              <div class="row">
                <h5 class="section-caption-vertical">old version</h5>
                <div class="col-narrow col-mid startanim" data-type="problem">
                  <div class="imganim">
                    <img src="/lab/img/projects/4peak/old-version.jpg" alt class="j">
                    </div>
                </div>
                <div class="content__block startanim">
                  <h3 class="content__title">The problem</h3>
                  <div class="content__descr">
                    <p>
                      The owner of software for ski resorts addressed us for the improvement of usability of the dashboard. We were requested to identify the problems of usability, update the structure, refine the functionality, modernize. Make it more convenient for each persona.
                      The first version of the project was made by the client itself without the involvement of proper UX and UI specialists. No wonder the system had lots of critical drawbacks.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pic-full-width startanim imganim" data-type="feedbacks">
                <img src="/lab/img/projects/4peak/feedbacks.png" alt>
              </div>
            </div>
          </section>
        </div>
        <div class="lines leave">
          <div class="pic-full-width imganim">
            <img src="/lab/img/projects/4peak/lines.svg" alt>
          </div>
        </div>
        <div class="content-box content-box--wireframes leave">
          <div class="contr contr--with-padding contr--no-r-padding">
            <div class="row">
              <h5 class="section-caption-vertical">New wireframes</h5>
              <div class="pic-full-width startanim imganim" data-type="wireframes">
                <img src="/lab/img/projects/4peak/wireframes.jpg" alt>
              </div>
            </div>
          </div>
        </div>
        <article class="article article--design leave">
          <div class="bg-absolute">
            <img src="/lab/img/projects/4peak/bg-mask.jpg" alt>
          </div>
          <div class="contr contr--with-padding contr--no-r-padding">
            <h2 class="article__title startanim" data-type="design">Design Solutions and New UI</h2>
            <div class="article__descr startanim">
              <div class="content__block">
                <h3 class="content__title">User management</h3>
                <div class="content__descr">
                  <p>User management was barely possible. User's profile was a popup, without URL. We designed it as a separate page, for users list were added search and management options.</p>
                </div>
              </div>
            </div>
            <section class="section-picture">
              <div class="row">
                <h5 class="section-caption-vertical">All Users</h5>
                <div class="pic-full-width imganim" data-img="designImg">
                  <img src="/lab/img/projects/4peak/all-users.jpg" alt>
                </div>
              </div>
            </section>
          </div>
          <div class="contr contr--with-padding contr--no-l-padding">
            <section class="section-picture">
              <div class="row">
                <h5 class="section-caption-vertical">New Users</h5>
                <div class="pic-full-width startanim imganim" data-type="newUsers">
                  <img src="/lab/img/projects/4peak/new-users.jpg" alt>
                </div>
              </div>
            </section>
          </div>
          <div class="contr contr--with-padding contr--no-r-padding">
            <section class="section-picture">
              <div class="row">
                <h5 class="section-caption-vertical">Active Races</h5>
                <div class="pic-full-width startanim imganim" data-type="activeRaces">
                  <img src="/lab/img/projects/4peak/active-races.jpg" alt>
                </div>
              </div>
            </section>
          </div>
          <section class="section section--complicated">
            <div class="contr contr--with-padding contr--no-r-padding">
              <div class="row">
                <div class="col-narrow">
                  <div class="content__block startanim" data-type="tools">
                    <h3 class="content__title">Marketing tools</h3>
                    <div class="content__descr">
                      <p>Tools for management of marketing campaigns had unnecessary features. We've improved the workflow and the design accordingly.</p>
                    </div>
                  </div>
                  <h5 class="complicated__title">Old version</h5>
                  <div class="complicated__block imganim" data-img="toolsimgOld">
                    <img src="/lab/img/projects/4peak/tools--old.jpg" alt class="shadowed">
                  </div>
                </div>
                <div class="right-image-cutted imganim" data-img="toolsimg">
                <img src="/lab/img/projects/4peak/tools.jpg" alt class="shadowed">
              </div>
              </div>
            </div>
          </section>
          <section class="section section--complicated">
            <div class="contr contr--with-padding contr--no-r-padding">
              <div class="row">
                <div class="col-narrow">
                  <div class="content__block startanim" data-type="management">
                    <h3 class="content__title">Lifts management</h3>
                    <div class="content__descr">
                      <p>We've updated the lifts management interface. Rare features moved back. Important features put on the forefront simplified the functionality. Now adding/editing lifts are on the same page.</p>
                    </div>
                  </div>
                  <h5 class="complicated__title">Old version</h5>
                  <div class="complicated__block imganim" data-img="managementImgOld">
                    <img src="/lab/img/projects/4peak/lifts--old.jpg" alt class="shadowed">
                  </div>
                </div>
                <div class="right-image-cutted imganim" data-img="managementImg">
                <img src="/lab/img/projects/4peak/lifts.jpg" alt class="shadowed">
                </div>
              </div>
            </div>
          </section>
          <section class="section startanim" data-type="graphs">
            <div class="contr contr--with-padding">
              <div class="row">
                <div class="content__block">
                  <h3 class="content__title">Ratings and graphs</h3>
                  <div class="content__descr">
                    <p>Analytic data was not collected. We created pages for marketers and designed different views for analytics data.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contr">
              <div class="pic-full-width ratings-picture imganim">
                <img src="/lab/img/projects/4peak/ratings.png" alt>
              </div>
            </div>
          </section>
        </article>
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
                <img src="/lab/img/projects/reaktivate.jpg" alt="">
              </span>
              <i></i>              
            </div>
            <div class="next-project__label">
              <h4>
                <span>client</span>
              </h4>  
              <h5>
                <span>Reaktivate</span>
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
export default {
  mounted: function() {
    const app = this;    
    TweenMax.set(document.querySelectorAll('.next-project'), {visibility: 'hidden'});
    app.scrollbar = Scrollbar.init(document.querySelector("#app-projects-4peak .case"), {
      alwaysShowTracks: true
    });
    app.scrollbar.addListener((status) => {
      app.scrollTop = status.offset.y;
    });     
    // document.querySelector('#app-projects-4peak').addEventListener('scroll', function(e){      
    //   app.scrollTop = document.querySelector('#app-projects-4peak').scrollTop;
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
    cursorColor: function(){
      return this.$store.state.cursorColor;
    },
    cursorHoverColor: function(){
      return this.$store.state.cursorHoverColor;
    },
    resize: function(){
      return this.$store.state.resize;
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
    startAnimationInit: function(){
      const app = this;
      document.querySelectorAll('.startanim').forEach(el => {
        var type = el.getAttribute('data-type');
        if(!type)return;
        app.initElements[type] = {
          el: el,
          y: Math.floor(el.getBoundingClientRect().top)
        };        
      });
      document.querySelectorAll('.imganim').forEach(el => {
        let src = el.querySelector('img').src;        
        let i = document.createElement('i');
        i.style.backgroundImage = 'url("'+src+'")';
        el.appendChild(i);        
      });
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
        app.$router.push({path: '/projects/reaktivate'});
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
        value: '4peak'
      });
      app.$store.commit('set', {
        name: 'cursorColor',
        value: '#b6b6b6'
      });
      app.$store.commit('set', {
        name: 'cursorHoverColor',
        value: '#90f8eb'
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
      TweenMax.set('.main-bg', {backgroundColor : '#fff', height : '100%', width : 0, x : 0});
      TweenMax.set('.case__head', {x: '-100%'});
      TweenMax.set(document.querySelectorAll('#app-projects-4peak .leave'), {opacity: 0});
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
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#1d1d1d', ease: Power3.easeIn, onComplete : function(){
        TweenMax.set('#app', {backgroundColor : '#fff'});        
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
            TweenMax.to(document.querySelectorAll('#app-projects-4peak .leave'), 1.4, {opacity: 1});            
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
        .to(document.querySelectorAll('.case__head .case__head_title span'), 0.7, {x: '0%', ease: Power4.easeOut, onComplete: function(){
          hoverEffect.start();
        }})
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
      new TimelineMax()
      .staggerTo(document.querySelectorAll('.case__head .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.case__head .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .left span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .staggerTo(document.querySelectorAll('.next-project .case__head_title .right span'), 1, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'end')
      .addCallback(function(){
        hoverEffect2.end();
      }, '-=0.4')
      
      //.to('.next-project__img', 0.7, {x: '100%', ease: Power4.easeInOut}, 'end+=1.5')
      .set('.scrollbar-track-y', {opacity: 0}, 'end')
      .staggerTo(document.querySelectorAll('.next-project__label span'), 0.4, {y: '110%'}, 0.3, 'end')
      .to(document.querySelectorAll('.leave'), 1.4, {opacity: 0}, 'end')
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
        TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
        Scrollbar.destroyAll();
        hoverEffect.clear();
        hoverEffect2.clear();        
        done();
      }}, 'end+=1.2')
      .to('.next-project-wrapper', 0.7, {opacity: 0}, 'end+=1.2')
      
      //done();
    }
  }
};
</script>

<style lang="scss">
#app-projects-4peak {
  overflow: hidden;  
  height: 100%;
  .scroll-content {
    overflow: hidden;
  }
  .case {
    overflow: hidden;
    height: 100%;    
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
      color: #fff;
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
        color: #191919;
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
      border-bottom: 7px solid #fff;
      @media screen and (max-width: 900px) {
        width: 50px;
        display: block;
        height: 50px;
        border-radius: 50%;
        margin-left: 15px;
        background-color: #fff;
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
  .case__head {
    width: calc(100vw - 140px);
    margin-top: 150px;    
    background-color: #394764;
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
        color: #fff;
        h2 {
          transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
        }
      }
      .right {
        width: 50%;
        overflow: hidden;  
        color: #fff;
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
    padding-top: 90px;
    color: #394764;
    overflow: hidden;
  }
  .row {
    position: relative;
    display: flex;
    width: 100%;
  }
  .contr {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
  .contr--with-padding {
    padding: 0 140px;
  }
  .contr--no-r-padding {
    padding-right: 0 !important;
  }
  .contr--no-l-padding {
    padding-left: 0 !important;
  }
  img {
    max-width: 100%;
  }
  h2,
  h3,
  h5,
  h6,
  p,
  ul,
  li,
  figure {
    margin: 0;
  }
  .justify-content-center {
    justify-content: center;
  }
  .h-auto {
    height: auto!important;
  }
  .font-weight-normal {
    font-weight: normal;
  }
  .shadowed {
    box-shadow: 0 8px 32px 0 rgba(30, 40, 59, 0.1);
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
      object-fit: cover;
      object-position: center;
    }
  }
  .content-box {
    position: relative;
  }
  .content__block {
    max-width: 700px;
  }
  .content__title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 0.66em;
  }
  .content__descr {
    font-size: 18px;
    line-height: 1.67;
    margin-bottom: 60px;
    p {
      opacity: 0.8;
    }
  }
  .section {
    margin: 30px 0;
    & > .contr {
      position: relative;
    }
  }
  .section--complicated {
    margin-bottom: 160px;
  }
  .complicated__block {
    width: 488px;
    margin-left: -108px;
  }
  .complicated__title {
    font-size: 51px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: normal;
    text-transform: uppercase;
    margin-bottom: 0.68em;
    opacity: 0.07;
  }
  .pic-full-width img {
    display: block;
    width: 100%;
  }
  .main-heading {
    margin-bottom: 0.7em;
    font-size: 72px;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -1.2px;
    span {
      display: inline-block;
    }
  }

  .content__block--center {
    max-width: 720px;
  }
  .stat-list {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    margin: 25px 0;
    li {
      position: relative;
      list-style-type: none;
      color: #e83742;
      text-align: center;
      padding-left: 55px;
      margin: 20px 0;
    }
  }
  .stat__numb {
    font-size: 72px;
    font-weight: 900;
    line-height: normal;
  }
  .stat__caption {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
  .stat__icon {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .col-narrow {
    flex-shrink: 0;
    width: 100%;
    max-width: 380px;
    margin-right: 40px;
  }
  .col-mid {
    @media only screen and (min-width: 1200px) {
      max-width: 500px;
    }
  }
  .section-caption-vertical {
    position: absolute;
    bottom: 0;
    left: -100px;
    width: 62px;
    white-space: nowrap;
    transform: rotate(-90deg);
    opacity: 0.07;
    font-size: 51px;
    font-weight: 900;
    line-height: normal;
    color: #364051;
    text-transform: uppercase;
    .caption-double {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
        font-size: 18px;
      font-weight: 900;
      font-style: normal;
      line-height: normal;
      color: #364051;
    }
  }
  .contr--no-l-padding .section-caption-vertical {
    left: auto;
    right: -100px;
  }
  .lines {
    margin-top: -300px;
  }
  .content-box--wireframes {
    margin-top: 130px;
  }
  .article {
    position: relative;
    padding: 200px 0 450px;
  }
  .article--design {
    .bg-absolute {
      top: auto;
      bottom: 0;
      height: 992px;
    }
  }
  .article__descr {
    max-width: 700px;
  }
  .article__title {
    margin-bottom: 0.9em;
    opacity: 0.8;
    font-size: 72px;
    line-height: normal;
    font-weight: normal;
    letter-spacing: -1.2px;
    color: #e83742;
  }
  .section-picture {
    margin-bottom: 160px;
    img {
      box-shadow: 0 8px 32px 0 rgba(30, 40, 59, 0.1);
    }
  }
  .ratings-picture {
    margin-top: -130px;
  }
.right-image-cutted {
  flex-grow: 1;
  img {
      height: 100%;
    object-fit: cover;
    object-position: left;
}
  }
  @media only screen and (max-width: 992px) {
    .contr--with-padding {
      padding: 0 70px;
    }
    .section--complicated {
      margin-bottom: 80px;
    }
    .ratings-picture {
      margin-top: -30px;
    }
    .article {
      padding: 100px 0 360px;
    }
    .main-heading,
    .article__title {
      font-size: 50px;
    }
    .section-caption-vertical {
      font-size: 36px;
      left: -70px;
    }
    .section-picture {
      margin-bottom: 80px;
    }
  }
  @media only screen and (max-width: 768px) {
    .row {
      flex-wrap: wrap;
    }
    .col-narrow {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
    }
    .main-heading,
    .article__title {
      font-size: 42px;
    }
    .complicated__block {
      width: auto;
      margin-left: 0;
      margin-bottom: 30px;
    }
    .complicated__title {
      font-size: 36px;
    }
    .stat-list {
      flex-wrap: wrap;
      li {
        padding-left: 40px;
      }
    }
    .stat__numb {
      font-size: 50px;
    }
    .article--design {
      .bg-absolute {
        height: 700px;
      }
    }
  }
  @media only screen and (max-width: 580px) {
    .contr--with-padding {
      padding: 0 15px;
    }
    .main-heading,
    .article__title {
      font-size: 36px;
    }
    .content__title {
      font-size: 24px;
    }
    .stat-list {
      flex-direction: column;
      align-items: center;
      li {
        padding-right: 40px;
      }
    }
    .article--design {
      padding-bottom: 240px;
      .bg-absolute {
        height: 500px;
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
        line-height: 1.67;
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

