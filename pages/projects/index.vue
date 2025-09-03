<template>
  <div id="app-projects" :class="touch ? 'touch':''">
    <div class="projects__details">      
      <div class="projects__details_photo" data-displacement="./img/displacement/pattern2.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="./img/displacement/start.png">
        <img v-for="(img, $index) in projects" :key="$index" :src="img.url" alt="Image"/>    
      </div>
      <div class="projects__details_right">
        <div class="projects__details_slide-dots">          
          <i></i>          
        </div>
      </div>
    </div>
    <div class="projects__list_wrapper">
      <ul class="projects__list hover-link" ref="list">
        <li v-for="(project, index) in projects" :key="index" :data-name="project.dataName" :class="project.duble ? 'duble': ''">
          <div class="left">            
            <h2 @mouseenter="projectHover($event, project.dataName, index+1)" @mouseleave="projectHover($event, project.dataName, index+1)" :data-img="index" :data-name="project.dataName">
              <!-- <div class="tech">
                <b v-for="(tech, index) in project.tech" :key="index">{{tech}}</b>
              </div> -->
              <router-link v-if="project.dataName" :to="'/projects/'+project.dataName">                            
                <span>
                  <div class="sign">
                    <i class="plus">+</i>
                    <i class="minus">&ndash;</i>
                  </div>
                  <div class="name" v-if="mobile" v-html="project.nameMobile"></div>                
                  <div class="name" v-else v-html="project.name"></div>
                </span>
              </router-link>
              <span v-else>
                <div class="sign">
                  <i class="plus">+</i>
                  <i class="minus">&ndash;</i>
                </div>
                <div class="name" v-if="mobile" v-html="project.nameMobile"></div>                
                <div class="name" v-else v-html="project.name"></div>
              </span>
            </h2>          
          </div>
          <div class="right">
            <h2 @mouseenter="projectHover($event, project.dataName, index+1)" @mouseleave="projectHover($event, project.dataName, index+1)" :data-img="index" :data-name="project.dataName">
              <router-link v-if="project.dataName" :to="'/projects/'+project.dataName">              
                <span>
                  <div class="sign">
                    <i class="plus">+</i>
                    <i class="minus">&ndash;</i>
                  </div>
                  <div class="name" v-if="mobile" v-html="project.nameMobile"></div>                
                  <div class="name" v-else v-html="project.name"></div>
                </span>
              </router-link>
              <span v-else>
                <div class="sign">
                  <i class="plus">+</i>
                  <i class="minus">&ndash;</i>
                </div>
                <div class="name" v-if="mobile" v-html="project.nameMobile"></div>                
                <div class="name" v-else v-html="project.name"></div>
              </span>
            </h2>
          </div>            
        </li>          
      </ul>   
    </div>   
  </div>    
</template>

