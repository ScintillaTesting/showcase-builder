import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { defer, shareReplay, tap } from 'rxjs'

interface Product {
  id: string
  name: string
  price: number
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient)
  private readonly source = 'http://localhost:3000'

  list = defer(() => this.http.get<Product[]>(`${this.source}/products`).pipe(
    tap(() => console.log('📦 fetched product list')),
    shareReplay(1),
  ))

  product(id: string) {
    return this.http.get<Product>(`${this.source}/products/${id}`).pipe(
      tap(x => console.log('🗳️ fetch made on id', id, 'gave result', x)),
      shareReplay(1),
    )
  }
}
