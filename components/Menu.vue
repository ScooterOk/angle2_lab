<template>
  <div id="app-menu">
    <div class="menu__bg">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <ul class="menu__list hover-link">
        <li v-for="(item, index) in list" :key="index" :class="item.class">
          <div class="left">
            <h2>
              <router-link :to="item.url">
                <span v-html="item.name"></span>
              </router-link>              
            </h2>          
          </div>
          <div class="right">
            <h2>
              <router-link :to="item.url">
                <span v-html="item.name"></span>
              </router-link>              
            </h2>          
          </div>
        </li>
      </ul> 
  </div>
</template>
<script>
export default {  
  data : function(){
    return {
      list : [
        {
          name: 'Home',
          class: 'home',
          url: '/'
        },
        {
          name: 'The team',
          class: 'about',
          url: '/about'
        },
        {
          name: 'Services',
          class: 'services',
          url: '/services'
        },
        {
          name: 'Projects',
          class: 'projects',
          url: '/projects'
        },
        {
          name: 'Contact<br>us',
          class: 'contacts',
          url: '/contacts'          
        }
      ]
    }
  },
  computed: {
    menu: function(){
      return this.$store.state.menu;
    }, 
    page: function() {
      return this.$store.state.page;
    },
    mobile: function() {
      return this.$store.state.mobile;
    }
  },
  mounted : function(){
    const app = this;    
    
  },
  methods: {
  },
  watch: {
    menu: function(menu){
      const app = this;
      if(menu){
        let tl1 = new TimelineMax()
        .set('#app-menu .menu__bg .left', {x: '-100%'})
        .set('#app-menu .menu__bg .right', {x: '100%'})
        .set(document.querySelectorAll('#app-menu .menu__list span'), {x: '104vw'})
        .set('#app-menu', {display: 'block'})
        .to('.main', 0.4, {opacity: 0})
        .to(document.querySelectorAll('#app-menu .menu__bg .left, #app-menu .menu__bg .right'), 0.7, {x: '0%', ease: Power3.easeIn}, 'list')
        .staggerTo(document.querySelectorAll('#app-menu .menu__list .left span'), 0.9, {x : '0', ease: Power3.easeInOut}, 0.1, 'list+=0.4')
        .staggerTo(document.querySelectorAll('#app-menu .menu__list .right span'), 0.9, {x : '0', ease: Power3.easeInOut}, 0.1, 'list+=0.4')
        .to(document.querySelectorAll('nav .menu .start-menu, nav .menu .close-menu'), 0.7, {y: '100%', ease: Power4.easeInOut}, 'list+=0.7');        
        if(app.mobile == 'mobile' && app.page != 'contacts'){
          tl1.addCallback(function(){
            TweenMax.set('.follow-us', {display: 'block'})
            TweenMax.set('.follow-us_title span', {y: 35});
            TweenMax.set(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], {y: 35});
          }, 'list+=0.7')
        }
        tl1.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
          TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);
        }}, 'list+=0.7');
      }else{
        let tl2 = new TimelineMax().staggerTo(document.querySelectorAll('#app-menu .menu__list .left span'), 0.7, {x : '-104vw', ease: Power3.easeInOut}, 0.1, 'list')
        .staggerTo(document.querySelectorAll('#app-menu .menu__list .right span'), 0.7, {x : '-104vw', ease: Power3.easeInOut}, 0.1, 'list')
        .to(document.querySelectorAll('#app-menu .menu__bg .left'), 0.4, {x: '-100%', ease: Power3.easeIn}, 'list+=0.5')
        .to(document.querySelectorAll('#app-menu .menu__bg .right'), 0.4, {x: '100%', ease: Power3.easeIn}, 'list+=0.5')
        .to(document.querySelectorAll('nav .menu .start-menu, nav .menu .close-menu'), 0.7, {y: '0%', ease: Power4.easeInOut}, 'list+=0.4')
        .to('.main', 0.4, {opacity: 1})
        .set('#app-menu', {display: 'none'});
        if(app.page == '4peak' || app.page == 'reactivate' || app.page == 'floston' || app.page == 'sparky' || app.page == 'cavio' || (app.mobile == 'mobile' && app.page != 'contacts')){
          tl2.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 20}, 0.07, 'list+=0.4')
        .to('.follow-us_title span', 0.4, {y : 10}, 'list+=0.4')
        .set(document.querySelectorAll('.follow-us, .follow-us_title span, .follow-us li.be, .follow-us li.dr, .follow-us li.fb, .follow-us li.ig'), {clearProps: 'display, transform'});        
        }
      }
    }
  }  
}
</script>


<style scoped lang="scss">
#app-menu {  
  width: 100%;
  height: 100%; 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  display: none;
  .menu__bg {
    position: fixed;    
    top: 0;
    right: 0;    
    bottom: 0;
    left: 0;
    .left {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #fff;
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background-color: #fff;
    }
  }
  .menu__list {
    list-style: none;
    margin: 160px -1.7vw 0 -1.7vw;
    padding-bottom: 6vw;
    padding-left: 0;
    padding-right: 0;    
    li {
      display: flex;    
      position: relative;
      height: 25.5vw;
      margin-top: -13vw;
      pointer-events: none;
      &:first-child {
        margin-top: 0;
      }
      &.contacts {
        height: 35vw;
      }      
      .left {
        width: 50%;
        overflow: hidden;
        h2 {
          transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
          a {
            color: #191919;
          }
        }
      }
      .right {
        width: 50%;
        overflow: hidden;
        h2 {
          margin-left: -100%;
          transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
          a {
            color: #2af8eb;
          }
        }
      }
      h2 {
        font-size: 15vw;
        margin: 0;
        padding: 0;
        line-height: 11vw;
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
