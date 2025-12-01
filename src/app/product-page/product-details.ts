import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product-service'
import { AsyncPipe, CurrencyPipe } from '@angular/common'

@Component({
  selector: 'product-details',
  imports: [AsyncPipe, CurrencyPipe],
  template: `
    @let product = product$ | async;

    <div class="bg-sky-700 p-4 shadow-2xl text-sky-50 flex flex-col gap-4 max-w-prose rounded-md">
      @if(!product) {
      <h1 class="text-3xl font-bold text-red-200">Product Not Found</h1>
      <p>Sorry, this product was not found.</p>

      } @else {

      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque fugiat quas enim
        veritatis pariatur delectus et minus quidem nisi.
      </p>
      <em class="text-emerald-200"
        >Only {{ product.price | currency : 'USD' : 'symbol' : '1.2-2' }}!</em
      >

      }
      <a href="./products" class="text-amber-500 font-semibold">Back to list</a>
    </div>
  `,
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute)
  private readonly id = this.route.snapshot.paramMap.get('id') || ''
  product$ = inject(ProductService).product(this.id)
}
