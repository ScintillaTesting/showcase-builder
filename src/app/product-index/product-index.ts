import { Component, inject } from '@angular/core'
import { ProductList } from '../product-list/product-list'

@Component({
  selector: 'app-product-index',
  imports: [ProductList],
  template: `
    <div class="bg-sky-700 p-4 shadow-2xl text-sky-100 flex flex-col gap-4 max-w-prose rounded-md">
      <h1 class="text-3xl font-bold">Product Listings</h1>
      <product-list />
    </div>
  `,
})
export class ProductIndex {}
