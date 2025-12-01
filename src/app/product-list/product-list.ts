import { Component, inject } from '@angular/core'
import { ProductService } from '../product-service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'product-list',
  imports: [AsyncPipe],
  template: `
    <table class="[&_th]:px-2 [&_th]:py-1">
      <thead class="bg-sky-800 text-sky-100">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        @for (item of (list | async); track item.id) {

        <tr class="even:bg-sky-100 even:text-sky-600 odd:bg-sky-200 odd:text-sky-700 group">
          <td>
            <a
              [href]="'/products/' + item.id"
              class="group-hover:bg-amber-600 group-hover:text-amber-100 group-hover:underline block px-2"
              >{{ item.id }}</a
            >
          </td>
          <td>
            <a
              [href]="'/products/' + item.id"
              class="group-hover:bg-amber-600 group-hover:text-amber-100 group-hover:underline block"
              >{{ item.name }}</a
            >
          </td>
          <td>
            <a
              [href]="'/products/' + item.id"
              class="group-hover:bg-amber-600 group-hover:text-amber-100 group-hover:underline block ps-2"
              >{{ item.price }}</a
            >
          </td>
        </tr>
        }
      </tbody>
    </table>
  `,
})
export class ProductList {
  readonly list = inject(ProductService).list
}
