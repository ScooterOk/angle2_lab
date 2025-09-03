//import * as THREE from 'three';
var parent;
var dispImage;
var disp;
var intensity;
var speedIn;
var speedOut;
var userHover;
var easing;
var startImage;
var images = [];
var value;
var current = null;
var camera;
var scene;
var renderer;
var loader;
var StartTexture;
var textures = [];
var mat;
var object;
var geometry;
var activity = false;



var vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

var fragment1 = `
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
`;

var fragment2 = `
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
`;




export var init = function(opts){  
  parent = opts.parent || console.warn("no parent");
  dispImage = opts.displacementImage || console.warn("displacement image missing");        
  startImage = opts.startImage;
  intensity = opts.intensity || 1;
  speedIn = opts.speedIn || 1.6;
  speedOut = opts.speedOut || 1.2;
  userHover = (opts.hover === undefined) ? true : opts.hover;
  easing = opts.easing || Expo.easeOut;
  images = [];
  value = 0;
  opts.images.forEach(function(el, i){          
    images.push(el.getAttribute('src'));
  });    
  if(!scene){
    scene = new THREE.Scene();
  }  
  if(!renderer){
    renderer = new THREE.WebGLRenderer({
      antialias: true,    
      alpha: true
    });    
  }  
  if(!loader){
    loader = new THREE.TextureLoader();
    loader.crossOrigin = "";  
  }  
  camera = new THREE.OrthographicCamera(
    parent.offsetWidth / -2,
    parent.offsetWidth / 2,
    parent.offsetHeight / 2,
    parent.offsetHeight / -2,
    1,
    1000
  );
  camera.position.z = 1;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0.0);
  renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  parent.appendChild(renderer.domElement);
  textures = [];
  for(var i in images){
    textures.push(loader.load(images[i]));
  }  
  StartTexture = loader.load(startImage);
  disp = loader.load(dispImage);
  disp.wrapS = disp.wrapT = THREE.RepeatWrapping;  


  for(var i in textures){
    textures[i].magFilter = THREE.LinearFilter;
    textures[i].minFilter = THREE.LinearFilter;
    textures[i].anisotropy = renderer.getMaxAnisotropy();
  }
  StartTexture.magFilter = THREE.LinearFilter;
  StartTexture.minFilter = THREE.LinearFilter;
  StartTexture.anisotropy = renderer.getMaxAnisotropy();
  
  
  
  mat = new THREE.ShaderMaterial({
    uniforms: {
        effectFactor: { type: "f", value: intensity },
        dispFactor: { type: "f", value: 0.0 },
        texture: { type: "t", value: StartTexture},
        texture2: { type: "t", value: textures[1] },
        disp: { type: "t", value: disp }
    },

    vertexShader: vertex,
    fragmentShader: fragment1,
    transparent: true,
    opacity: 1.0
  });    
  geometry = new THREE.PlaneBufferGeometry(
    parent.offsetWidth,
    parent.offsetHeight,
    1
  );  
  object = new THREE.Mesh(geometry, mat);
  
  scene.add(object);
  animate();  
};


export var hover = function(e){
  activity = true;
  var target = Number(e.currentTarget.getAttribute('data-img')) ? Number(e.currentTarget.getAttribute('data-img')) : Number(e.target.parentNode.getAttribute('data-img'));  
  var direction = (current < target ? 'down' : 'up');
  if(target == current)return;
  
  if(value == 0){
    value = 1;
    mat.uniforms.texture2.value = textures[target];
    if(direction == 'down'){
      mat.fragmentShader = fragment2;                    
    }else{
      mat.fragmentShader = fragment1;
    }
    mat.needsUpdate = true;
  }else{
    value = 0;
    mat.uniforms.texture.value = textures[target];
    if(direction == 'down'){
      mat.fragmentShader = fragment1;
    }else{
      mat.fragmentShader = fragment2;
    }
    mat.needsUpdate = true;
  }
  current = target;                
  //mat.uniforms.needsUpdate = true;

  TweenMax.to(mat.uniforms.dispFactor, speedIn, {
      value: value,
      ease: easing,
      onComplete: function(){
        activity = false;
      }
  });
}

export var hoverMobile = function(i){
  activity = true;
  var target = i;
  var direction = (current < target ? 'down' : 'up');
  if(target == current)return;  
  if(value == 0){
    value = 1;
    mat.uniforms.texture2.value = textures[target];
    if(direction == 'down'){
      mat.fragmentShader = fragment2;                    
    }else{
      mat.fragmentShader = fragment1;
    }
    mat.needsUpdate = true;
  }else{
    value = 0;
    mat.uniforms.texture.value = textures[target];
    if(direction == 'down'){
      mat.fragmentShader = fragment1;
    }else{
      mat.fragmentShader = fragment2;
    }
    mat.needsUpdate = true;
  }
  current = target;                
  //mat.uniforms.needsUpdate = true;

  TweenMax.to(mat.uniforms.dispFactor, speedIn, {
      value: value,
      ease: easing,
      onComplete: function(){
        activity = false;
      }
  });
}


export var resize = function(){  
  renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  renderer.render(scene, camera);
}

export var start = function(i){ 
  activity = true;
  value = 1;
  mat.uniforms.texture2.value = textures[0];    
  mat.fragmentShader = fragment2;
  mat.needsUpdate = true;
  TweenMax.to(mat.uniforms.dispFactor, speedIn, {
    value: value,
    ease: easing,
    onComplete: function(){
      activity = false;
    }
  });
  current = 0;
};

export var end = function(){
  activity = true;
  if(value == 0){    
    value = 1;
    mat.uniforms.texture2.value = StartTexture;
    mat.fragmentShader = fragment1;
    mat.needsUpdate = true;    
  }else{
    value = 0;
    mat.uniforms.texture.value = StartTexture;
    mat.fragmentShader = fragment2;
    mat.needsUpdate = true;    
  }
  TweenMax.to(mat.uniforms.dispFactor, speedIn, {
    value: value,
    ease: easing,
    onComplete: function(){
      activity = false;
    }
  });
  current = null;  
  
  
}
export var longEnd = function(speed){
  activity = true;
  if(value == 0){    
    value = 1;
    mat.uniforms.texture2.value = StartTexture;
    mat.fragmentShader = fragment1;
    mat.needsUpdate = true;    
  }else{
    value = 0;
    mat.uniforms.texture.value = StartTexture;
    mat.fragmentShader = fragment2;
    mat.needsUpdate = true;    
  }
  TweenMax.to(mat.uniforms.dispFactor, speed, {
    value: value,
    ease: easing,
    onComplete: function(){
      activity = false;
    }
  });
  current = null;  
  
  
}
export var clear = function(){
  for(var i in textures){
    textures[i].dispose();    
  }
  StartTexture.dispose();
  disp.dispose();
  scene.remove(object);
  object.geometry.dispose();
  object.material.dispose();  
  object = undefined;
  renderer.dispose();
  renderer.clear();
  mat.dispose();
  geometry.dispose();
  activity = false;
}

var animate = function() {
  requestAnimationFrame(animate);  
  if(activity){
    renderer.render(scene, camera);
  }
};
