import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { BehaviorSubject, defer, from, map, shareReplay, Subject, switchMap, tap } from 'rxjs'

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
  private readonly source = './mock-db.json'

  list = defer(() => this.http.get(this.source).pipe(
    tap(() => console.log('📦 fetched product list')),
    map(db => (db as {products: Product[]}).products),
    shareReplay(1),
  ))

  product(id: string) {
    return this.http.get(this.source).pipe(
      tap(() => console.log('🗳️ fetch made on id', id)),
      map(db => (db as {products: Product[]}).products.find(p => p.id === id)),
      shareReplay(1),
    )
  }
}
