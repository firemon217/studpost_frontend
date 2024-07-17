import { createRouter, createWebHistory } from "vue-router"
import Main from '@/components/Main.vue'
import Posts from '@/components/Posts/Posts.vue'
import Registration from '@/components/Auth_Regist/Registration.vue'
import Authorization from '@/components/Auth_Regist/Authorization.vue'
import CreatePosts from '@/components/Posts/CreatePost.vue'

const routes = [
    {
        path: '/main',
        component: Main,
        children: [
            {
              path: '/main',
              component: Posts
            },
            {
              path: '/main/createpost',
              component: CreatePosts
            },
            {
              path: '/main/registration',
              component: Registration
            },
            {
              path: '/main/authorization',
              component: Authorization
            }
          ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router