<template>
  <div id="app-about">
    <!-- <h1 style="color: red; position: fixed;">{{pointer.y}}</h1> -->
    <!-- ============ DDA =============== -->
    <div class="wld">
      <div>
        <span>we love</span>
      </div>
      <div>
        <span>what</span>
      </div>
      <div>
        <span>we do</span>
      </div>
    </div>

    <!-- ============ SCROLL BAR =============== -->
    <div class="about__bar">          
      <i></i>          
    </div>

    <!-- ============ TITLE =============== -->
    <ul class="about__title" v-if="mobile">
      <li>
        <div class="left">            
          <h2>
            <span>A small</span>                
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>A small</span>
          </h2>
        </div>            
      </li> 
      <li>
        <div class="left">            
          <h2>
            <span>team with</span>                
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>team with</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>
            <span>a deep</span>
          </h2>
        </div>
        <div class="right">
          <h2>
            <span>a deep</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">
          <h2>
            <span>focus</span>
          </h2>
        </div>
        <div class="right">
          <h2>
            <span>focus</span>
          </h2>
        </div>
      </li>
      
    </ul>
    <ul class="about__title" v-else>
      <li>
        <div class="left">            
          <h2>
            <span>A small team</span>                
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>A small team</span>
          </h2>
        </div>            
      </li> 
      <li>
        <div class="left">            
          <h2>
            <span>with a deep</span>
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>with a deep</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">            
          <h2>
            <span>focus</span>                
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>focus</span>
          </h2>
        </div>
      </li>
    </ul>
    


    <!-- ============ TEAM LIST =============== -->
    <section class="about__team_list" @touchstart="touchevent" @touchmove="touchevent" @touchend.stop="touchevent">
      <ul>
        <li class="left">
          <div class="side--wrapper">
            <section class="item" v-for="(item, index) in leftList" :key="index" :data-img="item.index" @mouseenter="itemHover" @mouseleave="itemHover">
              <div class="item--pfoto" :style="'background-image: url('+item.preview+')'"></div>
              <img :src="item.preview" alt="">
            </section>
          </div>
        </li>
        <li class="right">
          <div class="side--wrapper">
            <section class="item" v-for="(item, index) in rightList" :key="index" :data-img="item.index" @mouseenter="itemHover"  @mouseleave="itemHover">
              <div class="item--pfoto" :style="'background-image: url('+item.preview+')'"></div>
              <img :src="item.preview" alt="">
            </section>
          </div>
        </li>
      </ul>
    </section>

    <!-- ============ START TEXT =============== -->
    <aside class="about__start_text" v-if="mobile == 'mobile'">
      We’re a small Ukraine-based design agency. We create complex interfaces and tell interactive stories through unique and engaging web experiences.       
    </aside>
    <aside class="about__start_text" v-else>
      We’re a small Ukraine-based design agency. We create complex interfaces and tell interactive stories through unique and engaging web experiences. 
      <br/><br/>
      We’re great collaborators and expert communicators, and we pride ourselves on how well we work with others.       
    </aside>

    <!-- ============ TEAM PROFILE =============== -->
    <article class="about__profile">      
      <div class="photo" data-displacement="/img/displacement/pattern3.png" data-intensity="-0.65" data-speedIn="1" data-speedOut="1" data-startImage="/img/displacement/start.png">                
        <img v-for="(item, index) in randomList" :key="index" :src="item.photo" alt="">
        <div class="skill">
          <span>{{skill}}</span>
        </div>
        <div class="name">
          <span>{{name}}</span>
        </div>
      </div>
    </article>

  </div>    
</template>

