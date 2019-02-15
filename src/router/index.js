import LandingPage from '@/components/Landing_Page.vue'
import SearchPage from '@/components/Search_Results.vue'
import ProductsPage from '@/components/Products.vue'
import SellerPage from '@/components/SellerView.vue'
import UserPage from '@/components/User.vue'

export default[
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/:prdName/prd',
    name: 'product',
    component: ProductsPage
  },
  {
    path: '/seller',
    name: 'seller',
    component: SellerPage
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage
  }
]
