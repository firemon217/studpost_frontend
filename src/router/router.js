import { createRouter, createWebHistory } from "vue-router"
import Main from '@/components/Main.vue'
import Posts from '@/components/Posts/Posts.vue'
import Registration from '@/components/Auth_Regist/Registration.vue'
import Authorization from '@/components/Auth_Regist/Authorization.vue'
import CreatePosts from '@/components/Posts/CreatePost.vue'
import EditPost from '@/components/Posts/EditPost.vue'

const routes = [
    {
      path: '/home',
      component: Main,
      children: [
          {
            path: '/home',
            component: Posts
          },
          {
            path: '/home/createpost',
            component: CreatePosts
          },
          {
            path: '/home/editpost',
            component: EditPost
          },
        ]
    },
    
    {
      path: '/auth',
      component: Authorization,
    },
    {
      path: '/regist',
      component: Registration
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router