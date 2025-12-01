import { inject } from '@angular/core'
import { RenderMode, ServerRoute } from '@angular/ssr'
import { ProductService } from './product-service'
import { firstValueFrom } from 'rxjs'

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const service = inject(ProductService)
      const list = await firstValueFrom(service.list)
      return list.map(p => ({id: p.id}))
    },

  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
]
