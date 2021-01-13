export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Teman Musisi',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'js/jquery-2.2.4.min.js' },
            { src: 'js/swiper.jquery.min.js' },
            { src: 'js/global.js' },
            { src: 'js/jquery.sumoselect.min.js' },
            { src: 'js/jquery.classycountdown.js' },
            { src: 'js/jquery.knob.js' },
            { src: 'js/jquery.throttle.js' },
            { src: 'js/map.js' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/css/bootstrap.extension',
        '~/assets/css/bootstrap.min',
        '~/assets/css/font-awesome.min',
        '~/assets/css/style',
        '~/assets/css/sumoselect',
        '~/assets/css/swiper',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}