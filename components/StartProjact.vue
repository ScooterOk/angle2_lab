<template>
  <div class="start-a-project hover-link">
		<div class="button noselect" @mouseenter="hoverLinks" @mouseleave="hoverLinks" @click="link">
			<div>
				<span class="start">start</span>
				<span class="close">come</span>
			</div>
			<div>
				<span class="start">a project</span>
				<span class="close">back</span>
			</div>
			<i>
				<svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 21.6" >					
				
					<polygon class="l-normal" points="3,10.6 3,21.6 11,21.6 11,1.6"/>
					<polygon class="l-hover" points="3,21.6 3,21.6 11,21.6 11,12.6"/>
					<polygon class="l-close" points="17,0.3 0,21.3 8,21.3 25,0.3"/>
				
					
					<polygon class="r-normal" points="14,21.6 22,12.6 22,21.6 20.6,21.6"/>
					<polygon class="r-hover" points="14,10.6 22,1.6 22,21.6 14,21.6"/>
					<rect class="r-close" x="12" y="-2.7" transform="matrix(0.7772 -0.6292 0.6292 0.7772 -4.0148 10.2658)" width="1" height="27"/>					
				</svg>
			</i>			
		</div>
	</div>
</template>

<script>
export default {
  mounted: function() {		
		
	},
  data: function() {
    return {
			active: false
		};
	},
	computed: {
		appStart: function() {
      		return this.$store.state.appStart;
		},
		touch: function(){
      		return this.$store.state.touch;
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
			transitionPage: function(){
		return this.$store.state.transitionPage;
			}, 
			startProject: function(){
		return this.$store.state.startProject;
		}		
	},
	watch: {
		startProject: function(val){
			const app = this;
			if(val){
				let tl1 = new TimelineMax()
				.to('.icon .l-normal', 0.3, {morphSVG: '.icon .l-close'}, 'icon')
				.to('.icon .r-normal', 0.3, {morphSVG: '.icon .r-close'}, 'icon')
				.to('.icon .r-normal', 0.3, {rotation: -45}, 'icon')
				.to(document.querySelectorAll('.start-a-project .button .start'), 0.4, {y: '-100%'}, 'icon');
				if(!app.mobile || app.mobile == 'tablet'){
					tl1.to(document.querySelectorAll('.start-a-project .button .close'), 0.4, {y: '-0%'}, 'icon');
				}
				
			}else{
				new TimelineMax()
				.to('.icon .l-normal', 0.3, {morphSVG: '.icon .l-normal'}, 'icon')
				.to('.icon .r-normal', 0.3, {morphSVG: '.icon .r-normal'}, 'icon')
				.to('.icon .r-normal', 0.3, {rotation: 0}, 'icon')
				.to(document.querySelectorAll('.start-a-project .button .start'), 0.4, {y: '0%'}, 'icon')
				.to(document.querySelectorAll('.start-a-project .button .close'), 0.4, {y: '100%'}, 'icon');
			}
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
					TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.cursorHoverColor});
					TweenMax.to('.icon .l-normal', 0.3, {morphSVG: '.icon .l-hover'});
					TweenMax.to('.icon .r-normal', 0.3, {morphSVG: '.icon .r-hover'});
					TweenMax.to('.icon .r-normal', 0.3, {rotation: 0});					
					
        }else{
          app.$store.commit('set', {
            name: 'cursorHoverActive',
            value: false
					});					
          TweenMax.to('.cursor-ring', 0.2, {scale : 1});
					TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursorColor});
					TweenMax.to('.cursor-ring__arrow', 0.2, {fill : app.cursorColor});
					if(app.startProject){
						TweenMax.to('.icon .r-normal', 0.3, {rotation: -45})
						TweenMax.to('.icon .l-normal', 0.3, {morphSVG: '.icon .l-close'});
						TweenMax.to('.icon .r-normal', 0.3, {morphSVG: '.icon .r-close'});
					}else{
						TweenMax.to('.icon .l-normal', 0.3, {morphSVG: '.icon .l-normal'});
						TweenMax.to('.icon .r-normal', 0.3, {morphSVG: '.icon .r-normal'});
					}					
        }
      }
		},
		link: function(){
			const app = this;			
			if(!app.transitionPage){
				if(app.startProject){
					this.$router.go(-1);
				}else{
					this.$router.push({path:'/start'});
				}				
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.start-a-project {
		visibility: hidden;
		position: fixed;
		width: 0;
		height: 0;
		z-index: 10;
		.button {
			position: fixed;			
			top: 56px;
			right: 58px;
			font-size: 10px;
			line-height: 11px;
			text-transform: uppercase;
			transform: rotate(-90deg) translateX(20px);
			transform-origin: bottom right;
			cursor: pointer;
			padding-right: 30px;
			div {
				overflow: hidden;
				text-align: right;
				position: relative;
				span {
					display: inline-block;
				}
				.close {
					position: absolute;
					right: 0;
					top: 0;					
				}
			}
			i {
				display: block;
				overflow: hidden;
				width: 25px;				
				height: 21px;
				position: absolute;
				right: 0;
				top: 0;
				transform: rotate(90deg);	
				.icon {
					display: block;
					.l-hover, .l-close, .r-hover, .r-close {
							display: none;
						}
						path {							
							display: block;
						}
				}			
			}
		}
	}
</style>


