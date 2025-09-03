<template>
  <div id="app" :class="[page, {menu: menu}, {touch: touch}]" @mousemove="mousemove" @mousedown="longClick" @mouseup="longClick" @mousewheel="mousewheel" @touchstart="touchevent" @touchmove="touchevent" @touchend="touchevent">    
    <!-- <h1>Alpha: {{alpha}}</h1>
    <h1>Beta: {{beta}}</h1>
    <h1>Gamma: {{gamma}}</h1>
    <h1>Orientation: {{orientation}}</h1> -->

    <!--========== Custom cursor =============== -->
    <svg class="cursor-ring" width="50" height="66">
      <circle
        class="progress-ring__circle"
        stroke="white"
        stroke-width="1"
        fill="transparent"
        r="24"
        cx="25"
        cy="33"
      ></circle>
      <g>
        <path class="cursor-ring__arrow" d="M24.5,0h1l2,5h-5L24.5,0z"/>
      </g>
      <g>
        <path class="cursor-ring__arrow" d="M25.5,66h-1l-2-5h5L25.5,66z"/>
      </g>
    </svg>

    <!--========== Loader ===============-->
    <loader/>

    <!--========== Turn ===============-->
    <turn v-if="tweenReady"/>

    <!--========== Mobile menu ===============-->
    <mobileMenu/>

    <!--========== Start a project ===============-->
    <startProject/>

    <!-- ========== Header =============== -->
    <header class="noselect">
      <div class="logo hover-link" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
        <nuxt-link to="/">
          <svg
            version="1.1"
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="126px"
            height="21px"
            viewBox="0 0 126 21"
            style="enable-background:new 0 0 126 21;"
            xml:space="preserve"
          >
          
          <g>
            <g class="gaps">
              <path class="st2 st0" d="M41.4,0.4h6v20.2h-6l-9-10.8v10.8h-6.1V0.4h6.3l8.8,10.5V0.4z"/>
              <path class="st2 st0" d="M63.8,10.5h5.7v7.9c-1.1,0.8-2.5,1.4-4.2,1.9c-1.7,0.5-3.2,0.7-4.6,0.7c-2.1,0-4-0.5-5.6-1.4
                c-1.7-0.9-3-2.2-3.9-3.8s-1.4-3.4-1.4-5.4s0.5-3.8,1.5-5.4s2.3-2.8,4-3.7S58.9,0,61.1,0c1.6,0,3.1,0.3,4.7,0.9s2.9,1.3,4,2.3
                L66,7.7c-0.7-0.7-1.5-1.2-2.4-1.6S61.8,5.5,61,5.5s-1.6,0.2-2.3,0.6s-1.2,1-1.6,1.8c-0.4,0.7-0.6,1.6-0.6,2.5c0,1,0.2,1.8,0.6,2.6
                c0.4,0.8,0.9,1.3,1.6,1.8c0.7,0.4,1.5,0.6,2.3,0.6c0.7,0,1.6-0.2,2.6-0.7L63.8,10.5z"/>
              <path class="st2 st0" d="M72.1,0.4h6.7V15h8.4v5.6H72.1V0.4z"/>
              <path class="st2 st0" d="M89.4,0.4h17.1v5.1H96.1V8h9.4v5h-9.4v2.5h10.7v5.1H89.4V0.4z"/>
            </g>


            <polygon class="st2 st0 logo1" points="23.2,20.6 23.2,0.4 17.1,0.4 16.9,0.6 0,20.6 8.1,20.6 16.4,10.7 16.4,20.6 	"/>
            <polygon class="st1 st0 logo2" points="26.4,0.4 17.9,0.4 17.7,0.4 -0.3,21 6.7,21 8.4,21 26.4,21 26.4,15.2 13.4,15.2 	"/>

            <path class="st2 st0 number1" d="M121.4,15l2.7-3.2c1.2-1.4,1.8-2.8,1.8-4.6c0-2.2-1-3.7-1.9-4.6c-1.4-1.5-3.8-2.5-6.8-2.5
              c-2.8,0-5.5,1-7.1,2.7C109,4,108.3,5.9,108.2,8h7.1c0.1-0.5,0.2-1,0.4-1.3c0.2-0.2,0.6-0.6,1.3-0.6c0.5,0,0.9,0.1,1.2,0.4
              c0.3,0.3,0.5,0.7,0.5,1.1c0,1.1-0.6,2-1.2,2.8L109,20.6h17v-5.7L121.4,15L121.4,15z"/>
              <path class="st1 st0 number2" d="M41.8,15.2l2.9-3.3c1.3-1.5,1.9-2.9,1.9-4.7c0-2.2-1.1-3.7-2-4.7C43,1,40.5,0,37.3,0c-3,0-5.9,1-7.6,2.8
              c-1.1,1.2-2,3.1-2.1,5.3h7.6c0.1-0.5,0.2-1,0.5-1.3c0.2-0.2,0.6-0.7,1.4-0.7c0.5,0,0.9,0.1,1.3,0.4c0.4,0.3,0.5,0.7,0.5,1.1
              c0,1.1-0.6,2.1-1.3,2.8l-9,10.5h18.1v-5.8L41.8,15.2L41.8,15.2z"/>
          </g>
          </svg>
        </nuxt-link>
      </div>
      <nav class="hover-link">
        <div class="about" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <nuxt-link to="/about">The Team</nuxt-link>
        </div>
        <div class="services" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <nuxt-link to="/services">Services</nuxt-link>
        </div>
        <div class="projects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <nuxt-link to="/projects">Projects</nuxt-link>
        </div>
        <div class="contact" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <nuxt-link to="/contacts">Contact Us</nuxt-link>
        </div>
        <div class="menu" @click="menuSwitch">
          <span class="start-menu">Menu</span>
          <span class="close-menu">Close</span>
        </div>
      </nav>
      <!--div class="lng" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
              <a href="">Ukr</a>
      </div-->
      
    </header>

    <!-- ============ DDA =============== -->
    <div class="dda noselect">
      <div>
        <span>digital</span>
      </div>
      <div>
        <span>design</span>
      </div>
      <div>
        <span>agency</span>
      </div>
    </div>

    <!-- ============ Go To Next =============== -->
    <div class="go-tonext hover-link noselect">
      <div class="go-tonext__wrapper">
        <div>
          <span data-next @mouseenter="hoverLinks($event);hoverNext($event)" @mouseleave="hoverLinks($event);hoverNext($event)" @click="goToNext">go play</span>
        </div>
        <div>
          <span data-next @mouseenter="hoverLinks($event);hoverNext($event)" @mouseleave="hoverLinks($event);hoverNext($event)" @click="goToNext">outside</span>
        </div>
      </div>
    </div>

    <!-- ============ Pager =============== -->
    <div class="g-pager noselect">
      <div>
        <span>{{pager}}</span>
        <i></i>
        <b>05</b>
      </div>
    </div>

    <!-- ============ Follow Us =============== -->
    <div class="follow-us noselect">
      <div class="follow-us_title">
        <span>Follow Us</span>
      </div>
      <ul class="clearfix hover-link">
        <li class="be" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <a href="https://www.behance.net/Angle2" target="_blank">
            <svg
              version="1.1"
              id="behance-logo"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="22px"
              height="14px"
              viewBox="0 0 22 14"
              style="enable-background:new 0 0 22 14;"
              xml:space="preserve"
            >
              <path
                class="st0"
                d="M6.2,0.3c0.6,0,1.2,0.1,1.7,0.2s1,0.3,1.3,0.5c0.4,0.3,0.7,0.6,0.9,1s0.3,0.9,0.3,1.5c0,0.7-0.1,1.2-0.5,1.7C9.7,5.7,9.2,6,8.6,6.3c0.8,0.2,1.4,0.6,1.8,1.2C10.8,8.1,11,8.8,11,9.6c0,0.7-0.1,1.2-0.4,1.7c-0.3,0.5-0.6,0.9-1,1.2S8.7,13,8.1,13.2c-0.6,0.1-1.1,0.2-1.7,0.2H0V0.3H6.2z M5.8,5.6c0.5,0,0.9-0.1,1.3-0.4C7.5,5,7.6,4.6,7.6,4c0-0.3-0.1-0.6-0.2-0.8C7.3,3.1,7.2,2.9,7,2.8C6.8,2.7,6.6,2.6,6.4,2.6S5.9,2.5,5.7,2.5H2.9v3.1H5.8z M6,11.2c0.3,0,0.6,0,0.8-0.1C7.1,11,7.3,11,7.5,10.8c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.2-0.5,0.2-0.9C8.1,8.8,8,8.3,7.6,8S6.7,7.6,6.1,7.6H2.9v3.6H6z"
              ></path>
              <path
                class="st0"
                d="M15.7,11.2c0.4,0.4,1,0.6,1.7,0.6c0.5,0,1-0.1,1.4-0.4c0.4-0.3,0.6-0.6,0.7-0.8h2.3c-0.4,1.1-0.9,2-1.7,2.5c-0.8,0.5-1.7,0.7-2.8,0.7c-0.8,0-1.4-0.1-2-0.4c-0.6-0.2-1.1-0.6-1.5-1s-0.7-1-1-1.6c-0.2-0.6-0.3-1.3-0.3-2s0.1-1.4,0.4-2c0.2-0.6,0.6-1.2,1-1.6c0.4-0.5,0.9-0.8,1.5-1.1s1.3-0.4,2-0.4c0.8,0,1.5,0.2,2.1,0.5s1.1,0.7,1.5,1.3c0.4,0.5,0.7,1.1,0.8,1.8C22,7.9,22,8.6,22,9.3h-6.9C15.1,10.1,15.3,10.8,15.7,11.2z M18.8,6.2c-0.3-0.3-0.8-0.5-1.5-0.5c-0.4,0-0.8,0.1-1,0.2C16,6,15.7,6.2,15.6,6.4c-0.2,0.2-0.3,0.4-0.4,0.7c-0.1,0.2-0.1,0.4-0.1,0.6h4.3C19.3,7,19.1,6.5,18.8,6.2z"
              ></path>
              <rect x="14.6" y="1" class="st0" width="5.3" height="1.3"></rect>
            </svg>
          </a>
        </li>
        <!--li class="dr" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                    <a href="">
                        <svg version="1.1" id="dribbble" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                            <g>
                                <path class="st0" d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,1.4c1.5,0,2.9,0.5,4,1.4c-0.8,1-1.9,1.9-3.3,2.5
                                C8,4,7.3,2.8,6.4,1.6C6.9,1.5,7.4,1.4,8,1.4z M5,2.1c0.9,1.2,1.7,2.4,2.4,3.6C5.8,6.2,3.8,6.4,1.6,6.4C2,4.5,3.3,3,5,2.1z M1.4,8
                                V7.8C4,7.8,6.2,7.5,8,6.9c0.2,0.3,0.3,0.6,0.4,1c-2.2,0.7-4,2.1-5.5,4.3C2,11.1,1.4,9.6,1.4,8z M3.9,13.2c1.3-2.1,3-3.4,5.1-4
                                c0.6,1.6,1.1,3.3,1.4,5C8.1,15,5.7,14.6,3.9,13.2z M11.7,13.5c-0.3-1.6-0.7-3.1-1.3-4.6C11.6,8.7,13,8.8,14.5,9
                                C14.2,10.9,13.2,12.5,11.7,13.5z M9.9,7.6C9.7,7.2,9.5,6.8,9.3,6.5c1.5-0.7,2.8-1.6,3.7-2.7c0.9,1.1,1.5,2.4,1.5,3.9
                                C12.9,7.3,11.3,7.3,9.9,7.6z"/>
                            </g>
                        </svg>
                    </a>
        </li-->
        <li class="fb" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <a href="https://www.facebook.com/angle2agency/" target="_blank">
            <svg
              version="1.1"
              id="facebook"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="9px"
              height="16px"
              viewBox="0 0 9 16"
              style="enable-background:new 0 0 9 16;"
              xml:space="preserve"
            >
              <g>
                <path
                  id="f_1_"
                  class="st0"
                  d="M5.7,16V8.7h2.4l0.4-2.8H5.7V4c0-0.8,0.2-1.4,1.4-1.4h1.5V0.1C8.4,0.1,7.5,0,6.5,0
                                C4.3,0,2.8,1.3,2.8,3.8v2.1H0.3v2.8h2.5V16H5.7z"
                ></path>
              </g>
            </svg>
          </a>
        </li>
        <li class="ig" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
          <a href="https://www.instagram.com/angle2agency/" target="_blank">
            <svg
              version="1.1"
              id="instagram"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              style="enable-background:new 0 0 16 16;"
              xml:space="preserve"
            >
              <g>
                <defs>
                  <rect id="SVGID_1_" width="16" height="16"></rect>
                </defs>
                <clipPath id="SVGID_2_">
                  <use xlink:href="#SVGID_1_" style="overflow:visible;"></use>
                </clipPath>
                <path
                  class="st0"
                  d="M8,1.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                                c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2c0,2.1,0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9
                                c-0.3,0.3-0.5,0.5-0.9,0.6c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0c-2.1,0-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3
                                c-0.4-0.1-0.6-0.3-0.9-0.6c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2c0-2.1,0-2.4,0-3.2
                                c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9c0.3-0.3,0.5-0.5,0.9-0.6C3.6,1.7,4,1.5,4.8,1.5C5.6,1.4,5.9,1.4,8,1.4 M8,0
                                C5.8,0,5.6,0,4.7,0c-0.9,0-1.4,0.2-1.9,0.4c-0.5,0.2-1,0.5-1.4,0.9C0.9,1.8,0.6,2.2,0.4,2.8C0.2,3.3,0.1,3.9,0,4.7C0,5.6,0,5.8,0,8
                                c0,2.2,0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4
                                c0.9,0,1.1,0,3.3,0c2.2,0,2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4
                                c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3c0-2.2,0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9c-0.2-0.5-0.5-1-0.9-1.4
                                c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C10.4,0,10.2,0,8,0"
                ></path>
                <path
                  class="st0"
                  d="M8,3.9C5.7,3.9,3.9,5.7,3.9,8c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C12.1,5.7,10.3,3.9,8,3.9 M8,10.7
                                c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7C10.7,9.5,9.5,10.7,8,10.7"
                ></path>
                <path
                  class="st0"
                  d="M13.2,3.7c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1C12.8,2.8,13.2,3.2,13.2,3.7"
                ></path>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <!-- ============ Main Background =============== -->
    <div class="main-bg"></div>

    <nuxt class="main" v-if="appStart"/>
  </div>