<script>
import * as hoverEffect from '~/assets/js/photosMorph';
export default {
    mounted : function () {
      const app = this;                      
      var split = new SplitText(".projects__list h2 span", {type: 'chars'});      
      const el = document.querySelector('.projects__details_photo');      
      const imgs = Array.from(el.querySelectorAll('img'));
      hoverEffect.init({
        parent: document.querySelector('.projects__details_photo'),
        startImage: el.dataset.startimage,
        intensity: el.dataset.intensity || undefined,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        images: imgs,          
        displacementImage: el.dataset.displacement
      });
      var leader = app.pointer;
      var list = document.querySelectorAll('.projects__list li');        
      list.forEach( function(el, i) {
        leader = app.startParallax(leader, el, i);
      });
      setTimeout(function(){
        app.scrollbar = Scrollbar.init(document.querySelector('.projects__list_wrapper'), {
          
        });
        app.scrollbar.addListener((status) => {
          app.scrollbarTop = status.offset.y;
        });
      }, 1000);
      
    },
    data: function(){
      return {        
        listTop : 0,
        sceneTop : 0,
        scrollbar: null,
        scrollbarTop: 0,
        scrollbarActive: 0,
        pointer : {
          y : 0
        },
        direction: '',
        oldY: 0,
        ease : 0.1,
        slide: '01',
        projects : [
          {
              name : '4peak',
              nameMobile: '4peak',
              dataName : '4peak',
              tech : ['ux', 'ui'],
              url : './img/projects/4peak.jpg'
          },
          {
              name : 'reaktivate',
              nameMobile : '<div>reakti-</div><div>vate</div>',
              dataName : 'reaktivate',
              tech : ['ux', 'ui', 'lab'],
              url : './img/projects/reaktivate.jpg'
          },
          {
              name : 'floston',
              nameMobile: 'floston',
              dataName : 'floston',
              tech : ['ux'],
              url : './img/projects/floston.jpg'
          },          
          {
              name: 'sparky',
              nameMobile: 'sparky',
              dataName : 'sparky',
              tech : ['ui'],
              url : './img/projects/sparky.jpg'
          },
          {
              name: 'cavio',
              nameMobile: 'cavio',
              dataName : 'cavio',
              tech : ['ui', 'lab'],
              url : './img/projects/cavio.jpg'
          } 
          // {
          //     name: 'augmania',
          //     nameMobile: '<div>augma-</div><div>nia</div>',
          //     //dataName : 'augmania',
          //     tech : ['ui', 'lab'],
          //     url : '/img/projects/augmania.jpg'
          // }
        ]
      } 
    },
    computed : {
      transitionPage: function(){
        return this.$store.state.transitionPage;
      },
      mousemove: function(){
        return this.$store.state.mousemove;
      },    
      mobile: function(){
        return this.$store.state.mobile;
      },
      touch: function(){
        return this.$store.state.touch;
      },
      resize: function(){
        return this.$store.state.resize;
      },
      scrollListPermit: function(){
        return this.$store.state.projects.scrollListPermit;
      },
      cursorColor: function(){
        return this.$store.state.cursorColor;
      },
      cursorHoverColor: function(){
        return this.$store.state.cursorHoverColor;
      }      
    },
    watch: {
      mousemove : function(move, old){
        const app = this;        
        if((move.y - 120) > 0){
          // app.direction = move.y > app.oldY ? 'up' : 'down';        
          // app.oldY = move.y;          
          var sh = document.querySelector('#app-projects').clientHeight;
          var lh = document.querySelector('.projects__list').clientHeight;          
          if(lh > sh){            
            var y = move.y - 120;            
            var sh = document.querySelector('#app-projects').clientHeight - 120;
            var lh = document.querySelector('.projects__list').clientHeight;
            var cp = 100 / (sh / y);
            var diff = (lh - sh);
            var yDiff = -(diff / 100) * cp;            
            app.pointer.y = yDiff;

            let step = (document.querySelector('.projects__details_slide-dots').clientHeight - document.querySelector('.projects__details_slide-dots i').clientHeight);
            let bar = (step/100)*cp;
            TweenMax.to('.projects__details_slide-dots i', 0.4, {y: bar});
            
            //app.listTop = yDiff;
            // TweenMax.to('.projects__list', 0.6, {y : yDiff, onUpdate: function(){
            //   var scaleY = 1 + ((yDiff - document.querySelector('.projects__list')._gsTransform.y)*0.002);              
            //   TweenMax.set('.projects__list', {scaleY:scaleY});              
            // }});          
          }
        }        
      },
      scrollbarTop: function(y){
        const app = this;        
        let cp = 100 / (app.scrollbar.limit.y / y);
        let step = (document.querySelector('.projects__details_slide-dots').clientHeight - document.querySelector('.projects__details_slide-dots i').clientHeight);
        let bar = (step/100)*cp;
        TweenMax.to('.projects__details_slide-dots i', 0.4, {y: bar});
        
        let list = [];
        let active;
        document.querySelectorAll('.projects__list li').forEach(function(el, i){
          list.push(el.offsetTop);          
        })
        for(var i in list){
          i = Number(i);          
          if(i < (list.length-1)){            
            if(y > list[i] && y < list[i+1]){
              app.scrollbarActive = i;
            }            
          }else{
            if(y > list[i])app.scrollbarActive = i;            
          }
        }
        
      },
      scrollbarActive: function(i){
        TweenMax.to(document.querySelectorAll('.projects__list li.hover span'), 0.3, {x : 0, color : '#ffffff', opacity : 0.1, ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.projects__list li.hover .sign .plus'), 0.3, {x: '0%', ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.projects__list li.hover .sign .minus'), 0.3, {x: '0%', ease: Power3.easeInOut});
        document.querySelector('.projects__list li.hover').classList.remove('hover');        

        document.querySelectorAll('.projects__list li')[i].classList.add('hover');
        TweenMax.to(document.querySelectorAll('.projects__list li')[i].querySelectorAll('.left span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.projects__list li')[i].querySelectorAll('.right span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#1d1d1d', opacity : 1, ease: Power3.easeInOut});        
        
        TweenMax.to(document.querySelectorAll('.projects__list li')[i].querySelectorAll('span .sign .plus'), 0.3, {x: '-100%', ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.projects__list li')[i].querySelectorAll('span .sign .minus'), 0.3, {x: '-100%', ease: Power3.easeInOut})
        hoverEffect.hoverMobile(i);
      },
      resize: function(e){        
        hoverEffect.resize();
      },      
      mobile: function(val){
      const app = this;
      TweenMax.set('.projects__details', {clearProps: 'all'});      
      TweenMax.killTweensOf('.preloader');
      new TimelineMax({repeat: -1}).set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
      .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
      .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
      .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});
    }
    },
    methods : {       
      startParallax : function(leader, el, i){
        var app = this;        
        TweenMax.set(el, {y : 0});
        var pos = el._gsTransform;         
        TweenMax.to(el, 10, {
          y: 0,          
          repeat: -1,
          modifiers: {
            y: function () {
              return (pos.y + (leader.y - pos.y) * 0.4);
            }            
          }
        });
        return pos;
      },
    closest : function(el, selector){
        var matchesFn;
        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })
        var parent;
        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }
        return null;
      },
    scrollListTouch : function(e){
      
    },
    projectHover : function(e, name, slide){
      const app = this;
      if(app.touch || app.transitionPage)return;      
      if(e.type == 'mouseenter'){
        
          TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorHoverColor});
          TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.cursorHoverColor});
        
        if(app.scrollListPermit && !app.closest(e.target, 'li.hover')){
          hoverEffect.hover(e);
          document.querySelectorAll('.projects__list li').forEach(function(el, index) {
            if(el.className == 'hover'){
              //TweenMax.to(el.querySelectorAll('.tech b'), 0.3, {x : '-102%', ease: Power3.easeInOut});
              TweenMax.to(el.querySelectorAll('span'), 0.3, {x : 0, color : '#ffffff', opacity : 0.1, ease: Power3.easeInOut});
              TweenMax.to(el.querySelectorAll('span .sign .plus'), 0.3, {x: '0%', ease: Power3.easeInOut});
              TweenMax.to(el.querySelectorAll('span .sign .minus'), 0.3, {x: '0%', ease: Power3.easeInOut});            
              el.classList.remove('hover');
            }
          });          
          app.closest(e.target, 'li').classList.add('hover');
          //TweenMax.to(e.target.parentNode.parentNode.querySelectorAll('.tech b'), 0.3, {x : '0%', ease: Power3.easeInOut});
          TweenMax.to(app.closest(e.target, 'li.hover').querySelectorAll('.left span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut});
          TweenMax.to(app.closest(e.target, 'li.hover').querySelectorAll('.right span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#1d1d1d', opacity : 1, ease: Power3.easeInOut});
          TweenMax.to(app.closest(e.target, 'li.hover').querySelectorAll('.sign .plus'), 0.3, {x: '-100%', ease: Power3.easeInOut});
          TweenMax.to(app.closest(e.target, 'li.hover').querySelectorAll('.sign .minus'), 0.3, {x: '-100%', ease: Power3.easeInOut});
        }        
      }else{        
        TweenMax.to('.cursor-ring', 0.2, {scale : 1});
        TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorColor});
        TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.cursorColor});          
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
        value: 'projects'
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
        value: true
      });
      TweenMax.set('.main-bg', {backgroundColor : '#191919', height : '100%', width : 0, x : 0});
      TweenMax.set('.projects__details', {x : '100%'});
      TweenMax.to('.preloader span', 1.3, {y : 50});            
      TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
      TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
      TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 13, delay : 0.4});
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#fff', ease: Power3.easeIn, onComplete : function(){
        app.$store.commit('set', {
          name: 'pager',
          value: '04'
        });
        new TimelineMax().to('#logo .gaps', 0.3, {opacity: 0})
        .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo2'}, 'uno')
        .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno')
        .set('header .logo', {width: 50}, 'uno');        
          TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
            TweenMax.to(document.querySelectorAll('.cursor-ring__arrow'), 0.7, {opacity: 1});
            TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s'}});          
            TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.$store.state.cursorColor});
            TweenMax.to('.cursor-ring', 0.2, {scale : 1});
          }});
        TweenMax.set('#app', {backgroundColor : '#191919'});
        TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});
        TweenMax.set(document.querySelectorAll('.dda span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
        TweenMax.to('.preloader', 0.7, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power3.easeOut, onComplete : function(){
          new TimelineMax({repeat: -1})
          .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
          .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
          .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});          
          
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
          }});
        }});
        TweenMax.set(document.querySelectorAll('.projects__list h2 span'), {x:'100vw', opacity: 0.1});
        TweenMax.set('.projects__list', {visibility : "visible"});
        TweenMax.set('.projects__details_slide-dots', {height: '0%'});
        TweenMax.set('.projects__details_slide-dots i', {x: '100%'});
        new TimelineMax().staggerTo(document.querySelectorAll('.projects__list .left span'), 1.4, {x : 0, ease: Power3.easeInOut, force3D: true}, 0.1, 'list')
        .staggerTo(document.querySelectorAll('.projects__list .right span'), 1.4, {x : 0, ease: Power3.easeInOut, force3D: true}, 0.1, 'list');        
        TweenMax.to('.projects__details', 1.4, {x : '0%', ease: Power3.easeInOut, delay: 0.6, onComplete: function(){
          TweenMax.set('.projects__details_photo canvas', {opacity:1});
          document.querySelector('.projects__list li:first-child').classList.add('hover');            
          //TweenMax.to(document.querySelectorAll('.projects__list li:first-child .tech b'), 0.6, {x : '0%', ease: Power3.easeInOut});
          TweenMax.to(document.querySelector('.projects__list li:first-child .left span .sign .plus'), 0.4, {x: '-100%', ease: Power3.easeInOut, force3D: true});
          TweenMax.to(document.querySelector('.projects__list li:first-child .left span .sign .minus'), 0.4, {x: '-100%', ease: Power3.easeInOut, force3D: true});
          TweenMax.to(document.querySelector('.projects__list li:first-child .left span'), 0.6, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut, force3D: true});
          TweenMax.to(document.querySelector('.projects__list li:first-child .right span'), 0.6, {x : window.innerWidth / 100 * 6.2, color : '#1d1d1d', opacity : 1, ease: Power3.easeInOut, force3D: true, onComplete: function(){
            app.$store.commit('set', {
              name : 'transitionPage',
              value : false
            });
            app.$store.commit('projects', {
              name: 'scrollListPermit',
              value: true
            });
          }});          
          TweenMax.to('.projects__details_slide-dots', 0.7, {height: '22%', onComplete: function(){
            TweenMax.to('.projects__details_slide-dots i', 0.7, {x: '0%', ease: Power4.easeIn});
          }});            
          hoverEffect.start();
          done();
        }});          
      }});      
    },
    leave : function(el, done){
      const app = this;
      app.$store.commit('set', {
        name: 'menu',
        value: false
      });
      function closest(el, selector){
        var matchesFn;
        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })
        var parent;
        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }
        return null;
      };
      app.$store.commit('set', {
        'name': 'transitionPage',
        value: true
      });
      app.$store.commit('projects', {
        name: 'scrollListPermit',
        value: false
      });      
      hoverEffect.end();
      TweenMax.to('.cursor-ring', 0.2, {scale : 1});
      TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.$store.state.cursorColor});
      TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.$store.state.cursorColor});
      if(app.$route.path.indexOf('projects') > -1){
        TweenMax.to(el.querySelectorAll('.tech b'), 0.3, {x : '-102%', ease: Power3.easeInOut});
        TweenMax.to(el.querySelectorAll('span'), 0.3, {x : 0, color : '#ffffff', opacity : 0.1, ease: Power3.easeInOut});
        new TimelineMax()
        .staggerTo(document.querySelectorAll('.projects__list .left span'), 1.4, {x : function(index, el){
          if(closest(el, '.hover')){
            return '100vw';
          }else{
            return '-100vw';
          }          
        }, ease: Power3.easeInOut}, 0.1, 'uno')
        .staggerTo(document.querySelectorAll('.projects__list .right span'), 1.4, {x: function(index, el){
          if(closest(el, '.hover')){
            return '100vw';
          }else{
            return '-100vw';
          }
        }, ease: Power3.easeInOut}, 0.1, 'uno')
        .to('.projects__details', 1.4, {x : '100%', ease: Power3.easeInOut}, 'uno')
      }else{
        TweenMax.to(el.querySelectorAll('.tech b'), 0.3, {x : '-102%', ease: Power3.easeInOut});
        TweenMax.to(el.querySelectorAll('span'), 0.3, {x : 0, color : '#ffffff', opacity : 0.1, ease: Power3.easeInOut});
        new TimelineMax()
        .staggerTo(document.querySelectorAll('.projects__list .left span'), 1.4, {x : '-100vw', ease: Power3.easeInOut}, 0.1, 'uno')
        .staggerTo(document.querySelectorAll('.projects__list .right span'), 1.4, {x : '-100vw', ease: Power3.easeInOut}, 0.1, 'uno')        
        .to('.projects__details', 1.4, {x : '100%', ease: Power3.easeInOut}, 'uno')
      }

      TweenMax.killTweensOf('.preloader');
      new TimelineMax({delay: 0.7})
      .set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s', 'letter-spacing': (app.$store.state.mobile == 'mobile' ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}}, 'dos')
      .to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
        TweenMax.to(document.querySelectorAll('.cursor-ring__arrow'), 0.4, {opacity: 0});
        TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
        hoverEffect.clear();
        done();
      }}, 'dos')
      //.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 0}, 'dos+0.4');
      
      //done();
    }
  }
}
</script>

