<template>
  <section class="photo-morph">
    <slot></slot>
  </section>  
</template>

<script>
  import * as THREE from 'three'

  export default {    
    mounted : function(){
      const app = this;
      
      app.parent = app.$el;
      const imgs = Array.from(app.$el.querySelectorAll('img'));
      app.startImage = app.$el.getAttribute('data-startImage'),
      app.intensity = app.$el.getAttribute('data-intensity'),
      app.speedIn = app.$el.getAttribute('data-speedIn'),
      app.speedOut = app.$el.getAttribute('data-speedOut'),
      app.easing = Expo.easeOut,
      imgs.forEach(function(el, i){          
        app.images.push(el.getAttribute('src'));
      });
      app.dispImage = app.$el.getAttribute('data-displacement');
      app.loader.crossOrigin = "";
      app.camera.position.z = 1;
      app.renderer.setPixelRatio(window.devicePixelRatio);
      app.renderer.setClearColor(0xffffff, 0.0);
      app.renderer.setSize(app.parent.offsetWidth, app.parent.offsetHeight);      
      app.parent.appendChild(app.renderer.domElement);
      for(var i in app.images){
        app.textures.push(app.loader.load(app.images[i]));
      }
      app.StartTexture = app.loader.load(app.startImage);
      app.disp = app.loader.load(app.dispImage);
      app.disp.wrapS = app.disp.wrapT = THREE.RepeatWrapping;
      for(var i in app.textures){
        app.textures[i].magFilter = THREE.LinearFilter;
        app.textures[i].minFilter = THREE.LinearFilter;
        app.textures[i].anisotropy = app.renderer.getMaxAnisotropy();
      }
      app.StartTexture.magFilter = THREE.LinearFilter;
      app.StartTexture.minFilter = THREE.LinearFilter;
      app.StartTexture.anisotropy = app.renderer.getMaxAnisotropy();
      app.mat = new THREE.ShaderMaterial({
        uniforms: {
            effectFactor: { type: "f", value: app.intensity },
            dispFactor: { type: "f", value: 0.0 },
            texture: { type: "t", value: app.StartTexture},
            texture2: { type: "t", value: app.textures[1] },
            disp: { type: "t", value: app.disp }
        },

        vertexShader: app.vertex,
        fragmentShader: app.fragment1,
        transparent: true,
        opacity: 1.0
      });      
      var geometry = new THREE.PlaneBufferGeometry(
        app.parent.offsetWidth,
        app.parent.offsetHeight,
        1
      );
      var object = new THREE.Mesh(geometry, app.mat);
      app.scene.add(object);
      app.animate();
      setTimeout(() => {
        app.start();
      }, 3000);
    },
    data: function(){
      return {
        value: 0,
        parent: null,
        dispImage: null,
        disp: null,
        intensity: null,
        speedIn: null,
        speedOut: null,
        userHover: null,
        easing: null,
        startImage: null,
        images: [],
        value: null,
        current: 0,
        camera: new THREE.OrthographicCamera(
          parent.offsetWidth / -2,
          parent.offsetWidth / 2,
          parent.offsetHeight / 2,
          parent.offsetHeight / -2,
          1,
          1000
        ),
        scene: new THREE.Scene(),
        renderer: new THREE.WebGLRenderer({
          antialias: false          
        }),
        loader: new THREE.TextureLoader(),
        StartTexture: null,
        textures: [],
        mat: null,
        vertex: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragment1: `
          varying vec2 vUv;

          uniform sampler2D texture;
          uniform sampler2D texture2;
          uniform sampler2D disp;

          // uniform float time;
          // uniform float _rot;
          uniform float dispFactor;
          uniform float effectFactor;

          // vec2 rotate(vec2 v, float a) {
          //  float s = sin(a);
          //  float c = cos(a);
          //  mat2 m = mat2(c, -s, s, c);
          //  return m * v;
          // }

          void main() {

              vec2 uv = vUv;

              // uv -= 0.5;
              // vec2 rotUV = rotate(uv, _rot);
              // uv += 0.5;

              vec4 disp = texture2D(disp, uv);

              vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
              vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));

              vec4 _texture = texture2D(texture, distortedPosition);
              vec4 _texture2 = texture2D(texture2, distortedPosition2);

              vec4 finalTexture = mix(_texture, _texture2, dispFactor);

              gl_FragColor = finalTexture;
              // gl_FragColor = disp;
          }
          `,
          fragment2: `
            varying vec2 vUv;

            uniform sampler2D texture;
            uniform sampler2D texture2;
            uniform sampler2D disp;

            // uniform float time;
            // uniform float _rot;
            uniform float dispFactor;
            uniform float effectFactor;

            // vec2 rotate(vec2 v, float a) {
            //  float s = sin(a);
            //  float c = cos(a);
            //  mat2 m = mat2(c, -s, s, c);
            //  return m * v;
            // }

            void main() {

                vec2 uv = vUv;

                // uv -= 0.5;
                // vec2 rotUV = rotate(uv, _rot);
                // uv += 0.5;

                vec4 disp = texture2D(disp, uv);

                vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
                vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));

                vec4 _texture = texture2D(texture, distortedPosition);
                vec4 _texture2 = texture2D(texture2, distortedPosition2);

                vec4 finalTexture = mix(_texture, _texture2, dispFactor);

                gl_FragColor = finalTexture;
                // gl_FragColor = disp;
            }
          `
      }
    },
    computed: {
      
    },
    methods: {
      animate: function() {
        const app = this;        
        requestAnimationFrame(app.animate);
        app.renderer.render(app.scene, app.camera);
      },
      start: function(){
        const app = this;                
        app.value = 1;
        app.mat.uniforms.texture2.value = app.textures[0];
        app.mat.fragmentShader = app.fragment2;
        app.mat.needsUpdate = true;
        TweenMax.to(app.mat.uniforms.dispFactor, 1, {
          value: app.value          
        });
      }
    }
  };
</script>

<style scoped>
  .photo-morph {
    width: 100%;
    height: 100%;
  }
  img {
    display: none;
  }
</style>