import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'welcome-page',
  imports: [],
  template: `
    <div class="max-w-prose pt-4 flex flex-col gap-8">
    <h1 class="text-3xl font-bold">Welcome!</h1>
    <h2 class="text-sky-300 text-xl">{{mode}}</h2>
    <p>Welcome to the artwork showcase demo.</p>
  </div>
  `,
})
export class WelcomePage {
  mode = environment.mode
}
