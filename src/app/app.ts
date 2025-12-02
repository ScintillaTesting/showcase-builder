import { Component, inject, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { environment } from '../environments/environment'
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    @if(showNavbar) {
    <nav
      class="bg-slate-200 w-full flex justify-center h-8 items-center gap-4 text-sky-800 font-semibold mb-8"
    >
      <a [href]="based('/')">Welcome</a>
      <a [href]="based('/products')">Products</a>
      <a [href]="based('/showcase')">Showcase</a>
    </nav>
    }
    <router-outlet />
  `,
})
export class App {
  readonly path = inject(Location).path()
  readonly showNavbar = false === this.path.includes('showcase')

  readonly based = environment.based
  protected readonly title = signal('showcase-builder')
}
