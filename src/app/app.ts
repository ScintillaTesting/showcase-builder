import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <nav
      class="bg-slate-200 w-full flex justify-center h-8 items-center gap-4 text-sky-800 font-semibold mb-8"
    >
      <a href="/">Welcome</a>
    </nav>
    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal('showcase-builder')
}