<style>
#app-projects {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.projects__scene {
  padding: 0;  
  height: 100vh;
  transform: translate3d(0, 0, 0);
}
.projects__list {
  list-style: none;
  margin: 120px 0 0 0;
  padding-bottom: 6vw;
  padding-left: 0;
  padding-right: 0;
  visibility: hidden;
}
.projects__list li {
  display: flex;    
  position: relative;
  height: 21.3vw;
  margin-top: -13vw;
  pointer-events: none;
}
.projects__list li:first-child {
  margin-top: 0;
}
.projects__list li[data-name="contacts"] {
  visibility: hidden;
}
.projects__list li .left {
  width: 50%;
  overflow: hidden;  
  color: #fff;
}
.projects__list li .left a {
  color: #fff;
}
.projects__list li .right {
  width: 50%;
  overflow: hidden;  
  color: #fff;
}
.projects__list li .right a {
  color: #fff;
}
.projects__list li h2 {
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
}
.projects__list li h2 span {
  display: inline-block;
}
.projects__list li h2 i {
  display: inline-block;
  font-style: normal;
}
.projects__list li .left h2 {  
  transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
}
.projects__list li .right h2 {
  margin-left: -100%;
  transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
}
.projects__list li h2 span .name {
  display: inline-block;
}
.projects__list li h2 .tech {
  position: absolute;
  height: 100%;
  left: 70px;
  top: 4px;
  font-size: 3vw;
  line-height: 2.65vw;
  letter-spacing: -1px;
  overflow: hidden;
}
.projects__list li h2 .tech b {
  display: block;  
  transform: translateX(-102%);
}

