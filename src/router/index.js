import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/layout'
import simple from '@/simple'

Vue.use(Router)
const router = new Router({
    //mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: () => import('@/views/index')
        },

        {
            path: '/excel',
            component: () => import('@/views/exportExcel/index'),
            children: [{
                path: '/',
                component: () => import('@/views/index'),
            }]
        },

        {
            path: '/imageviewer',
            component: () => import('@/views/imageviewer')
        },

        {
            path: '/canvasDrag',
            component: () => import('@/views/canvasDrag')
        },

        {
            path: '/codehighlight',
            component: () => import('@/views/codehighlight')
        },

        {
            path: '/tooltip',
            component: () => import('@/views/tooltip')
        },

        {
            path: '/canvasTurntable',
            component: () => import('@/views/canvasTurntable')
        },

        {
            path: '/typewriter',
            component: () => import('@/views/typewriter')
        },

        {
            path: '/identifyCode',
            component: () => import('@/views/identifyCode')
        },

        {
            path: '/electronicSignature',
            component: () => import('@/views/electronicSignature')
        },
        
        {
            path: '/404',
            name: '404',
            component: () => import( /* webpackChunkName: "home" */ '@/views/notFound'),
          },
        // 404 page must be placed at the end !!!
        {
            path: '*',
            redirect: '/404',
            children: []
        }
    ]
})

export default router;