</template>

<script>
//import TweenMax from "~/assets/js/gsap";
import loader from "~/components/Loader.vue";
import mobileMenu from "~/components/Menu.vue";
import startProject from "~/components/StartProjact.vue";
import turn from "~/components/Turn.vue";
export default {  
  mounted : function () {
    const app = this;
    console.log('Hello Bro');
    //app.$root.longClickAnimation = new TimelineMax();
    // app.$router.beforeEach(function (to, from, next) {
    //   app.$store.commit('set', {
    //     'name': 'previousPage',
    //     value: from.name
    //   });      
    //   next();
    // });    

    

    /* Gyroscope Start */
    // window.addEventListener('deviceorientation', function(e){
    //   app.alpha = e.alpha;
    //   app.beta = e.beta;
    //   app.gamma = e.gamma;
    //   let x;
    //   if(window.orientation == 0){
    //     if(e.beta < 90){
    //       x = e.gamma;
    //     }else{
    //       x = -e.gamma;
    //     }
    //   }else if(window.orientation == 90){
    //     if(e.gamma > -90 && e.gamma < 0){
    //       x = e.beta
    //     }else if(e.gamma > 0 && e.gamma < 90){
    //       if(e.beta > 0)x = 180 - e.beta;
    //       if(e.beta < 0)x = (180 + e.beta)*-1;
    //     }
    //   }else if(window.orientation == -90){
    //     if(e.gamma > 0 && e.gamma < 90){
    //       x = -e.beta;          
    //     }else if(e.gamma > -90 && e.gamma < 0){
    //       if(e.beta > 0)x = (180 - e.beta) * -1;
    //       if(e.beta < 0)x = 180 + e.beta;
    //     }
    //   }      
    //   app.$store.commit('set', {
    //     name: 'deviceorientation',
    //     value: x
    //   });      
    // });
    /* Gyroscope End */

    if(/Firefox/i.test(navigator.userAgent)){      
      window.addEventListener('DOMMouseScroll', function(e){
        app.mousewheel(e);
      });
    }

    /* Resize Start */
    window.addEventListener('resize', function(e){
      app.$store.commit('set', {
        name: 'resize',
        value: e.timeStamp
      });      
    });
    /* Resize End */
    window.addEventListener('orientationchange', function(e){
      app.orientation = window.orientation;      
    });

    app.orientation = window.orientation;
    
    
    if(window.innerWidth < 900 && window.innerWidth > 480){
      app.$store.commit('set', {
        name: 'mobile',
        value: 'tablet'
      });
    }else if(window.innerWidth < 480){
      app.$store.commit('set', {
        name: 'mobile',
        value: 'mobile'
      });
    }
  },
  data: function() {
    return {
      menuText: "Menu",
      touchMove: {
        x: {
          start: 0,
          move: 0,
          end: 0  
        },
        y: {
          start: 0,
          move: 0,
          end: 0  
        }
      },
      alpha : 0,
      beta : 0,
      gamma : 0,
      orientation: 0
    };
  },
  components: {
    loader,
    startProject,
    mobileMenu,
    turn
  },
  computed: {
    page: function() {
      return this.$store.state.page;
    },
    appStart: function() {
      return this.$store.state.appStart;
    },
    tweenReady: function() {
      return this.$store.state.tweenReady;
    },
    mobile: function() {
      return this.$store.state.mobile;
    },
    deviceorientation: function() {
      return this.$store.state.deviceorientation;
    },    
    pager: function() {
      return this.$store.state.pager;
    },
    scroll: function() {
      return this.$store.state.scroll;
    },
    moveCursor: function(){
      return this.$store.state.moveCursor;
    },
    resize: function(){
      return this.$store.state.resize;
    },
    touch: function(){
      return this.$store.state.touch;
    },
    menu: function(){
      return this.$store.state.menu;
    },
    cursorColor: function(){
      return this.$store.state.cursorColor;
    },
    cursorHoverColor: function(){
      return this.$store.state.cursorHoverColor;
    },
    transitionPage: function(){
      return this.$store.state.transitionPage;
    },
    cursorHoverActive: function(){
      return this.$store.state.cursorHoverActive;
    },
    cursorLongAnimatePermit: function(){
      return this.$store.state.cursorLongAnimatePermit;
    },
    cursorLongAnimate: function(){
      return this.$store.state.cursorLongAnimate;
    }    
  },
  watch: {
    appStart: function(done){
      //if(done)MorphSVGPlugin.convertToPath(document.querySelectorAll('.icon polygon, .icon rect, #logo polygon'));
    },
    resize: function(){
      const app = this;
      setTimeout(function(){
        if(window.innerWidth > 900 && app.mobile){
          app.$store.commit('set', {
            name: 'mobile',
            value: null
          });
        }
        if((window.innerWidth < 900 && window.innerWidth > 480) && app.mobile != 'tablet'){
          app.$store.commit('set', {
            name: 'mobile',
            value: 'tablet'
          });
        }
        if(window.innerWidth < 480 && app.mobile != 'mobile'){
          app.$store.commit('set', {
            name: 'mobile',
            value: 'mobile'
          });
        }
      }, 100);      
    }    
  },
  methods : {
    // deviceorientation(e) {
    //   if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    //     DeviceOrientationEvent.requestPermission()
    //       .then(permissionState => {
    //         if (permissionState === 'granted') {
    //           window.addEventListener('deviceorientation', (e) => {
    //             console.log('Deviceorientation!!');
    //           });
    //         }
    //       })
    //       .catch(console.error);
    //   } else {
    //     // handle regular non iOS 13+ devices
    //   }
    // },
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
    mousemove: function(e){
      const app = this;
      app.$store.commit('set', {
        name : 'mousemove',
        value : {
          x: e.pageX,
          y: e.pageY
        }
      });
      if(app.moveCursor && !app.touch){
        TweenMax.to('.cursor-ring', 0.5, {x : (e.clientX - 30), y : (e.clientY - 30)});      
      }
      
    },
    hoverLinks: function(e){
      const app = this;      
      if(app.touch)return false;
      if(app.appStart){
        if(e.type == 'mouseenter'){          
          app.$store.commit('set', {
            name: 'cursorHoverActive',
            value: true
          });
          app.$store.commit('set', {
            name: 'cursorLongAnimatePermit',
            value: false
          });
          TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorHoverColor});
          TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.cursorHoverColor});
        }else{
          app.$store.commit('set', {
            name: 'cursorHoverActive',
            value: false
          });
          app.$store.commit('set', {
            name: 'cursorLongAnimatePermit',
            value: true
          });
          TweenMax.to('.cursor-ring', 0.2, {scale : 1});
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorColor});
          TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.cursorColor});
        }
      }
    },
    hoverNext : function(e){
      var app = this;
      if(app.touch)return false;
      if(app.appStart && !app.transitionPage){            
        if(e.type == 'mouseenter'){
          TweenMax.to('.preloader', 0.3, {height : 0});
        }else{              
          TweenMax.to('.preloader', 0.3, {height : 90});
        }
      }          
    },
    goToNext: function(){
      const app = this;
      let next;
      if(app.$route.name == 'index')next = '/about';
      if(app.$route.name == 'about')next = '/services';
      if(app.$route.name == 'services')next = '/projects';
      if(app.$route.name == 'projects')next = '/contacts';      
      app.$router.push({path:next});
    },
    goToPrev: function(){
      const app = this;
      let prev;      
      if(app.$route.name == 'about')prev = '/';
      if(app.$route.name == 'services')prev = '/about';
      if(app.$route.name == 'projects')prev = '/services';
      if(app.$route.name == 'contacts')prev = '/projects';            
      app.$router.push({path:prev});
    },
    longClick : function(e){          
      var app = this;      
      if(app.appStart && !app.cursorHoverActive && !app.transitionPage && app.cursorLongAnimatePermit && !app.touch){
        if(e.type == 'mousedown'){
          if(app.page == 'services' || app.page == 'about'){
            TweenMax.killTweensOf('.preloader');            
            TweenMax.to('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
          }
          app.$store.commit('set', {
            name: 'cursorLongAnimate',
            value: true
          });
          app.$root.longClickAnimation = new TimelineMax();
          app.$root.longClickAnimation.to('.cursor-ring', 0.2, {scale : 1.5}, 'uno')
          .to('.progress-ring__circle', 0.2, {stroke : app.cursorHoverColor}, 'uno')
          .to('.cursor-ring__arrow', 0.2, {opacity : 0}, 'uno')
          .set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '3s','letter-spacing': '20px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}}, 'uno')
          .to('.preloader', 2.8, {y : 0, height : '100%', onComplete : function(){            
            // app.$store.commit('set', {
            //   name: 'cursorLongAnimateDone',
            //   value: true
            // });
            var next;
            if(app.$route.name == 'index')next = '/about';
            if(app.$route.name == 'about')next = '/services';
            if(app.$route.name == 'services')next = '/projects';
            if(app.$route.name == 'projects')next = '/contacts';
            app.$router.push({path:next});
          }}, 'uno')
          .to('.progress-ring__circle', 3, {strokeDashoffset : 150.796, onComplete : function(){
            TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '0.9s'}});
          }}, 'uno');          
        }else{          
          if(app.cursorLongAnimate){
            app.$store.commit('set', {
              name: 'cursorLongAnimate',
              value: false
            });
            app.$root.longClickAnimation.kill();
            app.$root.longClickAnimation = new TimelineMax();
            app.$root.longClickAnimation.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}}, 'uno')
            .to('.preloader', 0.6, {y : (app.mobile ? -50 : -70), height : '90px', ease: Power2.easeIn}, 'uno')
            .to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
              TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '0.9s'}});
              TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorColor});
              // TweenMax.to('.cursor-ring__arrow', 0.2, {opacity : function(){
              //   if(app.page == 'team'){
              //     return 1;
              //   }else{
              //     return 0;
              //   }
              // }});
              TweenMax.to('.cursor-ring', 0.2, {scale : 1});
              if(app.page == 'services' || app.page == 'about'){
                TweenMax.killTweensOf('.preloader');
                new TimelineMax({repeat: -1}).set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
                .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
                .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
                .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});
              }
            }}, 'uno');            
          }              
        }
      }          
    },
    mousewheel: function(e){
      const app = this;      
      let delta = e.deltaY ? e.deltaY : e.detail;      
      if(app.scroll && !app.transitionPage){
        if(delta > 0){
          app.goToNext();
        }else if(delta < 0){
          app.goToPrev();
        }
      }
    },
    menuSwitch: function(){
      const app = this;      
      if(app.menu){
        app.$store.commit('set', {
          name: 'menu',
          value: false
        });
      }else{
        app.$store.commit('set', {
          name: 'menu',
          value: true
        });
      }      
    },
    touchevent: function(e){
      const app = this;      
      if(!app.touch){
       app.$store.commit('set', {
          name: 'touch',
          value: true
        });
       TweenMax.to('.progress-ring__circle', 0.7, {strokeDashoffset : 150.796, onComplete: function(){
         TweenMax.set('.cursor-ring', {display: 'none'});
      }});
        TweenMax.to(document.querySelectorAll('.cursor-ring__arrow'), 0.7, {opacity: 0});
      }      

      if(e.target.classList.contains('hover-link') || app.closest(e.target, '.hover-link'))return;      
      if(app.appStart && !app.cursorHoverActive && !app.transitionPage){
        if(e.type == 'touchstart'){
          app.touchMove.x.start = e.changedTouches[0].pageX;
          app.touchMove.y.start = e.changedTouches[0].pageY;
          if(!app.cursorLongAnimatePermit)return;
          if(app.page == 'services' || app.page == 'about'){
            TweenMax.killTweensOf('.preloader');            
            TweenMax.to('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
          }
          app.$store.commit('set', {
            name: 'cursorLongAnimate',
            value: true
          });
          app.$root.longClickAnimation = new TimelineMax();
          app.$root.longClickAnimation.to('.cursor-ring', 0.2, {scale : 1.5}, 'uno')
          .to('.progress-ring__circle', 0.2, {stroke : app.cursorHoverColor}, 'uno')
          .set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '3s','letter-spacing': '20px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}}, 'uno')
          .to('.preloader', 2.8, {y : 0, height : '100%', onComplete : function(){            
            // app.$store.commit('set', {
            //   name: 'cursorLongAnimateDone',
            //   value: true
            // });
            TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '0.9s'}});
            var next;
            if(app.$route.name == 'index')next = '/about';
            if(app.$route.name == 'about')next = '/services';
            if(app.$route.name == 'services')next = '/projects';
            if(app.$route.name == 'projects')next = '/contacts';
            app.$router.push({path:next});
          }}, 'uno');          
        }else if(e.type == 'touchmove'){          
          let errorX = app.touchMove.x.start - e.changedTouches[0].pageX;
          let errorY = app.touchMove.y.start - e.changedTouches[0].pageY;
          let stop = errorX > 20 || errorX < -20 || errorY > 20 || errorY < -20;
          if(!app.cursorLongAnimatePermit)return;
          if(app.cursorLongAnimate && stop){
            app.$store.commit('set', {
              name: 'cursorLongAnimate',
              value: false
            });             
            app.$root.longClickAnimation.kill();
            app.$root.longClickAnimation = new TimelineMax();            
            app.$root.longClickAnimation.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}}, 'uno')
            .to('.preloader', 0.6, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power2.easeIn, onComplete: function(){
              TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '0.9s'}});              
              if(app.page == 'services' || app.page == 'about'){
                TweenMax.killTweensOf('.preloader');
                new TimelineMax({repeat: -1}).set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
                .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
                .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
                .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});
              }
            }}, 'uno');            
          }
        }else if(e.type == 'touchend'){
          app.touchMove.x.end = e.changedTouches[0].pageX;
          app.touchMove.y.end = e.changedTouches[0].pageY;
          if(app.scroll && !app.transitionPage){            
            if(app.touchMove.y.start - app.touchMove.y.end > 80){
              app.goToNext();
            }
            if(app.touchMove.y.start - app.touchMove.y.end < -80){
              app.goToPrev();
            }
          }  
          if(!app.cursorLongAnimatePermit)return;          
          if(app.cursorLongAnimate){
            app.$store.commit('set', {
              name: 'cursorLongAnimate',
              value: false
            });
            app.$root.longClickAnimation.kill();
            app.$root.longClickAnimation = new TimelineMax();
            app.$root.longClickAnimation.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}}, 'uno')
            .to('.preloader', 0.6, {height: (app.$store.state.mobile == 'mobile' ? 60 : 90), y : (app.$store.state.mobile == 'mobile' ? -30 : -70), ease: Power2.easeIn, onComplete: function(){              
              TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span'), document.querySelectorAll('.cww span'), document.querySelectorAll('.wld span')], {css : {'transition-duration' : '0.9s'}});
              TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorColor});
              TweenMax.to('.cursor-ring', 0.2, {scale : 1});
              if(app.page == 'services' || app.page == 'about'){
                TweenMax.killTweensOf('.preloader');
                new TimelineMax({repeat: -1}).set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -30 : -70, height: app.$store.state.mobile == 'mobile' ? 60 : 90})
                .to('.preloader', 1, {height: 0, ease: Power4.easeIn})
                .set('.preloader', {y: app.$store.state.mobile == 'mobile' ? -90 : -160})
                .to('.preloader', 1, {height: app.$store.state.mobile == 'mobile' ? 60 : 90, y: app.$store.state.mobile == 'mobile' ? -30 : -70, ease: Power4.easeIn});
              }
            }}, 'uno')            
          }                    
        }
      }
    }
  }
};
</script>


