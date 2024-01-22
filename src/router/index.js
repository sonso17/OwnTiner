import { createRouter, createWebHashHistory } from 'vue-router'
import paginaInici from '../views/paginaInici.vue'
import whoAmI from '../views/whoAmI.vue'
import logIn from '../views/logIn.vue'
import register from '../views/registerR.vue'
import userInfo from '../views/userInfo.vue'
import modifyUser from '../views/userModify.vue'
import oneComponent from '../views/oneComponent.vue'
import registerComponent from '../views/registerComponent.vue'
import modifyComponent from '../views/modifyComponent.vue'
import newComponentType from '../views/newComponentType.vue'
import easterEgg from '../views/easterEgg.vue'
import userComponents from '../views/userComponents.vue'

const routes = [
  {
    path: '/',
    name: 'paginaInici',
    component: paginaInici
  },
  {
    path: '/whoAmI',
    name: 'whoAmI',
    component: whoAmI
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: logIn
  }, 
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/userInfo/:id',
    name: 'userInfo',
    component: userInfo
  },
  {
    path: '/modifyUser/:id',
    name: 'modifyUser',
    component: modifyUser
  },
  {
    path: '/oneComponent/:id',
    props: true,
    name: 'oneComponent',
    component: oneComponent
  },
  {
    path: '/registerComponent',
    name: 'registerComponent',
    component: registerComponent
  },
  {
    path: '/modifyComponent/:compID',
    props: true,
    name: 'modifyComponent',
    component: modifyComponent
  },
  {
    path: '/userComponents/',
    name: 'userComponents',
    component: userComponents
  },
  {
    path: '/newComponentType',
    name: 'newComponentType',
    component: newComponentType
  },
  {
    path: '/easterEgg',
    name: 'easterEgg',
    component: easterEgg
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