.projects__list li h2 .sign {
  overflow: hidden;
  display: inline-block;
  position: relative;
  line-height: 8vw;      
  vertical-align: top;    
}
.projects__list li h2 .sign .minus {
  position: absolute;
  top: 0;
  left: 100%;
}
.projects__list li h2 .sign i {
  display: inline-block;
  font-style: normal;
}

.projects__list_next-preview {
  background: #fff;
  width: 70vw;
  height: 33.2vw;
  position: absolute;
  display: none;
  right: -70vw;
  top: 152px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 59vw 100%;  

}
.projects__details {  
  position: fixed;
  right: 0;
  top: 180px;
  bottom: 180px;  
  /* height: 62vh; */
  display: flex;

}
.projects__details_photo {  
  width: calc((100vh - 360px) * 1.7783251231527093);
  height: calc(100vh - 180px - 180px);
  position: relative;
  overflow: hidden;  
}
.projects__details_photo img {
  display: none;
  height: calc(100vh - 180px - 180px);
}
.projects__details_photo img:first-child {
  display: inline-block;
  visibility: hidden;
}
.projects__details_photo canvas {
  opacity: 0;
  width: 100%!important;
  height: 100%!important;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.projects__details_photo-img {
  width: 100%;    
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top ;
}
.projects__details_photo-img.current {
  z-index: 2!important;
}
.projects__details_right {
  width: 140px;    
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.projects__details_slide-dots {
  width: 1px;
  height: 22%;
  background-color: #eaeaea;  
  overflow: hidden;  
  position: relative;
}
.projects__details_slide-dots i {
  display: block;
  background-color: #191919;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 39%;
}
.projects__details_content {
  width: 74vw;
  position: fixed;
  right: 11vw;
  height: 0;
  background-color: #fff;
  overflow: hidden;  
  top: calc(1vw * 33.2 + 152px + 200px + 55px);  
}
.projects__details_content-block {
  font-size: 18px;
  line-height: 30px;
  padding: 120px 140px 120px 15vw;
  visibility: hidden;
}
.projects__details_content-block h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;  
}
.case-study {
  width: 56px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(270deg);
  position: fixed;
  left: 59px;
  top: 141px;
  letter-spacing: -0.2px;
  z-index: 5;    
}
.case-study > div {
  overflow: hidden;
  width: 200px;  
}
.case-study > div > span {
  display: block;
  opacity: 0;  
  transition-property: letter-spacing;
  transition-duration: 0.9s;
}
.case-next {
  width: 56px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(270deg);
  position: fixed;
  left: 59px;
  top: 0;
  letter-spacing: -0.2px;
  z-index: 5;    
}
.case-next > div {
  overflow: hidden;
  width: 200px;  
}
.case-next > div > span {
  display: block;
  opacity: 0;  
  transition-property: letter-spacing;
  transition-duration: 0.9s;
}
.projects__details__close {
  width: 42px;
  height: 42px;  
  position: fixed;
  top: 210px;
  right: 5.5vw;
  cursor: pointer;
  transform: translateX(50%);
  z-index: 1;
  visibility: hidden;
}
.projects__details__close i {
  display: block;
  height: 1px;
  width: 42px;
  background-color: #000;
  position: absolute;
  left: 0px;
  top: 50%;
  opacity: 0;
}
.projects__details_client {
  position: fixed;
  top: calc(152px + 33.2vw);
  left: 5vw;
  z-index: 1;
  transform: translateY(-100%);
  visibility: hidden;
}
.projects__details_client h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
}
.projects__details_client-text {
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: #000;
  text-transform: uppercase;  
}
.projects__details_client-text span {
  display: inline-block;
  opacity: 0;
}
.projects__details_output {
  position: fixed;
  top: calc(152px + 33.2vw + 45px);
  left: 5vw;
  z-index: 1;
  visibility: hidden;
}
.projects__details_output h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
}
.projects__details_output-text {
  font-size: 1;
  line-height: 1;
  font-weight: 400;
  color: #000;    
}
.projects__details_output-text span {
  display: inline-block;
  opacity: 0;
}
.projects__details_fields {
  position: fixed;
  top: calc(152px + 33.2vw + 45px);
  left: 30vw;
  z-index: 1;
  visibility: hidden;
}
.projects__details_fields h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
}
.projects__details_fields-text {
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: #000;    
}
.projects__details_fields-text span {
  display: inline-block;
  opacity: 0;
}
.projects__details_link {
  position: fixed;    
  top: calc(152px + 33.2vw + 49px);
  right: 11vw;
  z-index: 1;
  margin-top: 10px;
  visibility: hidden;  
}
.projects__details_link a {
  font-size: 18px;
  line-height: 30px;
  color: #000;
  display: inline-block;
  overflow: hidden;
}
.projects__details_link a span {
  display: inline-block;
  opacity: 0;
}
.projects__details_link-border {
  display: block;
  height: 1px;
  width: 100%;
  background-color: #90f8eb;
  position: absolute;
  left: 0;  
  bottom: 0;
}
.projects__list_wrapper {
  width: 100vw;
  margin: 0 -1.7vw 0 -1.7vw;
}
#app-projects .scroll-content {
    overflow: hidden;
    width: 100%;
  }