<style>
* {
  box-sizing: border-box; 
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
}
.noselect,
.noselect * {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;  
}
.prevent,
.prevent * {
  pointer-events: none;
}
a {
  text-decoration: none;
  z-index: 11;
  position: relative;
}
b {
  font-weight: 800;
}
.clearfix:before,
.clearfix:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}

.clearfix:after {
  clear: both;
}

.cursor-ring {
  z-index: 11;
  position: fixed;
  pointer-events: none;
}
.cursor-ring.touch {
  display: none;
}
.cursor-ring circle {
  stroke: #b6b6b6;
  stroke-dasharray: 150.796;
  stroke-dashoffset: 150.796;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
.cursor-ring__arrow {
  fill: #b6b6b6;
  opacity: 0;
}

.preloader {
  width: 1px;
  height: 0%;
  background-color: #191919;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
  z-index: 2;
}
.preloader div {
  overflow: hidden;
  position: absolute;
  top: 30px;
  right: -2px;
  transform: rotate(-90deg);
}
.preloader span {
  display: block;
  font-size: 12px;
}
.preloader b {
  font-weight: 900;
  visibility: hidden;
  line-height: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  color: #191919;
  width: 100%;
  height: 100%;
  position: fixed;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 140px 10px 70px;
  z-index: 6;
  opacity: 0;
  overflow: hidden;
}
header.menu {
  z-index: 10;
}
header .logo {
  margin-top: 60px;
  float: left;
  overflow: hidden;
}
header .logo #logo {
  width: 126px;
  height: 21px;
}
header .logo #logo .st0 {
  fill: #191919;
}
header .logo #logo .logo2, 
header .logo #logo .number2 {
  display: none;
}
header nav {
  margin-top: 66px;
  position: absolute;
  left: 50%;
  width: calc(50% - 140px);
  display: flex;
  justify-content: space-between;
}
header nav div {
  font-size: 18px;
  line-height: 1;
  font-weight: 300;
  letter-spacing: -0.5px;
}
header nav div.menu {
  position: relative;
  overflow: hidden;
}
header nav div.menu .close-menu {
  position: absolute;
  left: 0;
  top: -100%;
}
header nav div:first-child {
  margin-left: 0;
}
header .lng {
  position: absolute;
  margin-top: 66px;
  right: 70px;
}
header nav .menu {  
  display: none;  
}
header .menu span {
  display: inline-block;
}
header a {
  color: #191919;
  display: inline-block;
  position: relative;  
}
header nav a::after,
header .lng a::after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  background-color: #2af8eb;
  position: absolute;
  left: initial;
  right: 0;
  bottom: -5px;
  transition: width 350ms ease;
}
#app:not(.touch) header nav a:hover::after,
#app:not(.touch) header .lng a:hover::after {
  width: 100%;
  left: 0;
  right: initial;
}

