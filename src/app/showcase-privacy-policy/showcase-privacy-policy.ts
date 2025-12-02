import { Component } from '@angular/core'
import { environment } from '../../environments/environment'

@Component({
  selector: 'showcase-privacy-policy',
  imports: [],
  template: `
    <div
      class="bg-sky-700 rounded-md shadow-2xl mt-8 max-w-prose text-slate-100 px-6 pt-8 pb-12 flex flex-col gap-4 [&_h1]:text-3xl [&_h2]:text-xl [&_h1]:font-semibold [&_h2]:font-semibold [&_h2]:text-sky-200 [&_h1]:mb-2 [&_p]:mb-4 [&_i]:not-italic [&_h1]:text-sky-100"
    >
      <h1>Privacy Policy – Test Gallery</h1>

      <h2>Developer</h2>
      <p>
        This Privacy Policy explains how Bryan Rauen (the “Developer”) collects, uses, and protects
        information in connection with the Test Gallery application. You can contact the Developer
        at <i class="font-mono">scalene-marinas.06@icloud.com</i> with any questions regarding this policy.
      </p>

      <h2>Information Collected</h2>
      <p>
        Test Gallery retrieves listings and related information exclusively from the Etsy shop owned
        by the Developer via the Etsy API. The app only accesses this data to display the
        Developer’s artwork in a gallery view. No personal information from Etsy members or other
        users is collected.
      </p>

      <h2>How Information is Used</h2>
      <p>
        Data accessed through the Etsy API is used solely to render artwork listings from the
        Developer’s shop in the gallery for testing and demonstration purposes. No data is used for
        any other purpose.
      </p>

      <h2>Data Sharing</h2>
      <p>
        No information retrieved from the Etsy API or any other user data is shared with third
        parties.
      </p>

      <h2>Data Retention</h2>
      <p>
        Information accessed from the Etsy API is not stored permanently. Data is only used
        temporarily to render listings in the gallery views.
      </p>

      <h2>User Rights</h2>
      <p>
        Although this app does not collect personal data, you may contact the Developer at <i class="font-mono">scalene-marinas.06@icloud.com</i> with questions regarding the Etsy shop data used in this app.
      </p>

      <h2>Policy Updates</h2>
      <p>
        This Privacy Policy may be updated from time to time. Continued use of the app constitutes
        acceptance of any changes.
      </p>

      <a [href]="based('/showcase')" class="text-amber-500 font-semibold">Back to App</a>
    </div>
  `,
})
export class ShowcasePrivacyPolicy {
  based = environment.based
}
