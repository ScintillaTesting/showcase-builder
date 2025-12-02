import { Component } from '@angular/core'
import { environment } from '../../environments/environment'

@Component({
  selector: 'product-showcase',
  imports: [],
  template: `
  <div class="bg-sky-700 rounded-md shadow-2xl mt-8 max-w-prose text-slate-100 px-6 pt-8 pb-12 flex flex-col gap-4">
    <h1 class="text-3xl font-semibold text-sky-100 mb-2">Test Gallery Placeholder</h1>
    <p>This is a placeholder page for a small project testing the Etsy API by showcasing artwork from my shop. The app will retrieve listings and display them in a gallery view for testing and demonstration purposes only.</p>
    <p class="mb-6">Thanks for visiting!</p>

    <p>NOTE: The term 'Etsy' is a trademark of Etsy, Inc. This Application uses Etsy's API, but is not endorsed or certified by Etsy.</p>
    <p>DISCLAIMER: THIS APPLICATION IS SOLELY PROVIDED BY BRYAN RAUEN (THE “APPLICATION DEVELOPER”). YOU ACKNOWLEDGE THAT ETSY, INC. AND ITS AFFILIATES ARE NOT THE APPLICATION DEVELOPER, DO NOT PROVIDE THE APPLICATION SERVICE, AND MAKE NO WARRANTIES OF ANY KIND WITH RESPECT TO THE APPLICATION OR DATA ACCESSED THROUGH IT.</p>

    <p class="mb-4">By using the App, you agree to the terms of our <a class="text-amber-500 font-semibold" [href]="based('/showcase/privacy')">Privacy Policy</a>.</p>

    <button (click)="onAccept()" class="">Accept and Continue</button>

  </div>
  `,
})
export class ProductShowcase {
  onAccept() {
    alert('Thank you. There is no further content at this time.')
  }
  based = environment.based
}