<script>
import * as hoverEffect from '~/assets/js/photosMorph';
export default {
  mounted: function(){
    const app = this;
    app.$root.aboutTextAnim = null;
    let split = new SplitText(".about__start_text", {type:'words'});
    setTimeout(function(){
      let leader = app.pointer;
      let list = document.querySelectorAll('.about__team_list li');        
      list.forEach( function(el, i) {
        leader = app.startParallax(leader, el, i);
      });
      app.scrollbar = Scrollbar.init(document.querySelector(".about__team_list"), {});
      app.scrollbar.addListener((status) => {
        app.scrollbarTop = status.offset.y;
      });
    }, 500);    
    // const el = document.querySelector('.about__profile .photo');      
    // const imgs = Array.from(el.querySelectorAll('img'));
    // setTimeout(function(){
    //   hoverEffect.init({
    //     parent: el,
    //     startImage: el.dataset.startimage,
    //     intensity: el.dataset.intensity || undefined,
    //     speedIn: el.dataset.speedin || undefined,
    //     speedOut: el.dataset.speedout || undefined,
    //     easing: el.dataset.easing || undefined,
    //     hover: el.dataset.hover || undefined,
    //     images: imgs,          
    //     displacementImage: el.dataset.displacement
    //   });
    // }, 200);
  },
  data () {
    return {
      scrollbarTop: 0,
      pointer : {
        y : 0
      },
      mouseX: 0,
      mouseY: 0,
      name: '',
      skill: '',      
      teamList: [
        {
          name: 'Alex',
          skill: 'UI design lead',
          preview: '/img/about/alex_preview.jpg',
          photo: '/img/about/alex.jpg'          
        },
        {
          name: 'Dmitry',
          skill: 'Lead front-end developer',
          preview: '/img/about/dmitriy_preview.jpg',
          photo: '/img/about/dmitriy.jpg'
        },
        {
          name: 'Jane',
          skill: 'UX designer',
          preview: '/img/about/jane_preview.jpg',
          photo: '/img/about/jane.jpg'          
        },
        {
          name: 'Kristina',
          skill: 'Project manager',
          preview: '/img/about/kristina_preview.jpg',
          photo: '/img/about/kristina.jpg'
        },
        {
          name: 'Yuriy',
          skill: 'CBDO',
          preview: '/img/about/lazey_preview.jpg',
          photo: '/img/about/lazey.jpg'
        },
        {
          name: 'Lusy',
          skill: 'UI/UX designer',
          preview: '/img/about/lusy_preview.jpg',
          photo: '/img/about/lusy.jpg'
        },
        {
          name: 'Nina',
          skill: 'Art Director',
          preview: '/img/about/nina_preview.jpg',
          photo: '/img/about/nina.jpg'
        },
        {
          name: 'Roman',
          skill: 'Front-end developer',
          preview: '/img/about/roman_preview.jpg',
          photo: '/img/about/roman.jpg'
        },
        {
          name: 'Sergey',
          skill: 'Interactive Art Director',
          preview: '/img/about/sergey_preview.jpg',
          photo: '/img/about/sergey.jpg'
        },
        {
          name: 'Tetiana',
          skill: 'QA lead',
          preview: '/img/about/tanya_preview.jpg',
          photo: '/img/about/tanya.jpg'
        }        
        // {
        //   name: 'Viktor',
        //   skill: 'PMO/CFO',
        //   preview: '/img/about/viktor_preview.jpg',
        //   photo: '/img/about/viktor.jpg'
        // }
      ]
    }
  },
  computed: {
    mousemove: function(){
      return this.$store.state.mousemove;
    },
    deviceorientation: function(){
      return this.$store.state.deviceorientation;
    },
    cursorLongAnimate: function(){
      return this.$store.state.cursorLongAnimate;
    },
    mobile: function(){
      return this.$store.state.mobile;
    },
    touch: function(){
      return this.$store.state.touch;
    },
    enterDone: function(){
      return this.$store.state.about.enterDone;
    },
    titleAnimate: function(){
      return this.$store.state.about.titleAnimate;
    },    
    cursorLongAnimate: function(){
      return this.$store.state.cursorLongAnimate;
    },
    cursorLongAnimatePermit: function(){
      return this.$store.state.cursorLongAnimatePermit;
    },
    resize: function(){
      return this.$store.state.resize;
    },
    randomList: function(){
      var arr = this.teamList;
      var n = this.teamList.length;
      var tempArr = [];
      for ( var i = 0; i < n-1; i++ ) {
        // The following line removes one random element from arr
        // and pushes it onto tempArr
        tempArr.push(this.teamList.splice(Math.floor(Math.random()*this.teamList.length),1)[0]);        
      }
      // Push the remaining item onto tempArr
      tempArr.push(this.teamList[0]);
      for(var i in tempArr){
        tempArr[i].index = Number(i);
      }      
      return tempArr;
    },
    leftList: function(){
      const app = this;
      let left = [];
      for(var i in app.randomList){
        if(i % 2 == 0){
          left.push(app.randomList[i]);
        }
      }
      return left;
    },
    rightList: function(){
      const app = this;
      let right = [];
      for(var i in app.randomList){
        if(Math.abs(i % 2) == 1){
          right.push(app.randomList[i]);
        }
      }
      return right;
    }
  },  
  watch : {
    mousemove: function(e){      
      const app = this;
      app.mouseX = e.x;
      app.mouseY = e.y;
    },
    mouseX: function(val){
      const app = this;
      if(app.cursorLongAnimate || !app.titleAnimate)return;
      let rootX = -((window.innerWidth / 2) - val);
      TweenMax.to(document.querySelectorAll('#app-about .about__title span'), 1, {x: function(i, el){
        let moveX = 100 / ((window.innerWidth / 2) / rootX);
        let x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);        
        return x;
      }, force3D: true});
    },
    mouseY: function(y){
      const app = this;      
      if((y - 140) > 0 && y < (window.innerHeight - 70)){
        var sh = document.querySelector('.about__team_list').clientHeight;
        var lh = document.querySelector('.about__team_list .side--wrapper').clientHeight + (document.querySelector('.about__team_list .item').clientHeight/2);
        if(lh > sh){
          y -= 140;          
          var cp = 100 / (sh / y);          
          var diff = (lh - sh);
          var yDiff = -(diff / 100) * cp;            
          app.pointer.y = yDiff; 
          let step = (document.querySelector('.about__bar').clientHeight - document.querySelector('.about__bar i').clientHeight);
          let bar = (step/100)*cp;
          TweenMax.to('.about__bar i', 0.4, {y: bar});        
        }
      }
    },
    scrollbarTop: function(y){
      const app = this;      
      let cp = 100 / (app.scrollbar.limit.y / y);
      let step = (document.querySelector('.about__bar').clientHeight - document.querySelector('.about__bar i').clientHeight);      
      let bar = (step/100)*cp;
      TweenMax.to('.about__bar i', 0.4, {y: bar});
    },
    deviceorientation: function(e){
      const app = this;
      if(app.cursorLongAnimate || !app.titleAnimate || e > 45 || e < -45)return;
      TweenMax.to(document.querySelectorAll('#app-about .about__title span'), 1, {x: function(i, el){
        var moveX = 100 / (45 / e);
        var x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);
        return x;
      }, force3D: true});
    },
    resize: function(e){
      if(this.enterDone)hoverEffect.resize();      
    },
    cursorLongAnimate: function(val){
      const app = this;
      if(val){
        app.$store.commit('about', {
          name : 'enterDone',
          value : false
        });
        app.$store.commit('about', {
          name : 'titleAnimate',
          value : false
        });
        TweenMax.killChildTweensOf(document.querySelectorAll('.about__start_text'));
        TweenMax.to(document.querySelectorAll('.about__title li:nth-child(odd) span'), 2.1, {x : '-102vw', ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.about__title li:nth-child(even) span'), 2.1, {x: '102vw', ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.about__team_list .item--pfoto'), 2.1, {height: '0%', ease: Power4.easeInOut})
        app.$root.aboutTextAnim = TweenMax.staggerTo(document.querySelectorAll('.about__start_text div'), 2.1, {opacity:0, rotationX:80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.03);
        TweenMax.to('.about__bar', 2.1, {height: '0px'});
        TweenMax.to('.about__bar i', 0.3, {opacity: 0});
      }else{        
        TweenMax.killChildTweensOf(document.querySelectorAll('.about__start_text'));
        app.$store.commit('about', {
            name : 'enterDone',
            value : true
          });
          app.$store.commit('about', {
          name : 'titleAnimate',
          value : true
        });
        TweenMax.to(document.querySelectorAll('.about__title span'), 1.4, {x : '0vw', ease: Power3.easeInOut});
        TweenMax.to(document.querySelectorAll('.about__team_list .item--pfoto'), 0.7, {height: '100%', ease: Power4.easeInOut})
        TweenMax.staggerTo([].slice.call(document.querySelectorAll('.about__start_text div'), 0).reverse(), 0.7, {opacity:1, rotationX:0, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.02);
        TweenMax.to('.about__bar', 0.7, {height: '90px', onComplete: function(){
          TweenMax.to('.about__bar i', 0.7, {opacity: 1});
        }});
      }
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
    startParallax : function(leader, el, i){
      var app = this;        
      TweenMax.set(el, {y : 0});
      var pos = el._gsTransform;         
      TweenMax.to(el, 10, {
        y: 0,          
        repeat: -1,
        modifiers: {
          y: function () {
            if(app.touch)return false;
            //if(app.direction == 'down')return false;
            return (pos.y + (leader.y - pos.y) * 0.18);
          }            
        }
      });
      return pos;
    },
    itemHover: function(e){
      const app = this;      
      if(!app.enterDone || app.touch)return;
      if(e.type == 'mouseenter'){ 
          app.$store.commit('set', {
            name: 'cursorLongAnimatePermit',
            value: false
          });
          let i = Number(e.currentTarget.getAttribute('data-img'));      
          let skill = app.randomList[i].skill;
          let name = app.randomList[i].name;
          app.skill = skill;
          app.name = name;          
          new TimelineMax().set('.about__profile .photo', {zIndex:7})
          .set(document.querySelectorAll('.about__profile .skill span, .about__profile .name span'), {y:'100%'})
          .to(document.querySelectorAll('.about__profile .skill span, .about__profile .name span'), 0.25, {y:'0%', ease: Power4.easeOut});
          hoverEffect.hover(e);
      }else{
        new TimelineMax().to(document.querySelectorAll('.about__profile .skill span, .about__profile .name span'), 0.25, {y:'-100%', ease: Power4.easeIn, onComplete: function(){
          app.skill = '';
          app.name = '';
          TweenMax.set('.about__profile .photo', {clearProps: 'all'});
        }});
        hoverEffect.end();
        app.$store.commit('set', {
          name: 'cursorLongAnimatePermit',
          value: true
        });
      }
    },
    touchevent: function(e){
      const app = this;      
      if(!app.enterDone)return;
      if(e.type == 'touchstart'){ 
          app.$store.commit('set', {
            name: 'cursorLongAnimatePermit',
            value: false
          });
          if(!e.target.parentNode.getAttribute('data-img'))return;
          let i = Number(e.target.parentNode.getAttribute('data-img'));          
          let skill = app.randomList[i].skill;
          let name = app.randomList[i].name;
          app.skill = skill;
          app.name = name;
          
          new TimelineMax().set('.about__profile .photo', {zIndex:5})
          .set(document.querySelectorAll('.about__profile .skill span, .about__profile .name span'), {y:'100%'})
          .to('.about__start_text', 0.25, {opacity: 0, ease: Power4.easeOut}, 'start')
          .to(document.querySelectorAll('.about__profile .skill span, .about__profile .name span'), 0.25, {y:'0%', ease: Power4.easeOut}, 'start');
          hoverEffect.hover(e);
      }else if(e.type == 'touchend'){        
        new TimelineMax().to('.about__start_text', 0.25, {opacity: 1, ease: Power4.easeIn}, 'end')
        .to(document.querySelectorAll('.about__profile .skill span, .about__profile .name span'), 0.25, {y:'-100%', ease: Power4.easeIn, onComplete: function(){
          app.skill = '';
          app.name = '';
          TweenMax.set('.about__profile .photo', {clearProps: 'all'});
        }}, 'end');
        hoverEffect.end();
        app.$store.commit('set', {
          name: 'cursorLongAnimatePermit',
          value: true
        });
      }else if(e.type == 'touchmove'){
        
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
        value: 'about'
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
        name: 'scroll',
        value: true
      });      
      app.$store.commit('set', {
        name: 'cursorLongAnimatePermit',
        value: true
      });
      app.$store.commit('about', {
        name : 'titleAnimate',
        value : false
      });
      app.$store.commit('about', {
        name : 'enterDone',
        value : false
      });      
      TweenMax.set(document.querySelectorAll('.about__title li:nth-child(odd) span'), {x: '-100vw'});
      TweenMax.set(document.querySelectorAll('.about__title li:nth-child(even) span'), {x: '100vw'});
      TweenMax.set(document.querySelectorAll('.about__team_list .item--pfoto'), {height: '0%'});
      //TweenMax.set(document.querySelectorAll('.about__profile'), {visibility: 'hidden'});
      TweenMax.set(document.querySelectorAll('.about__start_text'), {visibility: 'hidden'});      
      TweenMax.set(document.querySelectorAll('#app-about .wld span'), {y : -13});
      TweenMax.set('.about__bar', {height: '0%'});
      TweenMax.set('.about__bar i', {x: '100%'});
      //TweenMax.set(document.querySelectorAll('#app-about .wld span'), {css : {'letter-spacing': '20px', 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}})
      
      

      TweenMax.to(document.querySelectorAll('.go-tonext span, .dda span'), 0.4, {y : 13, delay : 0.4});
      TweenMax.to(document.querySelectorAll('#app-about .wld span'), 0.4, {y : 0, delay : 0.4, onComplete: function(){
        TweenMax.set(document.querySelectorAll('#app-about .wld span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
      }});
      TweenMax.set('.main-bg', {backgroundColor : '#191919', height : '100%', width : 0, x : 0});      
      TweenMax.to('.preloader span', 1.3, {y : 50});            
      TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
      TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
      TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 13, delay : 0.4});      
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#fff', ease: Power3.easeIn, onComplete : function(){
        app.$store.commit('set', {
          name: 'pager',
          value: '02'
        });
        new TimelineMax().to('#logo .gaps', 0.3, {opacity: 0})
        .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo2'}, 'uno')
        .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno')
        .set('header .logo', {width: 50}, 'uno');
        
        TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
          TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s'}});
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.$store.state.cursorColor});
          TweenMax.to('.cursor-ring', 0.2, {scale : 1});
          TweenMax.to(document.querySelectorAll('.cursor-ring__arrow'), 0.7, {opacity: 1});
        }});
        TweenMax.set('#app', {backgroundColor : '#191919'});
        TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});        
        TweenMax.to('.preloader', 0.7, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power3.easeOut, onComplete : function(){
          new TimelineMax({repeat: -1})
          .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
          .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
          .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});
        }});
        
        app.$store.commit('about', {
          name : 'titleAnimate',
          value : true
        });
        new TimelineMax().to(document.querySelectorAll('.about__title li:nth-child(odd) span'), 1.5, {x: '0vw', ease: Power4.easeOut}, 'title')
        .to(document.querySelectorAll('.about__title li:nth-child(even) span'), 1.5, {x: '0vw', ease: Power4.easeOut}, 'title')
        .to(document.querySelectorAll('.about__team_list .item--pfoto'), 0.7, {height: '100%', ease: Power4.easeInOut}, 'title+=1')
        .set(document.querySelectorAll('.about__start_text'), {visibility: 'visible'})      
        .staggerFrom(document.querySelectorAll('.about__start_text div'), 0.7, {opacity:0, rotationX:-80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.02)
        .addCallback(function(){
          setTimeout(function(){
            const el = document.querySelector('.about__profile .photo');      
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
            app.$store.commit('about', {
              name: 'enterDone',
              value: true
            });
            app.$store.commit('set', {
              name : 'transitionPage',
              value : false
            });          
          }, 200);          
          TweenMax.to('.g-pager div', 0.4, {x : '0%', onComplete: function(){
            TweenMax.to('.g-pager i', 1, { width: '60px', ease: Power4.easeInOut});
          }});
          TweenMax.to('.about__bar', 0.7, {height: '90px', onComplete: function(){
            TweenMax.to('.about__bar i', 0.7, {x: '0%', ease: Power4.easeIn});
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
        }, '-=0.5')
      }});
      
      
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
      app.$store.commit('about', {
        name : 'titleAnimate',
        value : false
      });
      app.$store.commit('about', {
        name : 'enterDone',
        value : false
      });
      if(app.$store.state.cursorLongAnimate){
        TweenMax.to(document.querySelectorAll('.dda span'), 0.4, {y : 0})
        TweenMax.to(document.querySelectorAll('#app-about .wld span'), 0.4, {y : -13, onComplete: function(){
          app.$store.commit('set', {
            name: 'cursorLongAnimate',
            value: false
          });
          done();
        }});
      }else{
        hoverEffect.end();
        TweenMax.killChildTweensOf(document.querySelectorAll('.about__start_text'));
        TweenMax.staggerTo(document.querySelectorAll('.about__start_text div'), 0.4, {opacity:0, rotationX:80, force3D:true, transformOrigin:"top center -50", ease: Power4.easeOut}, 0.01);
        TweenMax.to(document.querySelectorAll('.about__team_list .item--pfoto'), 0.7, {height: '0%', ease: Power4.easeInOut});        
        TweenMax.killTweensOf('.preloader');
        
        TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});        
        TweenMax.to('.about__bar', 0.7, {height: '0px'});
        TweenMax.to('.about__bar i', 0.7, {opacity: 0});
        new TimelineMax()
        //.to('.preloader', 0.5, {bottom: 0, y: -70, height: 90})
        .to(document.querySelectorAll('.about__title li:nth-child(odd) span'), 1.5, {x: '-100vw', ease: Power4.easeInOut}, 'title')
        .to(document.querySelectorAll('.about__title li:nth-child(even) span'), 1.5, {x: '100vw', ease: Power4.easeInOut}, 'title')
        .to('.about__profile .name span', 0.25, {y:'100%', ease: Power4.easeInOut}, 'title')
        .to('.about__profile .skill span', 0.25, {y:'100%', ease: Power4.easeInOut}, 'title')
        .set(document.querySelectorAll('#app-about .wld span, .dda span'), {css : {'transition-duration' : '0.9s', 'letter-spacing': (app.$store.state.mobile == 'mobile' ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}}, 'title+=0.4')
        .to(document.querySelectorAll('.dda span'), 0.4, {y : 0}, 'title+=1')
        .to(document.querySelectorAll('#app-about .wld span'), 0.4, {y : -13}, 'title+=1')        
        .to('.preloader', 0.7, {y : 0, height : '100%', bottom: 0, ease: Power3.easeIn, onComplete : function(){
          TweenMax.to(document.querySelectorAll('.cursor-ring__arrow'), 0.4, {opacity: 0});
          hoverEffect.clear();
          TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
          done();
        }}, 'title+=0.4')
      }            
    }
  }
}
</script>