/* .projects header nav a::after,
.projects header .lng a::after,
.about header nav a::after,
.about header .lng a::after, */
.services header nav a::after,
.services header .lng a::after
 {    
    background-color: #ffffff;    
}

.g-pager {
  font-size: 10px;
  line-height: 12px;
  overflow: hidden;
  transform: rotate(270deg);
  position: fixed;
  bottom: 57px;
  left: 70px;
  z-index: 5;
  opacity: 0;
  overflow: hidden;
  transform-origin: left top;
}
.g-pager > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 84px;
}
.g-pager span {
  margin-left: 2px;
}
.g-pager i {
  height: 1px;
  background-color: #191919;
  width: 60px;
  margin: 0 6px 1px -12px;
}
.g-pager b {
  
}
.dda {
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
  z-index: 4;
  visibility: hidden;
}
.dda > div {
  overflow: hidden;
  width: 200px;
}
.dda > div > span {
  display: block;
  transition-property: letter-spacing;
  transition-duration: 0.9s;
}
.go-tonext {
  width: 200px;
  font-size: 10px;
  line-height: 12px;
  position: fixed;
  bottom: 158px;
  left: 50%;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(270deg);
  margin-left: -117px;
  padding-bottom: 0px;
  z-index: 4;
  visibility: hidden;
}
.go-tonext__hover {
  height: 1px;
  width: 0;
  background-color: #191919;
  position: absolute;
  bottom: -5px;
  right: 110px;
}
.go-tonext__wrapper {
  width: 55px;
}
.go-tonext__wrapper > div {
  overflow: hidden;
  width: 200px;
}
.go-tonext__wrapper > div > span {
  display: inline-block;
  cursor: pointer;
  opacity: 1;
  transition-property: letter-spacing;
  transition-duration: 0.9s;
}
.follow-us {
  position: fixed;
  right: 70px;
  bottom: 70px;
  z-index: 6;
  opacity: 0;
  overflow: hidden;
}
.main-bg {
  position: fixed;
  width: 0;
  height: 0;
  z-index: 1;
  left: 50%;
  bottom: 0;

  overflow: hidden;
}
.follow-us_title {
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;
  text-align: right;
  overflow: hidden;
}
.follow-us_title span {
  display: block;
}
.follow-us ul {
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
}
.follow-us ul li {
  float: left;
  margin-left: 24px;
}
#behance-logo {
  width: 22px;
  height: 14px;
}
#dribbble {
  width: 16px;
  height: 16px;
}
#facebook {
  width: 9px;
  height: 16px;
}
#instagram {
  width: 16px;
  height: 16px;
}
#behance-logo .st0,
#dribbble .st0,
#facebook .st0,
#instagram .st0 {
  fill: #191919;
}

