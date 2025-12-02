import { Routes } from '@angular/router'
import { WelcomePage } from './welcome-page/welcome-page'
import { ProductDetails } from './product-details/product-details'
import { ProductIndex } from './product-index/product-index'
import { ProductShowcase } from './product-showcase/product-showcase'
import { ShowcasePrivacyPolicy } from './showcase-privacy-policy/showcase-privacy-policy'

export const routes: Routes = [
  {
    path: '',
    title: 'Welcome to the Demo',
    component: WelcomePage,
  },
  {
    path: 'showcase',
    title: 'Test Gallery',
    component: ProductShowcase,
  },
  {
    path: 'showcase/privacy',
    title: 'Privacy Policy',
    component: ShowcasePrivacyPolicy,
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
