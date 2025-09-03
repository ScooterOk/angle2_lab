<template>
  <div id="app-start-projact" :class="{thankyou: thankYou}">
    <!-- ============ DDA =============== -->
    <div class="lct">
      <div>
        <span>let’s</span>
      </div>
      <div>
        <span>create</span>
      </div>
      <div>
        <span>togetcher</span>
      </div>
    </div>
    <!-- ============ TITLE =============== -->
    <ul class="title">
      <li>
        <div class="left">
          <h2>
            <span>start</span>                
          </h2>          
        </div>
        <div class="right">
          <h2>                
            <span>start</span>
          </h2>
        </div>            
      </li> 
      <li>
        <div class="left">
          <h2>
            <span>a project</span>
          </h2>
        </div>
        <div class="right">
          <h2>
            <span>a project</span>
          </h2>
        </div>
      </li>          
    </ul>
    <ul class="title thank-you">
      <li>
        <div class="left">
          <h2>
            <span>Thank</span>
          </h2>
        </div>
        <div class="right">
          <h2>
            <span>Thank</span>
          </h2>
        </div>
      </li>
      <li>
        <div class="left">
          <h2>
            <span>you</span>
          </h2>
        </div>
        <div class="right">
          <h2>
            <span>you</span>
          </h2>
        </div>
      </li>
    </ul>

    <!-- ============ FORM =============== -->
    <article class="form">
      <form action="" @submit="formSubmit">
        <div class="form__row select">
          <label>
            <span>i’d like to talk about...</span>
          </label>
          <section>
            <div class="form-select">
              <select name="" id="" @click="select">
                <option value="">Working together</option>
                <option value="Promo website">Promo website</option>
                <option value="Complicated Interface (UI/UX)">Complicated Interface (UI/UX)</option>
                <option value="Something special around my idea!">Something special around my idea!</option>
              </select>              
            </div>
            <i></i>
          </section>
        </div>
        <div class="form__row">
          <div class="form-input name">
            <label>
              <span class="text">{{form.name.text}}</span>
              <span class="error">{{form.name.errorText}}</span>
            </label>
            <input type="text" @focus="inputFocusBlur" @blur="inputFocusBlur" name="name">
            <i></i>
          </div>
          <div class="form-input email">
            <label>
              <span class="text">{{form.email.text}}</span>
              <span class="error">{{form.email.errorText}}</span>
            </label>
            <input type="text" @focus="inputFocusBlur" @blur="inputFocusBlur" name="email">
            <i></i>
          </div>
        </div>
        <div class="form__row massage">
          <div class="form-textarea">
            <label>
              <span class="text">{{form.msg.text}}</span>
              <span class="error">{{form.msg.errorText}}</span>
            </label>
            <textarea @focus="textareaFocusBlur" @blur="textareaFocusBlur"></textarea>
            <i></i>
          </div>
        </div>
        <div class="form__row button">
          <button class="form-button">
            <span>Submit</span>
            <i></i>
          </button>
        </div>
      </form>
    </article>

    <!-- ============ FORM =============== -->
    <article class="thank-you">
      <h3>
        <span>We will contact you shortly!</span>
      </h3>
      <div class="go-home">
        <nuxt-link to="/">
          <div @mouseenter="hoverLinks" @mouseleave="hoverLinks">
            <span>Go home</span>  
          </div>          
          <i></i>
        </nuxt-link>
      </div>
    </article>

    


  </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted: function() {},
  data: function() {
    return {
      selectActive : false,
      title: "Let's meet",
      thankYou: false,
      thankYouTitle: "thank you",
      form: {
        select: {
          text: "Your name",
          error: false,
          errorText: "Enter your name"
        },
        name: {
          text: "Your name",
          error: false,
          errorText: "Enter your name"
        },
        email: {
          text: "Your e-mail",
          error: false,
          errorText: "Enter your email"
        },
        msg: {
          text: "Type your message",
          error: false,
          errorText: "Enter your message"
        }
      }
    };
  },
  computed: {    
    appStart: function() {
      return this.$store.state.firstPage;
    },
    firstPage: function() {
      return this.$store.state.firstPage;
    },
    mobile: function() {
      return this.$store.state.mobile;
    },
    touch: function() {
      return this.$store.state.touch;
    },
    cursorColor: function() {
      return this.$store.state.cursorColor;
    },
    cursorHoverColor: function() {
      return this.$store.state.cursorHoverColor;
    }
  },
  watch: {
    mobile: function(mobile){
      if(mobile && mobile == 'mobile'){
        TweenMax.set(document.querySelectorAll('#app-start-projact .lct span'), {y: 14});
        TweenMax.set(document.querySelectorAll('.start-a-project .button .close'), {y: '-100%'}, 'icon');
      }else{
        TweenMax.set(document.querySelectorAll('#app-start-projact .lct span'), {y: 0});
        TweenMax.set(document.querySelectorAll('.start-a-project .button .close'), {y: '0%'}, 'icon');
      }
    }
  },
  methods: {
    select: function(){
      document.querySelector('.form-select').classList.remove('error');
      TweenMax.to('.form__row.select i', 0.5, {backgroundColor : '#191919'});
    },
    inputFocusBlur : function(e){
      var app = this;
      var target = e.currentTarget;
      var name = target.name;      
      if(e.type == 'focus'){
        if(app.mobile && app.mobile == 'mobile'){
          TweenMax.to(document.querySelectorAll('.follow-us, #app-start-projact .title'), 0.4, {opacity: 0});
        }
        if(app.form[name].error){          
          TweenMax.to(target.parentNode.querySelector('i'), 0.5, {backgroundColor : '#191919'});
          TweenMax.to(target.parentNode.querySelector('label'), 0.5, {opacity : 0.5});
          TweenMax.to(target.parentNode.querySelector('.error'), 0.5, {y : '100%', ease: Power3.easeOut});
          app.form[name].error = false;
        }else{
          if(!target.value.trim().length)TweenMax.to(target.parentNode.querySelector('.text'), 0.2, {y : '100%'});
        }        
      }else if(e.type == 'blur'){
        TweenMax.to(document.querySelectorAll('.follow-us, #app-start-projact .title'), 0.4, {opacity: 1});
        if(app.form[name].error){
          if(!target.value.trim().length)TweenMax.to(target.parentNode.querySelector('.text'), 0.2, {y : '0%'});
        }else{
          if(!target.value.trim().length)TweenMax.to(target.parentNode.querySelector('.text'), 0.2, {y : '0%'});
        }
        
      }
    },
    selectClick : function(e){
      var app = this;        
      app.formErrors.select = false;        
      if(!app.selectActive){          
        app.selectActive = true;
        var h = (document.querySelectorAll('.start-project__form_select ul li').length * 40) + 40;
        TweenMax.to('.start-project__form_select ul', 0.4, {height : h, opacity : 1, ease: Power3.easeInOut});
      }else{
        TweenMax.to('.start-project__form_select ul', 0.4, {height : 1, opacity : 0.5, ease: Power4.easeInOut, onComplete : function(){
          app.selectActive = false;
        }});
      }        
    },
    textareaFocusBlur : function(e){
      var app = this;
      var target = e.currentTarget;
      if(e.type == 'focus'){
        if(app.mobile && app.mobile == 'mobile'){
          TweenMax.to(document.querySelectorAll('.follow-us, #app-start-projact .title'), 0.4, {opacity: 0});
        }
        if(app.form.msg.error){
          TweenMax.to('.form-textarea label', 0.5, {opacity : 0.5});
          TweenMax.to(target.parentNode.querySelector('i'), 0.5, {backgroundColor : '#191919'});
          TweenMax.to(target.parentNode.querySelector('.error'), 0.5, {y : '100%', ease: Power3.easeOut});
          TweenMax.to(target.parentNode, 0.2, {height : 90});
          app.form.msg.error = false;
        }else{
          if(!target.value.trim().length){
            TweenMax.to(target.parentNode, 0.2, {height : 90});
            TweenMax.to(target.parentNode.querySelectorAll('.text'), 0.2, {y : '100%'});
          }
        }        
      }else if(e.type == 'blur'){
        TweenMax.to(document.querySelectorAll('.follow-us, #app-start-projact .title'), 0.4, {opacity: 1});
        if(!target.value.trim().length){
          TweenMax.to(target.parentNode, 0.2, {height : 45});
          TweenMax.to(target.parentNode.querySelectorAll('.text'), 0.2, {y : '0%'});
        }        
      }
    },
    formSubmit : function(e){
      var app = this;      
      e.preventDefault();      
      var select = e.target.querySelector('form select').value.trim();
      var name = e.target.querySelector('input[name="name"]').value.trim();
      var email = e.target.querySelector('input[name="email"]').value.trim();
      var msg = e.target.querySelector('textarea').value.trim();      
      
      if(!select.length){
        document.querySelector('.form-select').classList.add('error');
        TweenMax.to('.form__row.select i', 0.5, {backgroundColor : '#fff'});
        app.form.name.error = true;
      }
      if(!name.length){
        TweenMax.to('.form-input.name i', 0.5, {backgroundColor : '#fff'});
        TweenMax.to('.form-input.name label', 0.5, {opacity : 1});
        TweenMax.set('.form-input.name .error', {y : '100%', display : 'block'});
        TweenMax.to('.form-input.name .text', 0.5, {y : '100%', ease: Power3.easeInOut});
        TweenMax.to('.form-input.name .error', 0.5, {y : '0%', ease: Power3.easeInOut});
        app.form.name.error = true;
      }
      if(!email.length){
        TweenMax.to('.form-input.email i', 0.5, {backgroundColor : '#fff'});
        TweenMax.to('.form-input.email label', 0.5, {opacity : 1});
        TweenMax.set('.form-input.email .error', {y : '100%', display : 'block'});
        TweenMax.to('.form-input.email .text', 0.5, {y : '100%', ease: Power3.easeInOut});
        TweenMax.to('.form-input.email .error', 0.5, {y : '0%', ease: Power3.easeInOut});
        app.form.email.error = true;
      }
      if(!msg.length){
        TweenMax.to('.form-textarea i', 0.5, {backgroundColor : '#fff'});
        TweenMax.to('.form-textarea label', 0.5, {opacity : 1});
        TweenMax.set('.form-textarea .error', {y : '100%', display : 'block'});
        TweenMax.to('.form-textarea .text', 0.5, {y : '100%', ease: Power3.easeInOut});
        TweenMax.to('.form-textarea .error', 0.5, {y : '0%', ease: Power3.easeInOut});
        app.form.msg.error = true;
      }
      if(!name.length || !email.length || !msg.length || !select.length)return false;
      
      new TimelineMax()
      .set('article.thank-you h3 span', {y: '100%'})
      .set('article.thank-you .go-home div span', {y: '100%'})
      .set('article.thank-you .go-home a i', {width: '0%'})
      .set(document.querySelectorAll('#app-start-projact .title.thank-you'), {visibility: 'visible'})
      .staggerTo(document.querySelectorAll('#app-start-projact .title:not(.thank-you) .left span'), 1.4, {x : '102vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .staggerTo(document.querySelectorAll('#app-start-projact .title:not(.thank-you) .right span'), 1.4, {x: '102vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .addCallback(function(){
        TweenMax.set('#app-start-projact .title:not(.thank-you)', {display: 'none'});
        app.thankYou = true;
      })
      .staggerTo(document.querySelectorAll('#app-start-projact .title.thank-you .left span'), 1.4, {x : '0vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .staggerTo(document.querySelectorAll('#app-start-projact .title.thank-you .right span'), 1.4, {x: '0vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .to('article.form', 0.4, {opacity: 0, onComplete: function(el){
        TweenMax.set('article.form', {visibility: 'hidden'});
      }}, 'uno+=0.2')
      .set('article.thank-you', {visibility: 'visible'}, 'uno+=1.2')
      .to('article.thank-you h3 span', 0.4, {y: '0%'}, 'uno+=1.2')
      .to('article.thank-you .go-home div span', 0.4, {y: '0%'}, 'uno+=1.3')
      .to('article.thank-you .go-home a i', 0.4, {width: '100%'}, 'uno+=1.4')

      //return;
      
      
      
      var data = {
        Type: select,
        Name : name,
        Email : email,
        Message : msg
      };
      axios({
        method: 'get',
        url: '//getsimpleform.com/messages/ajax?form_api_token=2013e4c23f06c94462ed39d99a944b32',
        // headers: { 
        //   'Access-Control-Allow-Credentials': 'true',
        //   'Cache-Control': 'must-revalidate, private, max-age=0',
        //   'Connection': 'keep-alive',
        //   'Content-Type': 'text/javascript; charset=utf-8',
        //   'Transfer-Encoding': 'chunked',
        //   'X-Rack-Cache': 'miss',                  
        //   'X-UA-Compatible': 'IE=Edge,chrome=1'
        // },
        responseType : 'json',
        params: data
      }); 
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
  transition: {
    mode: "out-in",
    css: false,
    enter: function(el, done) {
      const app = this;      
      //var app = this.$store.state.pageModule;

      app.$store.commit("set", {
        name: "page",
        value: "start-project"
      });
      app.$store.commit("set", {
        name: "cursorColor",
        value: "#b6b6b6"
      });
      app.$store.commit("set", {
        name: "cursorHoverColor",
        value: "#fff"
      });
      app.$store.commit('set', {
        name: 'cursorLongAnimatePermit',
        value: false
      });     
      
      TweenMax.set(document.querySelectorAll('#app-start-projact .lct span'), {y : -13});
      TweenMax.set(document.querySelectorAll('#app-start-projact .title span'), {x: '102vw', force3D: true});
      TweenMax.set(document.querySelectorAll('#app-start-projact .title.thank-you span'), {x: '-102vw', force3D: true});
      TweenMax.set(document.querySelectorAll('.form__row i'), {width: '0%'});
      TweenMax.set(document.querySelectorAll('.form__row label span'), {y: '100%'});
      TweenMax.set(document.querySelectorAll('.form-button'), {y: '-100%'});
      TweenMax.set(document.querySelectorAll('.form-select, .form__row.select label span'), {y: '100%'});      

      TweenMax.to(document.querySelectorAll('.go-tonext span, .dda span'), 0.4, {y : 13, delay : 0.4});
      if(!app.$store.state.mobile || app.$store.state.mobile == 'tablet'){
        TweenMax.to(document.querySelectorAll('#app-start-projact .lct span'), 0.4, {y : 0, delay : 0.4, onComplete: function(){
          TweenMax.set(document.querySelectorAll('#app-start-projact .lct span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
        }});
      }else{        
        TweenMax.set(document.querySelectorAll('#app-start-projact .lct span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
      }
      


      TweenMax.set('.main-bg', {backgroundColor : '#2af8eb', height : '100%', width : 0, x : 0});
      TweenMax.to('.preloader span', 1.3, {y : 50});            
      TweenMax.to('.main-bg', 0.7, {width : '100%', ease: Power3.easeIn});
      TweenMax.to('.main-bg', 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
      TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.4, {y : 13, delay : 0.4});      
      TweenMax.to('.preloader', 0.7, {backgroundColor : '#191919', ease: Power3.easeIn, onComplete : function(){
        TweenMax.to('.g-pager i', 1, { width: '0px', ease: Power4.easeInOut, onComplete(){
            TweenMax.to('.g-pager div', 0.4, {x : '-100%'});  
          }});
      //   new TimelineMax()
      // .to('.icon .l-normal', 0.3, {morphSVG: '.icon .l-close'}, 'icon')
      // .to('.icon .r-normal', 0.3, {morphSVG: '.icon .r-close'}, 'icon')
      // .to('.icon .r-normal', 0.3, {rotation: -45}, 'icon')
      // .to(document.querySelectorAll('.start-a-project .button .start'), 0.4, {y: '-100%'}, 'icon')
      // .to(document.querySelectorAll('.start-a-project .button .close'), 0.4, {y: '-0%'}, 'icon');

      TweenMax.to('header .menu span', 0.3, {y : 0});
      TweenMax.staggerTo(document.querySelectorAll('header nav > div'), 0.3, {y : 35}, 0.1);      
      //TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);
      app.$store.commit('set', {
        name : 'firstPage',
        value : false
      });
        app.$store.commit('set', {
          name: 'pager',
          value: '05'
        });
          
        TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
          TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'transition-duration' : '0.9s'}});          
          TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.$store.state.cursorColor});
          TweenMax.to('.cursor-ring', 0.2, {scale : 1});
        }});

        TweenMax.set('#app', {backgroundColor : '#2af8eb'});
        TweenMax.set('.main-bg', {backgroundColor : 'transparent', width : 0, height : 0});
          app.$store.commit('set', {
          name : 'startProject',
          value : true
        });         
        TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut, onComplete : function(){          
          app.$store.commit('set', {
            name : 'transitionPage',
            value : false
          });   
          new TimelineMax().to('#logo .gaps', 0.3, {opacity: 0})
        .to('#logo .logo1', 0.3, {morphSVG: '#logo .logo2'}, 'uno')
        .to('#logo .number1', 0.3, {morphSVG: '#logo .number2'}, 'uno');       
        }});        
      }});
      new TimelineMax({delay: 0.4})
        .staggerTo(document.querySelectorAll('#app-start-projact .title:not(.thank-you) .left span'), 1.4, {x : '0vw', ease: Power3.easeInOut}, 0.1, 'title')
        .staggerTo(document.querySelectorAll('#app-start-projact .title:not(.thank-you) .right span'), 1.4, {x : '0vw', ease: Power3.easeInOut}, 0.1, 'title')
        .to(document.querySelectorAll('.form__row i, .form-select > i'), 0.7, {width: '100%', ease: Power3.easeInOut})
        .to(document.querySelectorAll('.form__row label span'), 0.4, {y: '0%'}, 'label')
        .to(document.querySelectorAll('.form-select'), 0.4, {y: '0%'}, 'label')
        .to(document.querySelectorAll('.form-button'), 0.4, {y: '0%'}, 'label')
        .addCallback(function(){
            TweenMax.to('.logo', 0.4, {y : 0});
            TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){              
              TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);
            }});
        })        
      
      
    },
    leave: function(el, done) {
      const app = this;      
      app.$store.commit('set', {
        'name': 'transitionPage',
        value: true
      });
      TweenMax.set([document.querySelectorAll('.dda span'), document.querySelectorAll('.go-tonext span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
      TweenMax.set(document.querySelectorAll('#app-start-projact .lct span'), {css : {'letter-spacing': '20px', 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}}, 'title+=0.4')      
      let leave = new TimelineMax()
      .staggerTo(document.querySelectorAll('#app-start-projact .title .left span'), 1.4, {x : '102vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .staggerTo(document.querySelectorAll('#app-start-projact .title .right span'), 1.4, {x: '100vw', ease: Power3.easeInOut}, 0.15, 'uno')
      .set(document.querySelectorAll('#app-start-projact .lct span'), {css : {'letter-spacing': '20px', 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}}, 'uno+=0.4')
      .set(document.querySelectorAll('.form__row i, .form-select > i'), {right: 0, left: 'initial'}, 'uno')
      .to(document.querySelectorAll('.form__row i, .form-select > i'), 0.7, {width: '0%', ease: Power3.easeInOut}, 'uno')
      .to(document.querySelectorAll('.form__row label span'), 0.4, {y: '100%'}, 'uno')
      .to(document.querySelectorAll('.form-select'), 0.4, {y: '100%'}, 'uno')
      .to(document.querySelectorAll('.form-button'), 0.4, {y: '100%'}, 'uno')
      .to(document.querySelectorAll('article.thank-you h3 span, article.thank-you .go-home span'), 0.4, {y: '100%'}, 'uno')
      .set('article.thank-you .go-home i', {right: 0, left: 'initial'}, 'uno')
      .to('article.thank-you .go-home i', 0.4, {width: '0%'}, 'uno')
      .to(document.querySelectorAll('.dda span'), 0.4, {y : 0}, 'uno+=1')
      .addCallback(function(){
        app.$store.commit('set', {
          name : 'startProject',
          value : false
        });
      }, 'uno+=1')
      .to(document.querySelectorAll('#app-start-projact .lct span'), 0.4, {y : -13}, 'uno+=1')
      .to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){        
        TweenMax.killChildTweensOf(document.querySelectorAll('.main'));
        done();
      }}, 'uno+=0.7');
      if(app.$store.state.mobile == 'mobile'){
        leave.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 20}, 0.07, 'uno')
        .to('.follow-us_title span', 0.4, {y : 10}, 'uno+=0.3')
      }
    }
  }
};
</script>

