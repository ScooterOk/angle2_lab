const pkg = require('./package')

module.exports = {
  mode: 'universal',  
  /*
  ** Headers of the page
  */
  head: {
    title: 'Angle2 | Design Agency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'We’re a small Ukraine-based design agency. We create complex interfaces and tell interactive stories through unique and engaging web experiences. We’re great collaborators and expert communicators, and we pride ourselves on how well we work with others. Our team is made up of subject matter experts. Our UX, UI, and creative designers are all at the top of of their fields.' },
      {property : 'og:title', content : 'Angle2'},
      {property : 'og:type', content : 'website'},
      {property : 'og:url', content : 'https://angle2.agency/lab/'},
      {property : 'og:image', content : 'https://angle2.agency/img/angle2_preview.png'},
      {property : 'og:description', content : 'UI design, UX research, pixel-perfect front-end and award level marketing websites'},
      {property : 'og:site_name', content : 'Angle2.agency/lab/'}
    ],
    link: [      
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,800,900&font-display=auto'},
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/lab/favicons/apple-icon-57x57.png'},
      { rel: 'apple-touch-icon', sizes: '60x60',  href: '/lab/favicons/apple-icon-60x60.png'},
      { rel: 'apple-touch-icon', sizes: '72x72',  href: '/lab/favicons/apple-icon-72x72.png'},
      { rel: 'apple-touch-icon', sizes: '76x76',  href: '/lab/favicons/apple-icon-76x76.png'},
      { rel: 'apple-touch-icon', sizes: '114x114',  href: '/lab/favicons/apple-icon-114x114.png'},
      { rel: 'apple-touch-icon', sizes: '120x120',  href: '/lab/favicons/apple-icon-120x120.png'},
      { rel: 'apple-touch-icon', sizes: '144x144',  href: '/lab/favicons/apple-icon-144x144.png'},
      { rel: 'apple-touch-icon', sizes: '152x152',  href: '/lab/favicons/apple-icon-152x152.png'},
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/lab/favicons/apple-icon-180x180.png'},
      { rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/lab/favicons/android-icon-192x192.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/lab/favicons/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/lab/favicons/favicon-96x96.png'},
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/lab/favicons/favicon-16x16.png'}
    ],
    script: [      
      // {src: '/js/TweenMax.min.js' },
      // {src: '/js/MorphSVGPlugin.min.js'},
      // {src: '/js/SplitText.min.js'},
      // {src: '/js/ModifiersPlugin.min.js'},
      // {src: '/js/three.min.js'},
      // {src: '/js/smooth-scrollbar.js'} 
      
      
      // { src: '/angle2-nuxt/js/TweenMax.min.js' },      
      // { src: '/angle2-nuxt/js/MorphSVGPlugin.min.js'},
      // { src: '/angle2-nuxt/js/SplitText.min.js' },
      // { src: '/angle2-nuxt/js/ModifiersPlugin.min.js' }
      
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: false,

  /*
  ** Global CSS
  */
  css: [
    '@assets/css/normalize.css',
    //'aos/dist/aos.css'
    //'swiper/dist/css/swiper.min.css'
    //'@assets/css/vue2-scrollbar.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/sitemap',
  ['@nuxtjs/google-analytics', {
    id: 'UA-99984912-2'    
  }]
],
sitemap: {
  generate: true,
  hostname: 'https://angle2.agency/',    
},

  router: {
    base: '/lab/'
  },
  

  /*
  ** Build configuration
  */
 render: {
  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ['script', 'style', 'font', 'image'].includes(type)
    }
  }
},
  build: {    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
