import { Routes } from '@angular/router'
import { WelcomePage } from './welcome-page/welcome-page'
import { ProductDetails } from './product-page/product-details'
import { ProductIndex } from './product-index/product-index'

export const routes: Routes = [
  {
    path: '',
    title: 'Welcome to the Demo',
    component: WelcomePage,
  },
  {
    path: 'products/:id',
    title: 'Product View',
    component: ProductDetails,
  },
  {
    path: 'products',
    title: 'Product Index',
    component: ProductIndex,
  },
]