header a,
.dda,
.g-pager,
.go-tonext,
header .logo #logo .st0,
header .menu,
#behance-logo .st0,
#dribbble .st0,
#facebook .st0,
#instagram .st0,
.start-a-project .button span,
.start-a-project .button .icon path,
.follow-us_title {
  transition: color 1s ease, fill 1s ease;
}
#behance-logo:hover .st0,
#dribbble:hover .st0,
#facebook:hover .st0,
#instagram:hover .st0 {
  fill: #2af8eb !important;
  transition-duration: 350ms !important;
}
.projects #behance-logo:hover .st0,
.projects #dribbble:hover .st0,
.projects #facebook:hover .st0,
.projects #instagram:hover .st0 {
  fill: #fff !important;
  transition-duration: 350ms !important;
}
.about header a,
.projects header a,
.floston header a,
.reactivate header a,
.cavio header a,
.about .dda,
.projects .dda,
.floston .dda,
.reactivate .dda,
.cavio .dda,
.about .g-pager,
.projects .g-pager,
.floston .g-pager,
.reactivate .g-pager,
.cavio .g-pager,
.about .go-tonext,
.projects .go-tonext,
.floston .go-tonext,
.reactivate .go-tonext,
.cavio .go-tonext,
.about .menu,
.projects .menu,
.floston .menu,
.reactivate .menu,
.cavio .menu,
.about .start-a-project .button span,
.projects .start-a-project .button span,
.reactivate .start-a-project .button span,
.floston .start-a-project .button span,
.cavio .start-a-project .button span,
.about .follow-us_title,
.projects .follow-us_title,
.floston .follow-us_title,
.reactivate .follow-us_title,
.cavio .follow-us_title
 {
  color: #fff;
}
.menu.about header .menu,
.menu.about .start-a-project .button span,
.menu.about .follow-us_title,
.menu.projects header .menu,
.menu.projects .start-a-project .button span,
.menu.projects .follow-us_title,
.menu.reactivate header .menu,
.menu.reactivate .start-a-project .button span,
.menu.reactivate .follow-us_title,
.menu.floston header .menu,
.menu.floston .start-a-project .button span,
.menu.floston .follow-us_title,
.menu.cavio header .menu,
.menu.cavio .start-a-project .button span,
.menu.cavio .follow-us_title {
  color: #191919;
}
.menu.about .start-a-project .button .icon path,
.menu.about header .logo #logo .st0,
.menu.about #behance-logo .st0,
.menu.about #facebook .st0,
.menu.about #instagram .st0,
.menu.projects .start-a-project .button .icon path,
.menu.projects header .logo #logo .st0,
.menu.projects #behance-logo .st0,
.menu.projects #facebook .st0,
.menu.projects #instagram .st0,
.menu.reactivate .start-a-project .button .icon path,
.menu.reactivate header .logo #logo .st0,
.menu.reactivate #behance-logo .st0,
.menu.reactivate #facebook .st0,
.menu.reactivate #instagram .st0,
.menu.floston .start-a-project .button .icon path,
.menu.floston header .logo #logo .st0,
.menu.floston #behance-logo .st0,
.menu.floston #facebook .st0,
.menu.floston #instagram .st0,