<style lang="scss">
#app-about {    
  width: 100%;
  height: 100%;
  .wld {
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
    z-index: 0;      
    color: #fff;
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
  .about__bar {
    width: 1px;
    height: 90px;
    background-color: #343434;
    position: fixed;
    left: 70px;
    top: 50%;
    transform: translate(-1px, -50%);
    overflow: hidden;
    i {
      display: block;
      width: 1px;
      height: 20px;
      background-color: #fff;      
    }
  }
  .about__title {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 13vw 0 0 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
          opacity: 0.1;
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
  .about__team_list {    
    margin: 140px 0 0 140px;    
    width: calc(50vw - 140px - 140px);
    height: calc(100% - 140px - 70px);  
    overflow: visible!important;  
    @media screen and (max-width: 900px) {
      width: calc(50vw - 70px);  
      margin: 140px 0 0 0px;
    }
    @media screen and (max-width: 480px) {
      width: 25vw;
      margin: 80px 0 0 0px;
    }
    .scrollbar-track {
      display: none!important;
    }
    ul {
      list-style: none;  
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      @media screen and (max-width: 480px) {
        flex-wrap: nowrap;
        flex-direction: column;
      }
      li {
        @media screen and (max-width: 480px) {
          width: 100%!important;
        }
      }
    }
    .left {
      width: calc(50% - 10px);
    }
    .right {
      width: calc(50% - 10px);
      @media screen and (max-width: 480px) {
        margin-top: 5.5vw;
      }
      .item {
        transform: translateY(50%);
        @media screen and (max-width: 480px) {
          transform: translateY(0);
        }
      }
    }
    .item {
      width: 100%;
      position: relative;        
      margin-bottom: 5.5vw;
      &:last-child {
        margin-bottom: 0;
      }
      &:nth-child(odd) {

      }
      img {
        width: 100%;
        visibility: hidden;
      }
      .item--pfoto {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;          
      }
    }
  }
  .about__start_text {
    width: calc(50% - 140px - 140px);
    position: fixed;
    top: 50%;
    right: 140px;
    transform: translateY(-50%);
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
    @media screen and (max-width: 900px){
      width: calc(50% - 140px);      
      right: 70px;
    }
    @media screen and (max-width: 480px){
      width: calc(50% - 50px);
      right: 20px;
    }
  }
  .about__profile {
    width: 50%;
    height: 100%;
    position: absolute;    
    top: 0;
    right: 0;
    .skill {
      position: absolute;
      left: -65px;
      bottom: 0px;
      font-size: 10px;
      line-height: 1;
      text-transform: uppercase;
      color: #fff;
      transform: rotate(-90deg);
      transform-origin: left bottom;
      overflow: hidden;      
      // @media screen and (max-width: 900px){
      //   left: -30px;
      // }
      @media screen and (max-width: 900px){
        left: 30px;
        bottom: 20px;
        z-index: 1;
        color: #191919;
      }
      span {
        display: inline-block;
      }
    }
    .photo {
      position: absolute;
      left: 140px;
      right: 140px;
      bottom: 70px;
      @media screen and (max-width: 900px){
        left: 70px;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);        
      }
      @media screen and (max-width: 480px){
        left: 0;
      }
      img {
        width: 100%;
        display: none;
        &:first-child {
          visibility: hidden;
          display: block;
        }
      }
      canvas {
        display: block;
        width: 100%!important;
        height: 100%!important;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .name {
      position: absolute;
      left: 40px;
      bottom: 40px;
      font-size: 18px;
      line-height: 1.4;
      color: #191919;
      z-index: 6;
      overflow: hidden;
      @media screen and (max-width: 900px) {
        left: 0;
        bottom: -36px;
        color: #fff;
      }
      span {
        display: inline-block;
      }
    }
  }
}
</style>
