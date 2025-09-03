(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    293: function (e, t, o) {
      "use strict";
      o.d(t, "e", function () {
        return E;
      }),
        o.d(t, "c", function () {
          return A;
        }),
        o.d(t, "d", function () {
          return H;
        }),
        o.d(t, "g", function () {
          return I;
        }),
        o.d(t, "h", function () {
          return O;
        }),
        o.d(t, "b", function () {
          return R;
        }),
        o.d(t, "f", function () {
          return U;
        }),
        o.d(t, "a", function () {
          return D;
        });
      o(204), o(21), o(38);
      var r,
        n,
        c,
        l,
        d,
        v,
        m,
        h,
        f,
        _,
        x,
        w,
        j,
        y,
        object,
        T,
        C = [],
        k = null,
        S = [],
        F = !1,
        M =
          "\n    varying vec2 vUv;\n\n    uniform sampler2D texture;\n    uniform sampler2D texture2;\n    uniform sampler2D disp;\n\n    // uniform float time;\n    // uniform float _rot;\n    uniform float dispFactor;\n    uniform float effectFactor;\n\n    // vec2 rotate(vec2 v, float a) {\n    //  float s = sin(a);\n    //  float c = cos(a);\n    //  mat2 m = mat2(c, -s, s, c);\n    //  return m * v;\n    // }\n\n    void main() {\n\n        vec2 uv = vUv;\n\n        // uv -= 0.5;\n        // vec2 rotUV = rotate(uv, _rot);\n        // uv += 0.5;\n\n        vec4 disp = texture2D(disp, uv);\n\n        vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));\n        vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));\n\n        vec4 _texture = texture2D(texture, distortedPosition);\n        vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n        vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n        gl_FragColor = finalTexture;\n        // gl_FragColor = disp;\n    }\n",
        P =
          "\n    varying vec2 vUv;\n\n    uniform sampler2D texture;\n    uniform sampler2D texture2;\n    uniform sampler2D disp;\n\n    // uniform float time;\n    // uniform float _rot;\n    uniform float dispFactor;\n    uniform float effectFactor;\n\n    // vec2 rotate(vec2 v, float a) {\n    //  float s = sin(a);\n    //  float c = cos(a);\n    //  mat2 m = mat2(c, -s, s, c);\n    //  return m * v;\n    // }\n\n    void main() {\n\n        vec2 uv = vUv;\n\n        // uv -= 0.5;\n        // vec2 rotUV = rotate(uv, _rot);\n        // uv += 0.5;\n\n        vec4 disp = texture2D(disp, uv);\n\n        vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));\n        vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));\n\n        vec4 _texture = texture2D(texture, distortedPosition);\n        vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n        vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n        gl_FragColor = finalTexture;\n        // gl_FragColor = disp;\n    }\n",
        E = function (e) {
          for (var i in ((r = e.parent || console.warn("no parent")),
          (n =
            e.displacementImage || console.warn("displacement image missing")),
          (m = e.startImage),
          (l = e.intensity || 1),
          (d = e.speedIn || 1.6),
          e.speedOut || 1.2,
          void 0 === e.hover || e.hover,
          (v = e.easing || Expo.easeOut),
          (C = []),
          (h = 0),
          e.images.forEach(function (e, i) {
            C.push(e.getAttribute("src"));
          }),
          _ || (_ = new THREE.Scene()),
          x || (x = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 })),
          w || ((w = new THREE.TextureLoader()).crossOrigin = ""),
          ((f = new THREE.OrthographicCamera(
            r.offsetWidth / -2,
            r.offsetWidth / 2,
            r.offsetHeight / 2,
            r.offsetHeight / -2,
            1,
            1e3
          )).position.z = 1),
          x.setPixelRatio(window.devicePixelRatio),
          x.setClearColor(16777215, 0),
          x.setSize(r.offsetWidth, r.offsetHeight),
          r.appendChild(x.domElement),
          (S = []),
          C))
            S.push(w.load(C[i]));
          for (var i in ((j = w.load(m)),
          ((c = w.load(n)).wrapS = c.wrapT = THREE.RepeatWrapping),
          S))
            (S[i].magFilter = THREE.LinearFilter),
              (S[i].minFilter = THREE.LinearFilter),
              (S[i].anisotropy = x.getMaxAnisotropy());
          (j.magFilter = THREE.LinearFilter),
            (j.minFilter = THREE.LinearFilter),
            (j.anisotropy = x.getMaxAnisotropy()),
            (y = new THREE.ShaderMaterial({
              uniforms: {
                effectFactor: { type: "f", value: l },
                dispFactor: { type: "f", value: 0 },
                texture: { type: "t", value: j },
                texture2: { type: "t", value: S[1] },
                disp: { type: "t", value: c },
              },
              vertexShader:
                "\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",
              fragmentShader: M,
              transparent: !0,
              opacity: 1,
            })),
            (T = new THREE.PlaneBufferGeometry(
              r.offsetWidth,
              r.offsetHeight,
              1
            )),
            (object = new THREE.Mesh(T, y)),
            _.add(object),
            z();
        },
        A = function (e) {
          F = !0;
          var t = Number(e.currentTarget.getAttribute("data-img"))
              ? Number(e.currentTarget.getAttribute("data-img"))
              : Number(e.target.parentNode.getAttribute("data-img")),
            o = k < t ? "down" : "up";
          t != k &&
            (0 == h
              ? ((h = 1),
                (y.uniforms.texture2.value = S[t]),
                (y.fragmentShader = "down" == o ? P : M),
                (y.needsUpdate = !0))
              : ((h = 0),
                (y.uniforms.texture.value = S[t]),
                (y.fragmentShader = "down" == o ? M : P),
                (y.needsUpdate = !0)),
            (k = t),
            TweenMax.to(y.uniforms.dispFactor, d, {
              value: h,
              ease: v,
              onComplete: function () {
                F = !1;
              },
            }));
        },
        H = function (i) {
          F = !0;
          var e = i,
            t = k < e ? "down" : "up";
          e != k &&
            (0 == h
              ? ((h = 1),
                (y.uniforms.texture2.value = S[e]),
                (y.fragmentShader = "down" == t ? P : M),
                (y.needsUpdate = !0))
              : ((h = 0),
                (y.uniforms.texture.value = S[e]),
                (y.fragmentShader = "down" == t ? M : P),
                (y.needsUpdate = !0)),
            (k = e),
            TweenMax.to(y.uniforms.dispFactor, d, {
              value: h,
              ease: v,
              onComplete: function () {
                F = !1;
              },
            }));
        },
        I = function () {
          x.setSize(r.offsetWidth, r.offsetHeight), x.render(_, f);
        },
        O = function (i) {
          (F = !0),
            (h = 1),
            (y.uniforms.texture2.value = S[0]),
            (y.fragmentShader = P),
            (y.needsUpdate = !0),
            TweenMax.to(y.uniforms.dispFactor, d, {
              value: h,
              ease: v,
              onComplete: function () {
                F = !1;
              },
            }),
            (k = 0);
        },
        R = function () {
          (F = !0),
            0 == h
              ? ((h = 1),
                (y.uniforms.texture2.value = j),
                (y.fragmentShader = M),
                (y.needsUpdate = !0))
              : ((h = 0),
                (y.uniforms.texture.value = j),
                (y.fragmentShader = P),
                (y.needsUpdate = !0)),
            TweenMax.to(y.uniforms.dispFactor, d, {
              value: h,
              ease: v,
              onComplete: function () {
                F = !1;
              },
            }),
            (k = null);
        },
        U = function (e) {
          (F = !0),
            0 == h
              ? ((h = 1),
                (y.uniforms.texture2.value = j),
                (y.fragmentShader = M),
                (y.needsUpdate = !0))
              : ((h = 0),
                (y.uniforms.texture.value = j),
                (y.fragmentShader = P),
                (y.needsUpdate = !0)),
            TweenMax.to(y.uniforms.dispFactor, e, {
              value: h,
              ease: v,
              onComplete: function () {
                F = !1;
              },
            }),
            (k = null);
        },
        D = function () {
          for (var i in S) S[i].dispose();
          j.dispose(),
            c.dispose(),
            _.remove(object),
            object.geometry.dispose(),
            object.material.dispose(),
            (object = void 0),
            x.dispose(),
            x.clear(),
            y.dispose(),
            T.dispose(),
            (F = !1);
        },
        z = function () {
          requestAnimationFrame(z), F && x.render(_, f);
        };
    },
    295: function (e, t, o) {
      "use strict";
      o.d(t, "c", function () {
        return P;
      }),
        o.d(t, "d", function () {
          return E;
        }),
        o.d(t, "e", function () {
          return A;
        }),
        o.d(t, "b", function () {
          return H;
        }),
        o.d(t, "a", function () {
          return I;
        });
      o(204), o(21), o(38);
      var r,
        n,
        c,
        l,
        d,
        v,
        m,
        h,
        f,
        _,
        x,
        w,
        j,
        y,
        object,
        T,
        C = [],
        k = [],
        S = !1,
        F =
          "\n    varying vec2 vUv;\n\n    uniform sampler2D texture;\n    uniform sampler2D texture2;\n    uniform sampler2D disp;\n\n    // uniform float time;\n    // uniform float _rot;\n    uniform float dispFactor;\n    uniform float effectFactor;\n\n    // vec2 rotate(vec2 v, float a) {\n    //  float s = sin(a);\n    //  float c = cos(a);\n    //  mat2 m = mat2(c, -s, s, c);\n    //  return m * v;\n    // }\n\n    void main() {\n\n        vec2 uv = vUv;\n\n        // uv -= 0.5;\n        // vec2 rotUV = rotate(uv, _rot);\n        // uv += 0.5;\n\n        vec4 disp = texture2D(disp, uv);\n\n        vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));\n        vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));\n\n        vec4 _texture = texture2D(texture, distortedPosition);\n        vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n        vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n        gl_FragColor = finalTexture;\n        // gl_FragColor = disp;\n    }\n",
        M =
          "\n    varying vec2 vUv;\n\n    uniform sampler2D texture;\n    uniform sampler2D texture2;\n    uniform sampler2D disp;\n\n    // uniform float time;\n    // uniform float _rot;\n    uniform float dispFactor;\n    uniform float effectFactor;\n\n    // vec2 rotate(vec2 v, float a) {\n    //  float s = sin(a);\n    //  float c = cos(a);\n    //  mat2 m = mat2(c, -s, s, c);\n    //  return m * v;\n    // }\n\n    void main() {\n\n        vec2 uv = vUv;\n\n        // uv -= 0.5;\n        // vec2 rotUV = rotate(uv, _rot);\n        // uv += 0.5;\n\n        vec4 disp = texture2D(disp, uv);\n\n        vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));\n        vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));\n\n        vec4 _texture = texture2D(texture, distortedPosition);\n        vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n        vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n        gl_FragColor = finalTexture;\n        // gl_FragColor = disp;\n    }\n",
        P = function (e) {
          for (var i in ((r = e.parent || console.warn("no parent")),
          (n =
            e.displacementImage || console.warn("displacement image missing")),
          (m = e.startImage),
          (l = e.intensity || 1),
          (d = e.speedIn || 1.6),
          e.speedOut || 1.2,
          void 0 === e.hover || e.hover,
          (v = e.easing || Expo.easeOut),
          (C = []),
          (h = 0),
          e.images.forEach(function (e, i) {
            C.push(e.getAttribute("src"));
          }),
          _ || (_ = new THREE.Scene()),
          x || (x = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 })),
          w || ((w = new THREE.TextureLoader()).crossOrigin = ""),
          ((f = new THREE.OrthographicCamera(
            r.offsetWidth / -2,
            r.offsetWidth / 2,
            r.offsetHeight / 2,
            r.offsetHeight / -2,
            1,
            1e3
          )).position.z = 1),
          x.setPixelRatio(window.devicePixelRatio),
          x.setClearColor(16777215, 0),
          x.setSize(r.offsetWidth, r.offsetHeight),
          r.appendChild(x.domElement),
          (k = []),
          C))
            k.push(w.load(C[i]));
          for (var i in ((j = w.load(m)),
          ((c = w.load(n)).wrapS = c.wrapT = THREE.RepeatWrapping),
          k))
            (k[i].magFilter = THREE.LinearFilter),
              (k[i].minFilter = THREE.LinearFilter),
              (k[i].anisotropy = x.getMaxAnisotropy());
          (j.magFilter = THREE.LinearFilter),
            (j.minFilter = THREE.LinearFilter),
            (j.anisotropy = x.getMaxAnisotropy()),
            (y = new THREE.ShaderMaterial({
              uniforms: {
                effectFactor: { type: "f", value: l },
                dispFactor: { type: "f", value: 0 },
                texture: { type: "t", value: j },
                texture2: { type: "t", value: k[1] },
                disp: { type: "t", value: c },
              },
              vertexShader:
                "\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",
              fragmentShader: F,
              transparent: !0,
              opacity: 1,
            })),
            (T = new THREE.PlaneBufferGeometry(
              r.offsetWidth,
              r.offsetHeight,
              1
            )),
            (object = new THREE.Mesh(T, y)),
            _.add(object),
            O();
        },
        E = function () {
          x.setSize(r.offsetWidth, r.offsetHeight), x.render(_, f);
        },
        A = function (i) {
          (S = !0),
            (h = 1),
            (y.uniforms.texture2.value = k[0]),
            (y.fragmentShader = M),
            (y.needsUpdate = !0),
            TweenMax.to(y.uniforms.dispFactor, d, {
              value: h,
              ease: v,
              onComplete: function () {
                S = !1;
              },
            });
        },
        H = function () {
          (S = !0),
            0 == h
              ? ((h = 1),
                (y.uniforms.texture2.value = j),
                (y.fragmentShader = F),
                (y.needsUpdate = !0))
              : ((h = 0),
                (y.uniforms.texture.value = j),
                (y.fragmentShader = M),
                (y.needsUpdate = !0)),
            TweenMax.to(y.uniforms.dispFactor, d, {
              value: h,
              ease: v,
              onComplete: function () {
                S = !1;
              },
            });
        },
        I = function () {
          for (var i in k) k[i].dispose();
          j.dispose(),
            c.dispose(),
            _.remove(object),
            object.geometry.dispose(),
            object.material.dispose(),
            (object = void 0),
            x.clear(),
            x.dispose(),
            y.dispose(),
            T.dispose(),
            (S = !1);
        },
        O = function () {
          requestAnimationFrame(O), S && x.render(_, f);
        };
    },
    312: function (e, t, o) {
      var content = o(354);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, o(40).default)("2a0f73b4", content, !0, { sourceMap: !1 });
    },
    353: function (e, t, o) {
      "use strict";
      o(312);
    },
    354: function (e, t, o) {
      var r = o(39)(function (i) {
        return i[1];
      });
      r.push([
        e.i,
        '#app-projects-cavio{height:100%;overflow:hidden}#app-projects-cavio .scroll-content{overflow:hidden}#app-projects-cavio .case{height:100%;overflow:hidden}#app-projects-cavio .imganim{position:relative}#app-projects-cavio .imganim img{display:block}#app-projects-cavio .imganim i{background-repeat:no-repeat;background-size:cover;display:block;height:100%;left:0;position:absolute;top:0;width:0}#app-projects-cavio [data-type=feedbacks]{z-index:1}#app-projects-cavio [data-type=newUsers] i{background-position:100%;left:auto;right:0}#app-projects-cavio .scrollbar-track{background-color:transparent;width:6px}#app-projects-cavio .scrollbar-track.scrollbar-track-y{opacity:0}#app-projects-cavio .scrollbar-track.scrollbar-track-y .scrollbar-thumb{background-color:#fff;border-radius:0;width:6px}#app-projects-cavio .allprojects{font-size:10px;left:70px;line-height:10px;position:fixed;text-transform:uppercase;top:245px;transform:rotate(-90deg) translateX(-70px);transform-origin:left;z-index:10}@media screen and (max-width:900px){#app-projects-cavio .allprojects{left:95px;top:195px}}@media screen and (max-width:480px){#app-projects-cavio .allprojects{left:55px;top:165px}}#app-projects-cavio .allprojects a{color:#191919;display:inline-block;padding-right:27px;position:relative}#app-projects-cavio .allprojects a b{display:inline-block;font-weight:400;overflow:hidden}#app-projects-cavio .allprojects a span{display:inline-block}@media screen and (max-width:900px){#app-projects-cavio .allprojects a{color:#fff;padding-right:65px}}#app-projects-cavio .allprojects i{border-bottom:7px solid #191919;border-left:7px solid transparent;border-right:7px solid transparent;display:block;height:0;position:absolute;right:0;top:0;width:0}@media screen and (max-width:900px){#app-projects-cavio .allprojects i{background-color:#fff;border:none;border-radius:50%;display:block;height:50px;margin-left:15px;position:absolute;right:0;top:-20px;width:50px}#app-projects-cavio .allprojects i:before{border-left:1px solid #191919;border-top:1px solid #191919;box-sizing:border-box;content:"";display:block;height:10px;left:20px;position:absolute;top:22px;transform:rotate(45deg);width:10px}}#app-projects-cavio .img-wrapper{display:inline-block;margin:auto;max-width:1000px;overflow:hidden;position:relative}#app-projects-cavio .case__head{background-color:#fff;margin-top:150px;overflow:hidden;position:relative;width:calc(100vw - 140px)}@media screen and (max-width:900px){#app-projects-cavio .case__head{margin-top:310px;width:100%}}@media screen and (max-width:480px){#app-projects-cavio .case__head{margin-top:125px}}#app-projects-cavio .case__head .case__head_img{height:34.1vw;margin-left:auto;overflow:hidden;position:relative;width:calc(100% - 140px)}@media screen and (max-width:900px){#app-projects-cavio .case__head .case__head_img{height:48vw;width:100%}}@media screen and (max-width:480px){#app-projects-cavio .case__head .case__head_img{height:110vw;margin-left:-42%;width:210vw}}#app-projects-cavio .case__head .case__head_img img{bottom:0;display:none;position:absolute;width:100%}#app-projects-cavio .case__head .case__head_characteristic{display:flex;height:190px;margin-left:140px;padding:54px 0 0;position:relative}@media screen and (max-width:900px){#app-projects-cavio .case__head .case__head_characteristic{height:auto;margin:0 70px;padding:50px 0 100px}}@media screen and (max-width:480px){#app-projects-cavio .case__head .case__head_characteristic{flex-direction:column;margin:0 30px;padding:30px 0 70px}}#app-projects-cavio .case__head .case__head_characteristic .output{width:21.5%}@media screen and (max-width:900px){#app-projects-cavio .case__head .case__head_characteristic .output{width:31.5%}}@media screen and (max-width:480px){#app-projects-cavio .case__head .case__head_characteristic .output{width:100%}}#app-projects-cavio .case__head .case__head_characteristic .creative{width:57%}@media screen and (max-width:480px){#app-projects-cavio .case__head .case__head_characteristic .creative{margin-top:30px;width:100%}}#app-projects-cavio .case__head .case__head_characteristic .link{color:#fff;font-size:18px;font-weight:400;height:70px;line-height:1;position:absolute;right:-70px;top:50px;width:203px}@media screen and (max-width:900px){#app-projects-cavio .case__head .case__head_characteristic .link{bottom:-35px;left:0;right:auto;top:auto}}#app-projects-cavio .case__head .case__head_characteristic .link .background{align-items:center;background:#191919;display:flex;height:100%;justify-content:center;width:100%}#app-projects-cavio .case__head .case__head_characteristic .link a{color:#fff;overflow:hidden}#app-projects-cavio .case__head .case__head_characteristic .link a span{display:inline-block}#app-projects-cavio .case__head .case__head_characteristic h4{color:#191919;font-size:10px;font-weight:400;line-height:1;margin:0 0 10px;overflow:hidden;padding:0;text-transform:uppercase}#app-projects-cavio .case__head .case__head_characteristic h4 span{display:inline-block}#app-projects-cavio .case__head .case__head_characteristic h5{color:#191919;font-size:18px;font-weight:400;line-height:1.67;margin:0;overflow:hidden;padding:0}#app-projects-cavio .case__head .case__head_characteristic h5 span{display:inline-block}#app-projects-cavio .case__head_title{list-style:none;margin:70px 0 0;overflow:hidden;padding:0;position:absolute;top:0;width:100vw}@media screen and (max-width:480px){#app-projects-cavio .case__head_title{margin-top:35vw}}#app-projects-cavio .case__head_title li{display:flex;height:21.3vw;margin:-13vw -1.7vw 0;pointer-events:none;position:relative}#app-projects-cavio .case__head_title li:first-child{margin-top:0}@media screen and (max-width:900px){#app-projects-cavio .case__head_title li{height:24.8vw}}#app-projects-cavio .case__head_title li .left{color:#191919;overflow:hidden;width:50%}#app-projects-cavio .case__head_title li .left h2{transform:translateZ(0) rotate(-15deg) skewX(-15deg)}#app-projects-cavio .case__head_title li .right{color:#191919;overflow:hidden;width:50%}#app-projects-cavio .case__head_title li .right h2{margin-left:-100%;transform:translateZ(0) rotate(15deg) skewX(15deg)}#app-projects-cavio .case__head_title li h2{font-size:10.7vw;font-weight:900;letter-spacing:-.45vw;line-height:8.2vw;margin:0;overflow:hidden;padding:0 70px;position:relative;text-transform:uppercase;width:200%;z-index:1}@media screen and (max-width:900px){#app-projects-cavio .case__head_title li h2{font-size:15vw;line-height:11vw}}@media screen and (max-width:480px){#app-projects-cavio .case__head_title li h2{padding:0 30px}}#app-projects-cavio .case__head_title li h2 span{display:inline-block}#app-projects-cavio .quick-words{padding-top:70px}#app-projects-cavio .quick-words .content{margin:0 auto;max-width:1000px;overflow:hidden;position:relative}#app-projects-cavio .quick-words .content .text{background-color:#fff;padding:70px 140px 100px}@media screen and (max-width:900px){#app-projects-cavio .quick-words .content .text{padding:70px}}@media screen and (max-width:480px){#app-projects-cavio .quick-words .content .text{padding:30px}}#app-projects-cavio .quick-words h4{font-size:10px;font-weight:400;line-height:1;margin:0 0 10px;padding:0;text-transform:uppercase}#app-projects-cavio .quick-words p{font-size:18px;font-weight:300;line-height:1.67;margin:0;padding:0}#app-projects-cavio .home{margin:100px auto 0;max-width:1280px;padding-left:140px}@media screen and (max-width:900px){#app-projects-cavio .home{padding-left:70px}}@media screen and (max-width:480px){#app-projects-cavio .home{padding-left:0}}#app-projects-cavio .home img{width:100%}#app-projects-cavio .catalog{margin:100px auto 0;max-width:1280px;padding-right:140px}@media screen and (max-width:900px){#app-projects-cavio .catalog{padding-right:70px}}@media screen and (max-width:480px){#app-projects-cavio .catalog{padding-right:0}}#app-projects-cavio .catalog img{width:100%}#app-projects-cavio .designstudio{background:transparent url(/img/projects/cavio/cavio_bg2.jpg) no-repeat 50%/cover;margin:100px auto 0;max-width:1200px;padding:100px 0 190px;text-align:center}#app-projects-cavio .designstudio img{max-width:1000px;width:100%}#app-projects-cavio .product-card{margin:-90px auto 0;max-width:1000px}#app-projects-cavio .product-card img{width:100%}#app-projects-cavio .catalog-2{margin:100px auto 0;max-width:1000px}#app-projects-cavio .catalog-2 img{width:100%}#app-projects-cavio .mobile{display:flex;justify-content:space-between;margin:100px auto 0;max-width:1280px;padding-right:140px}@media screen and (max-width:900px){#app-projects-cavio .mobile{padding-right:70px}}@media screen and (max-width:480px){#app-projects-cavio .mobile{padding-right:0}}#app-projects-cavio .mobile .left{display:flex;flex-direction:column;margin-right:100px;max-width:665px}@media screen and (max-width:480px){#app-projects-cavio .mobile .left{margin-right:40px}}#app-projects-cavio .mobile .left img{width:100%}#app-projects-cavio .mobile .left img:first-child{margin-bottom:100px}#app-projects-cavio .mobile .left img:last-child{align-self:flex-end;max-width:375px}#app-projects-cavio .mobile .right{display:flex;flex-direction:column;max-width:375px}#app-projects-cavio .mobile .right img{width:100%}#app-projects-cavio .mobile .right img:first-child{margin-bottom:100px}#app-projects-cavio .next-project-wrapper{background-color:#191919}#app-projects-cavio .next-project{align-items:center;display:flex;height:100vh;position:relative}#app-projects-cavio .next-project .case__head_title{margin:0;top:50%;transform:translateY(-50%);z-index:1}#app-projects-cavio .next-project .case__head_title .left{color:#fff}#app-projects-cavio .next-project .case__head_title .right{color:#191919}#app-projects-cavio .next-project .case__head_title .timer{margin-top:-11.3vw}#app-projects-cavio .next-project .case__head_title .timer h2 span{transform:translateX(0)}#app-projects-cavio .next-project .next-project__label{bottom:165px;left:140px;position:absolute}@media screen and (max-width:480px){#app-projects-cavio .next-project .next-project__label{bottom:70px;left:90px}}#app-projects-cavio .next-project .next-project__label h4{color:#fff;font-size:10px;font-weight:400;line-height:1;margin:0 0 10px;overflow:hidden;padding:0;text-transform:uppercase}#app-projects-cavio .next-project .next-project__label h4 span{display:inline-block}#app-projects-cavio .next-project .next-project__label h5{color:#fff;font-size:18px;font-weight:400;line-height:1;margin:0;overflow:hidden;padding:0}#app-projects-cavio .next-project .next-project__label h5 span{display:inline-block}#app-projects-cavio .next-project .next-project__img{display:flex;margin:0 0 0 auto}@media screen and (max-width:480px){#app-projects-cavio .next-project .next-project__img{bottom:140px;display:block;left:90px;overflow:hidden;position:absolute;right:0;top:140px}}#app-projects-cavio .next-project .next-project__img canvas{display:block;height:100%!important}@media screen and (max-width:480px){#app-projects-cavio .next-project .next-project__img canvas{width:100%!important}}#app-projects-cavio .next-project .next-project__img i{background-color:#fff;width:140px}@media screen and (max-width:900px){#app-projects-cavio .next-project .next-project__img i{display:none}}#app-projects-cavio .next-project .next-project__img span{height:33.2vw;width:59vw}@media screen and (max-width:900px){#app-projects-cavio .next-project .next-project__img span{height:53.25vw;width:calc(100vw - 140px)}}@media screen and (max-width:480px){#app-projects-cavio .next-project .next-project__img span{display:block;height:100%;width:calc(170vh - 476px)}}#app-projects-cavio .next-project .next-project__img img{display:none;width:100%}',
        "",
      ]),
        (r.locals = {}),
        (e.exports = r);
    },
    375: function (e, t, o) {
      "use strict";
      o.r(t);
      o(68), o(30), o(49), o(69);
      var r = o(293),
        n = o(295),
        c = {
          mounted: function () {
            var e = this;
            TweenMax.set(document.querySelectorAll(".next-project"), {
              visibility: "hidden",
            }),
              (e.scrollbar = Scrollbar.init(
                document.querySelector(".case.cavio"),
                { alwaysShowTracks: !0 }
              )),
              e.scrollbar.addListener(function (t) {
                e.scrollTop = t.offset.y;
              });
            var t = document.querySelector(".case__head_img"),
              o = Array.from(t.querySelectorAll("img"));
            r.e({
              parent: t,
              startImage: t.dataset.startimage,
              intensity: t.dataset.intensity || void 0,
              speedIn: t.dataset.speedin || void 0,
              speedOut: t.dataset.speedout || void 0,
              easing: t.dataset.easing || void 0,
              hover: t.dataset.hover || void 0,
              images: o,
              displacementImage: t.dataset.displacement,
            });
            var c = document.querySelector(".next-project__img span"),
              l = Array.from(c.querySelectorAll("img"));
            n.c({
              parent: c,
              startImage: c.dataset.startimage,
              intensity: c.dataset.intensity || void 0,
              speedIn: c.dataset.speedin || void 0,
              speedOut: c.dataset.speedout || void 0,
              easing: c.dataset.easing || void 0,
              hover: c.dataset.hover || void 0,
              images: l,
              displacementImage: c.dataset.displacement,
            }),
              setTimeout(function () {}, 3e3);
          },
          data: function () {
            return {
              nextProject: !1,
              scrollbar: null,
              scrollTop: 0,
              scrollDelay: 300,
              timer: 3,
            };
          },
          computed: {
            appStart: function () {
              return this.$store.state.appStart;
            },
            resize: function () {
              return this.$store.state.resize;
            },
            cursorColor: function () {
              return this.$store.state.cursorColor;
            },
            cursorHoverColor: function () {
              return this.$store.state.cursorHoverColor;
            },
            mobile: function () {
              return this.$store.state.mobile;
            },
            touch: function () {
              return this.$store.state.touch;
            },
          },
          watch: {
            scrollTop: function (e) {
              var t = this,
                o = document.querySelector(".next-project").offsetTop;
              e + window.innerHeight - window.innerHeight / 2 > o &&
                !t.nextProject &&
                t.nextProjectStart(),
                t.mobile && e > window.innerHeight / 2
                  ? TweenMax.to(".allprojects b", 0.4, { opacity: 0 })
                  : TweenMax.to(".allprojects b", 0.4, { opacity: 1 });
            },
            resize: function (e) {
              r.g(), n.d();
            },
          },
          methods: {
            hoverLinks: function (e) {
              var t = this;
              if (t.touch) return !1;
              t.appStart &&
                ("mouseenter" == e.type
                  ? (t.$store.commit("set", {
                      name: "cursorHoverActive",
                      value: !0,
                    }),
                    TweenMax.to(".cursor-ring", 0.2, { scale: 1.5 }),
                    TweenMax.to(".progress-ring__circle", 0.2, {
                      stroke: t.cursorHoverColor,
                    }))
                  : (t.$store.commit("set", {
                      name: "cursorHoverActive",
                      value: !1,
                    }),
                    TweenMax.to(".cursor-ring", 0.2, { scale: 1 }),
                    TweenMax.to(".progress-ring__circle", 0.2, {
                      stroke: t.cursorColor,
                    })));
            },
            nextProjectStart: function (e) {
              var t = this;
              (t.nextProject = !0),
                (t.scrollbar.options._damping = 0.07),
                t.scrollbar.scrollIntoView(
                  document.querySelector(".next-project"),
                  { alignToTop: !0, onlyScrollIfNeeded: !1 }
                );
              new TimelineMax()
                .set(document.querySelectorAll(".next-project__label span"), {
                  y: "110%",
                })
                .set(
                  document.querySelectorAll(
                    ".next-project .case__head_title li:not(.timer) span"
                  ),
                  { visibility: "hidden" }
                )
                .set(
                  document.querySelectorAll(
                    ".next-project .case__head_title li.timer span"
                  ),
                  { visibility: "hidden" }
                )
                .set(".next-project", { visibility: "visible" })
                .fromTo(
                  ".next-project__img",
                  0.7,
                  { x: "100%" },
                  {
                    x: "0%",
                    ease: Power4.easeInOut,
                    onComplete: function () {
                      n.e();
                    },
                  },
                  "list"
                )
                .staggerFromTo(
                  document.querySelectorAll(
                    ".next-project .case__head_title li:not(.timer) .left span"
                  ),
                  1,
                  { x: "-100vw" },
                  { x: 0, visibility: "visible", ease: Power4.easeOut },
                  0.15,
                  "list+=1.1"
                )
                .staggerFromTo(
                  document.querySelectorAll(
                    ".next-project .case__head_title li:not(.timer) .right span"
                  ),
                  1,
                  { x: "-100vw" },
                  { x: 0, visibility: "visible", ease: Power4.easeOut },
                  0.15,
                  "list+=1.1"
                )
                .staggerTo(
                  document.querySelectorAll(".next-project__label span"),
                  0.4,
                  { y: "0%" },
                  0.3,
                  "list+=1.8"
                )
                .fromTo(
                  document.querySelectorAll(
                    ".next-project .case__head_title li.timer span"
                  ),
                  1,
                  {
                    x: function (i, e) {
                      return -e.clientWidth - 70 + "px";
                    },
                  },
                  {
                    x: "100vw",
                    visibility: "visible",
                    ease: SlowMo.ease.config(0.2, 0.8, !1),
                    onComplete: function () {
                      t.timer--;
                    },
                  },
                  "list+=2.6"
                )
                .fromTo(
                  document.querySelectorAll(
                    ".next-project .case__head_title li.timer span"
                  ),
                  1,
                  {
                    x: function (i, e) {
                      return -e.clientWidth - 70 + "px";
                    },
                  },
                  {
                    x: "100vw",
                    visibility: "visible",
                    ease: SlowMo.ease.config(0.2, 0.8, !1),
                    onComplete: function () {
                      t.timer--;
                    },
                  }
                )
                .fromTo(
                  document.querySelectorAll(
                    ".next-project .case__head_title li.timer span"
                  ),
                  1,
                  {
                    x: function (i, e) {
                      return -e.clientWidth - 70 + "px";
                    },
                  },
                  {
                    x: "100vw",
                    visibility: "visible",
                    ease: SlowMo.ease.config(0.2, 0.8, !1),
                    onComplete: function () {
                      t.$router.push({ path: "/projects/4peak" });
                    },
                  }
                );
            },
          },
          transition: {
            mode: "out-in",
            css: !1,
            enter: function (e, t) {
              var o = this;
              o.$store.commit("set", { name: "page", value: "cavio" }),
                o.$store.commit("set", {
                  name: "cursorColor",
                  value: "#b6b6b6",
                }),
                o.$store.commit("set", {
                  name: "cursorHoverColor",
                  value: "#90f8eb",
                }),
                o.$store.commit("set", {
                  name: "cursorLongAnimate",
                  value: !1,
                }),
                o.$store.commit("set", {
                  name: "cursorLongAnimatePermit",
                  value: !1,
                }),
                o.$store.commit("set", { name: "scroll", value: !1 }),
                TweenMax.set(".main-bg", {
                  backgroundColor: "#191919",
                  height: "100%",
                  width: 0,
                  x: 0,
                }),
                TweenMax.set(".case__head", { x: "-100%" }),
                TweenMax.set(
                  document.querySelectorAll("#app-projects-cavio .leave"),
                  { opacity: 0 }
                ),
                TweenMax.set(
                  document.querySelectorAll(
                    ".case__head .case__head_title span"
                  ),
                  { x: "-100vw" }
                ),
                TweenMax.set(
                  document.querySelectorAll(".case__head_characteristic span"),
                  { y: "110%" }
                ),
                TweenMax.set(".case__head_characteristic .link .background", {
                  width: "0%",
                }),
                TweenMax.set(".allprojects a span", { y: "-100%" }),
                TweenMax.set(".allprojects i", { scale: 0 }),
                TweenMax.to(".preloader span", 1.3, { y: 50 }),
                TweenMax.to(".main-bg", 0.7, {
                  width: "100%",
                  ease: Power3.easeIn,
                }),
                TweenMax.to(".main-bg", 0.7, {
                  css: { transform: "translateX(-50vw)" },
                  ease: Power3.easeIn,
                }),
                TweenMax.to(
                  document.querySelectorAll(".go-tonext span, .dda span"),
                  0.4,
                  { y: 13, delay: 0.4 }
                ),
                new TimelineMax()
                  .to("#logo .gaps", 0.3, { opacity: 0 })
                  .to("#logo .logo1", 0.3, { morphSVG: "#logo .logo2" }, "uno")
                  .to(
                    "#logo .number1",
                    0.3,
                    { morphSVG: "#logo .number2" },
                    "uno"
                  ),
                TweenMax.to(".preloader", 0.7, {
                  backgroundColor: "#fff",
                  ease: Power3.easeIn,
                  onComplete: function () {
                    TweenMax.set("#app", { backgroundColor: "#191919" }),
                      TweenMax.set(".main-bg", {
                        backgroundColor: "transparent",
                        width: 0,
                        height: 0,
                      }),
                      TweenMax.to(".preloader", 0.7, {
                        height: 0,
                        y: 0,
                        ease: Power3.easeOut,
                        onComplete: function () {
                          TweenMax.to(".g-pager i", 1, {
                            width: "0px",
                            ease: Power4.easeInOut,
                            onComplete: function () {
                              TweenMax.to(".g-pager div", 0.4, { x: "-100%" });
                            },
                          }),
                            TweenMax.to(".logo", 0.4, { y: 0 }),
                            TweenMax.to(".follow-us_title span", 0.4, {
                              y: 35,
                              onComplete: function () {
                                TweenMax.to("header .menu span", 0.3, { y: 0 }),
                                  TweenMax.staggerTo(
                                    document.querySelectorAll(
                                      "header nav > div"
                                    ),
                                    0.3,
                                    { y: 0 },
                                    0.1
                                  ),
                                  TweenMax.staggerTo(
                                    [
                                      ".follow-us li.be",
                                      ".follow-us li.dr",
                                      ".follow-us li.fb",
                                      ".follow-us li.ig",
                                    ],
                                    0.3,
                                    { y: 35 },
                                    0.1
                                  ),
                                  TweenMax.to(
                                    document.querySelectorAll(
                                      "#app-projects-cavio .leave"
                                    ),
                                    1.4,
                                    { opacity: 1 }
                                  ),
                                  o.$store.commit("set", {
                                    name: "firstPage",
                                    value: !1,
                                  }),
                                  o.$store.commit("set", {
                                    name: "transitionPage",
                                    value: !1,
                                  });
                              },
                            });
                        },
                      }),
                      new TimelineMax({ delay: 0.6 })
                        .to(".case__head", 0.8, {
                          x: "0%",
                          ease: Power3.easeInOut,
                        })
                        .staggerFromTo(
                          document.querySelectorAll(
                            ".case__head .case__head_title .left span"
                          ),
                          1,
                          { x: "-100vw" },
                          { x: 0, visibility: "visible", ease: Power4.easeOut },
                          0.15,
                          "title"
                        )
                        .staggerFromTo(
                          document.querySelectorAll(
                            ".case__head .case__head_title .right span"
                          ),
                          1,
                          { x: "-100vw" },
                          { x: 0, visibility: "visible", ease: Power4.easeOut },
                          0.15,
                          "title"
                        )
                        .addCallback(function () {
                          r.h();
                        })
                        .to(".allprojects a span", 0.4, { y: "0%" }, "end")
                        .to(".allprojects i", 0.4, { scale: 1 }, "end")
                        .to(".allprojects a", 0.4, { y: "0%" }, "end")
                        .staggerTo(
                          ".case__head_characteristic h4 span",
                          0.4,
                          { y: "0%" },
                          0.2,
                          "end"
                        )
                        .staggerTo(
                          ".case__head_characteristic h5 span",
                          0.4,
                          { y: "0%" },
                          0.2,
                          "end"
                        )
                        .set(".scrollbar-track-y", { opacity: 1 })
                        .to(
                          ".case__head_characteristic .link .background",
                          0.4,
                          { width: "100%", ease: Power3.easeInOut }
                        )
                        .to(
                          ".case__head_characteristic .link span",
                          0.4,
                          { y: "0%" },
                          "+=0.3"
                        );
                  },
                }),
                t();
            },
            leave: function (e, t) {
              var o = this;
              o.$store.commit("set", { name: "menu", value: !1 }),
                o.$store.commit("set", { name: "transitionPage", value: !0 }),
                r.b(),
                new TimelineMax()
                  .staggerTo(
                    document.querySelectorAll(
                      ".case__head .case__head_title .left span"
                    ),
                    1,
                    { x: "100vw", ease: Power3.easeInOut },
                    0.15,
                    "end"
                  )
                  .staggerTo(
                    document.querySelectorAll(
                      ".case__head .case__head_title .right span"
                    ),
                    1,
                    { x: "100vw", ease: Power3.easeInOut },
                    0.15,
                    "end"
                  )
                  .staggerTo(
                    document.querySelectorAll(
                      ".next-project .case__head_title .left span"
                    ),
                    1,
                    { x: "100vw", ease: Power3.easeInOut },
                    0.15,
                    "end"
                  )
                  .staggerTo(
                    document.querySelectorAll(
                      ".next-project .case__head_title .right span"
                    ),
                    1,
                    { x: "100vw", ease: Power3.easeInOut },
                    0.15,
                    "end"
                  )
                  .addCallback(function () {
                    n.b();
                  }, "-=0.4")
                  .set(".scrollbar-track-y", { opacity: 0 }, "end")
                  .to(
                    ".next-project__img",
                    0.7,
                    { x: "100%", ease: Power4.easeInOut },
                    "end+=1.5"
                  )
                  .staggerTo(
                    document.querySelectorAll(".next-project__label span"),
                    0.4,
                    { y: "110%" },
                    0.3,
                    "end+=1"
                  )
                  .to(
                    document.querySelectorAll("#app-projects-cavio .leave"),
                    1.4,
                    { opacity: 0 },
                    "end"
                  )
                  .to(".allprojects a span", 0.4, { y: "100%" }, "end")
                  .to(".allprojects i", 0.4, { scale: 0 }, "end")
                  .staggerTo(
                    ".case__head_characteristic h4 span",
                    0.4,
                    { y: "110%" },
                    0.2,
                    "end"
                  )
                  .staggerTo(
                    ".case__head_characteristic h5 span",
                    0.4,
                    { y: "110%" },
                    0.2,
                    "end"
                  )
                  .to(
                    ".case__head_characteristic .link span",
                    0.4,
                    { y: "100%" },
                    "end"
                  )
                  .to(
                    ".case__head_characteristic .link .background",
                    0.4,
                    { width: "0%", ease: Power3.easeInOut },
                    "end"
                  )
                  .to(
                    ".case__head",
                    0.8,
                    { x: "-100%", ease: Power3.easeInOut },
                    "end+=1"
                  )
                  .to(document.querySelectorAll(".dda span"), 0.4, {
                    y: function () {
                      if (!o.$route.name.split("projects-")[1]) return 0;
                    },
                  })
                  .to(
                    ".preloader",
                    0.7,
                    {
                      y: 0,
                      height: "100%",
                      ease: Power3.easeIn,
                      onComplete: function () {
                        r.a(),
                          n.a(),
                          TweenMax.killChildTweensOf(
                            document.querySelectorAll(".main")
                          ),
                          Scrollbar.destroyAll(),
                          t();
                      },
                    },
                    "end+=1.2"
                  )
                  .to(".next-project-wrapper", 0.7, { opacity: 0 }, "end+=1.2");
            },
          },
        },
        l = (o(353), o(22)),
        component = Object(l.a)(
          c,
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { attrs: { id: "app-projects-cavio" } }, [
              t(
                "div",
                {
                  staticClass: "allprojects",
                  on: { mouseenter: e.hoverLinks, mouseleave: e.hoverLinks },
                },
                [
                  t("nuxt-link", { attrs: { to: "/projects" } }, [
                    t("b", [t("span", [e._v("all projects")])]),
                    e._v(" "),
                    t("i"),
                  ]),
                ],
                1
              ),
              e._v(" "),
              t("article", { staticClass: "case cavio" }, [
                e._m(0),
                e._v(" "),
                e._m(1),
                e._v(" "),
                e._m(2),
                e._v(" "),
                e._m(3),
                e._v(" "),
                e._m(4),
                e._v(" "),
                e._m(5),
                e._v(" "),
                e._m(6),
                e._v(" "),
                e._m(7),
                e._v(" "),
                t("div", { staticClass: "next-project-wrapper" }, [
                  t(
                    "section",
                    {
                      staticClass: "next-project startanim",
                      attrs: { "data-type": "nextProject" },
                    },
                    [
                      e.mobile
                        ? t("ul", { staticClass: "case__head_title" }, [
                            e._m(8),
                            e._v(" "),
                            e._m(9),
                            e._v(" "),
                            t("li", { staticClass: "timer" }, [
                              t("div", { staticClass: "left" }, [
                                t("h2", [
                                  t("span", [e._v("0" + e._s(e.timer))]),
                                ]),
                              ]),
                              e._v(" "),
                              t("div", { staticClass: "right" }, [
                                t("h2", [
                                  t("span", [e._v("0" + e._s(e.timer))]),
                                ]),
                              ]),
                            ]),
                          ])
                        : t("ul", { staticClass: "case__head_title" }, [
                            e._m(10),
                            e._v(" "),
                            t("li", { staticClass: "timer" }, [
                              t("div", { staticClass: "left" }, [
                                t("h2", [
                                  t("span", [e._v("0" + e._s(e.timer))]),
                                ]),
                              ]),
                              e._v(" "),
                              t("div", { staticClass: "right" }, [
                                t("h2", [
                                  t("span", [e._v("0" + e._s(e.timer))]),
                                ]),
                              ]),
                            ]),
                          ]),
                      e._v(" "),
                      e._m(11),
                      e._v(" "),
                      e._m(12),
                    ]
                  ),
                ]),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t("section", { staticClass: "case__head" }, [
                t(
                  "div",
                  {
                    staticClass: "case__head_img",
                    attrs: {
                      "data-displacement": "/img/displacement/pattern2.png",
                      "data-intensity": "-0.65",
                      "data-speedIn": "1",
                      "data-speedOut": "1",
                      "data-startImage": "/img/displacement/start.png",
                    },
                  },
                  [
                    t("img", {
                      attrs: {
                        src: "/img/projects/cavio/preview.jpg",
                        alt: "",
                      },
                    }),
                  ]
                ),
                e._v(" "),
                t("ul", { staticClass: "case__head_title" }, [
                  t("li", [
                    t("div", { staticClass: "left" }, [
                      t("h2", [t("span", [e._v("cavio")])]),
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "right" }, [
                      t("h2", [t("span", [e._v("cavio")])]),
                    ]),
                  ]),
                ]),
                e._v(" "),
                t("div", { staticClass: "case__head_characteristic" }, [
                  t("div", { staticClass: "output" }, [
                    t("h4", [t("span", [e._v("output")])]),
                    e._v(" "),
                    t("h5", [t("span", [e._v("Promo Brand Catalog")])]),
                  ]),
                  e._v(" "),
                  t("div", { staticClass: "creative" }, [
                    t("h4", [t("span", [e._v("creative fields")])]),
                    e._v(" "),
                    t("h5", [
                      t("span", [
                        e._v(
                          "Wireframing, UX/UI design, Interaction Design, Animation"
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("section", { staticClass: "quick-words leave" }, [
                t(
                  "div",
                  {
                    staticClass: "content startanim",
                    attrs: { "data-type": "quickWords" },
                  },
                  [
                    t("div", { staticClass: "text" }, [
                      t("h4", [e._v("QUICK WORDS")]),
                      e._v(" "),
                      t("p", [
                        e._v(
                          "\n              Our client knows everything about premium class furniture from Italy and France."
                        ),
                        t("br"),
                        e._v(
                          "\n              CAVIO has three stylish showrooms with high level service in Kyiv. There you can find products from classic to contemporary styles."
                        ),
                        t("br"),
                        e._v(
                          "\n              The main goal of the project was to attract new customers online and complete the purchase already in the showroom. To do this, we have developed an promotional brand сatalog with seamless transitions that allow the entire user journey to be smooth and enjoyable."
                        ),
                        t("br"),
                        e._v(
                          "\n              In the development of the structure and design of the style, all attention was focused on high-quality presentation photos and type of products.\n            "
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var e = this._self._c;
              return e("section", { staticClass: "home leave" }, [
                e("img", {
                  attrs: { src: "/img/projects/cavio/home.jpg", alt: "" },
                }),
              ]);
            },
            function () {
              var e = this._self._c;
              return e("section", { staticClass: "catalog leave" }, [
                e("img", {
                  attrs: { src: "/img/projects/cavio/catalog.jpg", alt: "" },
                }),
              ]);
            },
            function () {
              var e = this._self._c;
              return e("section", { staticClass: "designstudio leave" }, [
                e("img", {
                  attrs: {
                    src: "/img/projects/cavio/designstudio.jpg",
                    alt: "",
                  },
                }),
              ]);
            },
            function () {
              var e = this._self._c;
              return e("section", { staticClass: "product-card leave" }, [
                e("img", {
                  attrs: {
                    src: "/img/projects/cavio/product_card_.jpg",
                    alt: "",
                  },
                }),
              ]);
            },
            function () {
              var e = this._self._c;
              return e("section", { staticClass: "catalog-2 leave" }, [
                e("img", {
                  attrs: { src: "/img/projects/cavio/catalog_2.jpg", alt: "" },
                }),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("section", { staticClass: "mobile leave" }, [
                t("div", { staticClass: "left" }, [
                  t("img", {
                    attrs: { src: "/img/projects/cavio/home_768.jpg", alt: "" },
                  }),
                  e._v(" "),
                  t("img", {
                    attrs: {
                      src: "/img/projects/cavio/Menu_Default_375.jpg",
                      alt: "",
                    },
                  }),
                ]),
                e._v(" "),
                t("div", { staticClass: "right" }, [
                  t("img", {
                    attrs: {
                      src: "/img/projects/cavio/catalog_375.jpg",
                      alt: "",
                    },
                  }),
                  e._v(" "),
                  t("img", {
                    attrs: {
                      src: "/img/projects/cavio/home_v2_375.jpg",
                      alt: "",
                    },
                  }),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("li", [
                t("div", { staticClass: "left" }, [
                  t("h2", [t("span", [e._v("Next")])]),
                ]),
                e._v(" "),
                t("div", { staticClass: "right" }, [
                  t("h2", [t("span", [e._v("Next")])]),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("li", [
                t("div", { staticClass: "left" }, [
                  t("h2", [t("span", [e._v("project")])]),
                ]),
                e._v(" "),
                t("div", { staticClass: "right" }, [
                  t("h2", [t("span", [e._v("project")])]),
                ]),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("li", [
                t("div", { staticClass: "left" }, [
                  t("h2", [t("span", [e._v("Next project")])]),
                ]),
                e._v(" "),
                t("div", { staticClass: "right" }, [
                  t("h2", [t("span", [e._v("Next project")])]),
                ]),
              ]);
            },
            function () {
              var e = this._self._c;
              return e("div", { staticClass: "next-project__img" }, [
                e(
                  "span",
                  {
                    attrs: {
                      "data-displacement": "/img/displacement/pattern2.png",
                      "data-intensity": "-0.65",
                      "data-speedIn": "1",
                      "data-speedOut": "1",
                      "data-startImage": "/img/displacement/start.png",
                    },
                  },
                  [
                    e("img", {
                      attrs: { src: "/img/projects/4peak.jpg", alt: "" },
                    }),
                  ]
                ),
                this._v(" "),
                e("i"),
              ]);
            },
            function () {
              var e = this,
                t = e._self._c;
              return t("div", { staticClass: "next-project__label" }, [
                t("h4", [t("span", [e._v("client")])]),
                e._v(" "),
                t("h5", [t("span", [e._v("4Peak")])]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
  },
]);