.menu.cavio .start-a-project .button .icon path,
.menu.cavio header .logo #logo .st0,
.menu.cavio #behance-logo .st0,
.menu.cavio #facebook .st0,
.menu.cavio #instagram .st0 {
  fill: #191919;
}
.g-pager i {
  transition: background-color 1s ease;
}
.about .g-pager i,
.projects .g-pager i,
.floston .g-pager i,
.reactivate .g-pager i {
  background-color: #fff;
}
.about header .logo #logo .st0,
.projects header .logo #logo .st0,
.floston header .logo #logo .st0,
.reactivate header .logo #logo .st0,
.cavio header .logo #logo .st0,
.about #behance-logo .st0,
.projects #behance-logo .st0,
.floston #behance-logo .st0,
.reactivate #behance-logo .st0,
.cavio #behance-logo .st0,
.about #dribbble .st0,
.projects #dribbble .st0,
.floston #dribbble .st0,
.reactivate #dribbble .st0,
.cavio #dribbble .st0,
.about #facebook .st0,
.projects #facebook .st0,
.floston #facebook .st0,
.reactivate #facebook .st0,
.cavio #facebook .st0,
.about #instagram .st0,
.projects #instagram .st0,
.floston #instagram .st0,
.reactivate #instagram .st0,
.cavio #instagram .st0,
.about .start-a-project .button .icon path,
.projects .start-a-project .button .icon path,
.reactivate .start-a-project .button .icon path,
.floston .start-a-project .button .icon path,
.cavio .start-a-project .button .icon path {
  fill: #fff;
}