.touch .projects__list_wrapper {
  margin-top: 220px;
  height: 10.7vw;
  overflow: visible!important;  
}
.touch .projects__list {
  margin: 0;
  overflow: hidden;
}

.touch .projects__list_wrapper .scrollbar-track  {
  display: none!important;
}
@media screen and (max-width: 900px) {
  #app-projects .projects__list_wrapper {
    position: fixed;
    top: calc(50% - 15vw);
    height: 24vw;
    overflow: visible!important;
    width: 100vw;
    margin: 0 -1.7vw;
  }  
  #app-projects .projects__list_wrapper .scrollbar-track {
    display: none!important;
  }
  #app-projects .projects__list {    
    margin: 0;
  }
  #app-projects .projects__list li {
    height: 24.8vw;    
  }
  #app-projects .projects__list li[data-name="reaktivate"],
  #app-projects .projects__list li:last-child {
    height: 35.4vw;
  }
  #app-projects .projects__list li h2 {
    font-size: 15vw;
    line-height: 11vw;
    padding: 0;
  }
  #app-projects .projects__details {    
    right: 0;
    top: 50%;
    bottom: auto;    
    display: flex;
    transform: translateY(-50%)!important;
  }
  #app-projects .projects__details_photo {
    width: calc(100vw - 140px);
    height: calc((100vw - 140px) / 1.77903683);
  }
  #app-projects .projects__details_right {
    display: none;
  }
  #app-projects .projects__details_photo img {
    height: auto;
    width: 100%;
  }
}
@media screen and (max-width: 480px) {
  #app-projects .projects__details {
    display: block;    
    right: 0;
    top: 140px;
    bottom: 140px;
    transform: translateY(0)!important;
    width: calc(100% - 90px);
    overflow: hidden;
  }
  #app-projects .projects__details_photo {
    width: calc((100vh - 140px - 140px) * 1.7);
    height: 100%;
    transform: translateX(-25%);
  }
}
</style>

