<template>
  <div class="preloader noselect">
    <div>
      <span>{{preloaderPercent}}%</span>
      <b></b>
    </div>    
  </div>
</template>

<script>
export default {  
  data : function(){
    return {
      preloaderNumber : 0,
      batchAll: 0,
      batchDone: 0,
      waiting: false,
      transition: false,
      change: true,
      batchList: [
        {
          src: './img/projects/4peak.jpg',
          type: 'img'
        },
        {
          src: './img/projects/reaktivate.jpg',
          type: 'img'
        },
        {
          src: './img/projects/floston.jpg',
          type: 'img'
        },
        {
          src: './img/projects/augmania.jpg',
          type: 'img'
        },
        {
          src: './img/projects/sparky.jpg',
          type: 'img'
        },
        {
          src: './img/projects/cavio.jpg',
          type: 'img'
        },


        {
          src: './img/projects/4peak/preview.jpg',
          type: 'img'
        },
        {
          src: './img/projects/reactivate/preview.jpg',
          type: 'img'
        },
        {
          src: './img/projects/floston/preview.jpg',
          type: 'img'
        },
        {
          src: './img/projects/sparky/preview.jpg',
          type: 'img'
        },
        {
          src: './img/projects/cavio/preview.jpg',
          type: 'img'
        },




        {
          src: './img/displacement/pattern2.png',
          type: 'img'
        },
        {
          src: './img/displacement/pattern3.png',
          type: 'img'
        },
        {
          src: './img/displacement/pattern4.png',
          type: 'img'
        },
        {
          src: './img/displacement/start.png',
          type: 'img'
        },        
        {
          src: './img/about/bg_team.jpg',
          type: 'img'
        },
        {
          src: './img/about/alex_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/alex.jpg',
          type: 'img'
        },
        {
          src: './img/about/dmitriy_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/dmitriy.jpg',
          type: 'img'
        },
        {
          src: './img/about/jane_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/jane.jpg',
          type: 'img'
        },
        {
          src: './img/about/kristina_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/kristina.jpg',
          type: 'img'
        },
        {
          src: './img/about/lazey_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/lazey.jpg',
          type: 'img'
        },
        {
          src: './img/about/nina_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/nina.jpg',
          type: 'img'
        },
        {
          src: './img/about/roman_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/roman.jpg',
          type: 'img'
        },
        {
          src: './img/about/sergey_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/sergey.jpg',
          type: 'img'
        },
        {
          src: './img/about/tanya_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/tanya.jpg',
          type: 'img'
        },
        {
          src: './img/about/viktor_preview.jpg',
          type: 'img'
        },
        {
          src: './img/about/viktor.jpg',
          type: 'img'
        }        
      ]
    }
  },
  computed: {
    preloaderPercent: function() {
        return this.preloaderNumber.toFixed(0);
    },
    mobile: function(){
      return this.$store.state.mobile;
    }
  },
  mounted : function(){
    const app = this;
    let done = 0;
    //app.init();
    let startScripts = ['./js/TweenMax.min.js', './js/MorphSVGPlugin.min.js', './js/SplitText.min.js', './js/ModifiersPlugin.min.js', './js/three.min.js', './js/smooth-scrollbar.js']
    
    let font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Montserrat:300,400,800,900&display=swap';
    document.head.appendChild(font);

    for(var i in startScripts){
      var script = document.createElement('script');
      script.src = startScripts[i];
      document.head.appendChild(script);
      script.onload = function() { 
        done++;
        if(startScripts.length == done)app.init();        
      }
    }    
    return;


    
    // {src: '/js/TweenMax.min.js' },
    // {src: '/js/MorphSVGPlugin.min.js'},
    // {src: '/js/SplitText.min.js'},
    // {src: '/js/ModifiersPlugin.min.js'},
    // {src: '/js/three.min.js'},
    // {src: '/js/smooth-scrollbar.js'} 
        
  },
  methods: {
    init: function(){
      const app = this;      
      app.$root.longClickAnimation = new TimelineMax();
      app.$store.commit('set', {
        name : 'tweenReady',
        value : true
      });
      TweenMax.set('.cursor-ring', {x : (window.innerWidth / 2) - 25, y : (window.innerHeight / 2) -30});
      TweenMax.set([document.querySelectorAll('.dda'), document.querySelectorAll('.go-tonext')], {visibility : 'visible'});
      TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {y : 12});
      TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'letter-spacing': app.mobile ? '10px' : '20px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
      TweenMax.set(['.logo', document.querySelectorAll('nav div'), 'header .lng', 'header .menu span', document.querySelectorAll('.follow-us li')], { y: 35});
      TweenMax.set('.follow-us_title span', { y: 10});
      TweenMax.set('.g-pager div', { x: '-100%'});
      TweenMax.set('.g-pager i', { width: '0'});
      TweenMax.set(['header', '.g-pager', '.follow-us'], {opacity : 1});    
      TweenMax.set(document.querySelectorAll('.start-a-project .icon, .start-a-project .button span'), {y: '100%'});
      
      
      TweenMax.to(app.$data, 1.5, { preloaderNumber : 50, ease: Power3.easeInOut});
      
      TweenMax.to('.preloader', 1.5, { height: '50%', ease: Power3.easeInOut, onComplete : function(){
        app.loadResources();
        MorphSVGPlugin.convertToPath(document.querySelectorAll('.icon polygon, .icon rect, #logo polygon'));
        TweenMax.to('.cursor-ring circle', 1.2, {css : {'stroke-dashoffset':'0'}, ease: Power3.easeInOut, onComplete : function(){        
          app.$store.commit('set', {
            name : 'moveCursor',
            value : true
          });
          
            if(app.batchDone < app.batchAll){
            app.waiting = true;
            }else{            
              TweenMax.to(app.$data, 1.5, { preloaderNumber : 100, ease: Power3.easeInOut});
              new TimelineMax({delay: 0.4}).set('.start-a-project', {visibility: 'visible'})
              .to('.start-a-project .icon', 0.9, {y: '0%'})
              .to(document.querySelectorAll('.start-a-project .button .start'), 1.3, {y: '0%', ease: Power3.easeOut}, '+=0.2');
              TweenMax.to([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], 2, {y : 0, ease: Power4.easeInOut});
              TweenMax.to('.preloader', 1.5, { height: '100%', ease: Power3.easeInOut, onComplete : function(){
                app.$store.commit('set', {
                  name : 'appStart',
                  value : true
                });          
              }});
            }
          
        }});
      }}); 
    },
    loadResources: function(){
      let app = this;      
      app.batchAll = app.batchList.length;
      for(let i in app.batchList){
        if(app.batchList[i].type == 'img'){
          let img = new Image();
          img.onload = function () {
            app.batchDone++;
          }
          img.src = app.batchList[i].src;
        }else if(app.batchList[i].type == 'script'){
          var script = document.createElement('script');
          script.src = app.batchList[i].src;
          document.head.appendChild(script);
          script.onload = function() {            
            app.batchDone++;
          }
        }        
      }      
    },
    next: function(){
      const app = this;      
      let status = ((50/app.batchAll)*app.batchDone)+50;
      TweenMax.to(app.$data, 1.5, { preloaderNumber : status, ease: Power4.easeInOut});
        TweenMax.to('.preloader', 1.5, { height: status+'%', ease: Power4.easeInOut, onComplete : function(){
          if((app.batchAll-app.batchDone) == 0){
            if(app.preloaderPercent == '100'){
              TweenMax.to(document.querySelectorAll('.start-a-project .button .start'), 1.3, {y: '0%', ease: Power3.easeOut}, '+=0.2');
              app.$store.commit('set', {
                name : 'appStart',
                value : true
              });
            }else{
              status = ((50/app.batchAll)*app.batchDone)+50;              
              TweenMax.to(app.$data, 1.5, { preloaderNumber : status, ease: Power4.easeInOut});
              TweenMax.to('.preloader', 1.5, { height: status+'%', ease: Power4.easeInOut, onComplete : function(){
                TweenMax.to(document.querySelectorAll('.start-a-project .button .start'), 1.3, {y: '0%', ease: Power3.easeOut}, '+=0.2');
                app.$store.commit('set', {
                  name : 'appStart',
                  value : true
                });
              }});
            }            
            return;
          }
          app.transition = false;
      }});
    }
  },
  watch: {
    batchDone: function(done){
      const app = this;      
      if((app.batchAll-app.batchDone) == 1){
        TweenMax.to([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], 1, {y : 0, ease: Power1.easeOut});
        new TimelineMax({delay: 0.4}).set('.start-a-project', {visibility: 'visible'})
        .to('.start-a-project .icon', 0.9, {y: '0%'});        
      }
      if(app.transition){
        app.change = true;
        return;
      }
      if(app.waiting){
        let status = ((50/app.batchAll)*done)+50;
        app.change = false;
        app.transition = true;
        TweenMax.to(app.$data, 2, { preloaderNumber : status, ease: Power4.easeInOut});
        TweenMax.to('.preloader', 2, { height: status+'%', ease: Power4.easeInOut,  onComplete : function(){
            if((app.batchAll-done) == 0){
              TweenMax.to(document.querySelectorAll('.start-a-project .button .start'), 1.3, {y: '0%', ease: Power3.easeOut}, '+=0.2');
              app.$store.commit('set', {
                name : 'appStart',
                value : true
              });
              return;
            }            
            if(app.change){
              app.next();
            }else{
              app.transition = false;
            }
        }});          
      }      
    }
  }
}
</script>


<style>
#loader {
  visibility: hidden;
}
</style>