<style lang="scss">
#app-start-projact {
  width: 100%;
  height: 100%;
  .lct {
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
    z-index: 5;      
    color: #191919;
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
  .title {
    list-style: none;
    margin: 0 -1.7vw 0 -1.7vw;
    padding: 0;
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    &.thank-you {
      visibility: hidden;
    }
    @media screen and (max-width: 900px) {       
        bottom: 80px;
        z-index: 0;
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
          color: #fff;
        }
      }
      .right {
        width: 50%;
        overflow: hidden;
        h2 {
          margin-left: -100%;
          transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
          color: #191919;
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
          font-size: 15vw;
          line-height: 11vw;
          padding: 0;
        }
        span {
          display: inline-block;
        }
      }
    }    
  } 
  .form {
    position: absolute;
    top: 74px;
    left: 50%;
    right: 140px;
    z-index: 2;
    @media screen and (max-width: 900px) {
      top: 150px;
      left: 140px;      
      z-index: 10;
    }
    @media screen and (max-width: 480px) {
      position: relative;
      margin: 80px 30px 0px 30px;
      top: initial;
      left: initial;
      right: initial;
    }
    .form__row {
      margin-bottom: 34px;
      display: flex;
      justify-content: space-between;      
      @media screen and (max-width: 480px) {
        margin-bottom: 20px;
        display: block;
      }
      &.button {
        margin-top: 50px;
        overflow: hidden;
        @media screen and (max-width: 480px) {
          margin-top: 15px;          
        }
      }
      .form-input {
        position: relative;
        width: calc(50% - 30px);
        @media screen and (max-width: 480px) {
          width: 100%;
          &.name {
            margin-bottom: 20px;
          }
        }
        label {
          display: block;
          font-size: 18px;
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-weight: 400;
          color: #191919;
          opacity: 0.5;
          overflow: hidden;
          position: absolute;
          top: 13px;
          left: 0;
          z-index: 1;
          span {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            &.error {
              color: #fff;
              display: none;
            }
          }
        }  
        input {
          width: 100%;
          border: none;
          background: transparent;
          position: relative;
          z-index: 2;
          outline: none;
          height: 45px;
          font-size: 18px;
          line-height: 45px;
          font-weight: 400;
          color: #191919;
        }
        i {
          display: block;
          height: 1px;
          width: 100%;
          background: #000;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .form-textarea {
        position: relative;
        width: 100%;
        height: 45px;
        label {
          display: block;
          font-size: 18px;
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-weight: 400;
          color: #191919;
          opacity: 0.5;
          overflow: hidden;
          position: absolute;
          top: 13px;
          left: 0;
          z-index: 1;
          span {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            &.error {
              color: #fff;
              display: none;
            }
          }
        }
        textarea {
          background: transparent;
          padding: 9px 10px 0px 0;
          font-size: 18px;
          line-height: 27px;
          font-weight: 400;
          color: #000;
          width: 100%;
          resize: none;
          border: none;
          height: 100%;
          outline: none;
          position: relative;
          z-index: 2;
          display: block;
        }
        i {
          display: block;
          height: 1px;
          width: 100%;
          background: #000;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .form-button {
        @media screen and (max-width: 480px) {
          height: 50px;
        }
        display: block;
        position: relative;
        width: 100%;
        height: 70px;
        border: none;
        outline: none;
        background-color: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: color 400ms ease;
        span {
          z-index: 1;
          position: relative;
        }
        i {
          display: block;
          width: 100%;
          height: 0%;
          background-color: #191919;
          position: absolute;          
          bottom: 0;
          left: 0;
          transition: all 400ms ease;
        }
        &:hover {
          color: #fff;
          i {
            bottom: initial;
            top: 0;
            height: 100%;
          }
        }
      }
      &.select {
        display: block;
        label {
          font-size: 10px;
          line-height: 1;
          text-transform: uppercase;
          overflow: hidden;
          display: block;
          span {
            display: inline-block;
          }
        }
        section {
          overflow: hidden;
          position: relative;
          i {
            display: block;
            height: 1px;
            width: 0%;
            background: #000;
            position: absolute;
            left: 0;
            bottom: 0;            
          }
          .form-select {
            position: relative;
            overflow: hidden;
            select {
              display: block;
              width: 100%;
              height: 45px;
              position: relative;
              z-index: 5;
              font-size: 18px;
              background-color: transparent;
              border: none;
              outline: none;
              padding-left: 0;            
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              position: relative;
              transition: all 400ms ease;
              option {
                padding: 0;
              }
            }            
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: calc(50% - 3px);
              right: 16px;
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 7px solid #191919;
              transition: all 400ms ease;
            }
            &.error {
              i {
                background-color: #fff;
              }
              select {
                color: #fff;
              }
              &::after {
                border-top-color: #fff;
              }
            }
          } 
        }               
      }
    }
  }
  article.thank-you {
    position: absolute;
    visibility: hidden;
    top: 74px;
    left: 50%;
    right: 140px;
    bottom: 50%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 900px) {
      right: 140px;
      left: 140px;
    }
    @media screen and (max-width: 480px) {
      right: 30px;
      left: 30px;
    }
    h3 {
      font-size: 18px;
      line-height: 1;
      font-weight: 300;
      padding: 0;
      margin: 0 0 30px 0;
      overflow: hidden;
      span {
        display: inline-block;
      }
    }
    .go-home {
      font-size: 18px;
      line-height: 1;
      font-weight: 300;      
      a {
        color: #000;
        display: block;
        line-height: 1;
        overflow: hidden;
        height: 45px;
        display: inline-flex;            
        align-items: center;
        position: relative;
        div {
          overflow: hidden;
          span {
            display: inline-block;
          }
        }        
        i {
          display: block;
          height: 1px;
          width: 100%;
          background: #fff;
          position: absolute;
          left: 0;
          bottom: 0;
        }      
      }      
    }
  }
}
</style>