.mobile-coming {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #191919;
  display: none;
  text-align: center;
  flex-wrap: wrap;
  align-items: center;
}
.mobile-coming > div {
  width: 100%;
  text-align: center;
}
.mobile-coming h5 {
  width: 100%;
  color: #fff;
  margin: 5vw 0 0 0;
  padding: 0;
  text-align: center;
  font-size: 10vw;
  text-transform: uppercase;
  opacity: 0.7;
}
.mobile-coming img {
  width: 45vw;
  opacity: 0.7;
}

/*
@media screen and (max-width: 1024px) {
  .mobile-coming {
    display: flex;
  }
}
*/
@media screen and (max-width: 900px) {
  header nav div:not(.menu){
    display: none;
  }
  header {
    /* padding: 0 25px 10px 25px; */
  }
  header .logo {
    /* margin-top: 25px; */
  }
  header nav .menu {
    display: block;
  }
  .dda {
    /* left: 14px;
    top: 70px; */
  }
  .go-tonext {
    /* bottom: 138px; */
  }
}
@media screen and (max-width: 480px) {
  .g-pager,
  .follow-us {
    display: none;
  }  
  .contacts .follow-us,
  .start-project .follow-us {
    display: flex;
    bottom: 40px;
    right: 30px;
    align-items: center;
  }
  .contacts .follow-us ul,
  .start-project .follow-us ul {
    margin-top: 0;
  }
  .contacts .follow-us .follow-us_title,
  .start-project .follow-us .follow-us_title {
    margin-top: 3px;
  }
  header {
    padding: 0 30px;
  }
  header .logo {
    margin-top: 30px;
  }
  header nav {
    margin-top: 35px;
    width: calc(50% - 30px)
  }
  .dda {
    top: 93px;
    left: 22px;
  }
  .start-a-project .button {
    right: 30px!important;
    top: 27px!important;
  }
  .go-tonext {
    bottom: 118px;
  }
}
/* .scroll-content {
  overflow: hidden;
} */
</style>
