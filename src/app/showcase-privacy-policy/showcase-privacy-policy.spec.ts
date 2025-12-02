import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasePrivacyPolicy } from './showcase-privacy-policy';

describe('ShowcasePrivacyPolicy', () => {
  let component: ShowcasePrivacyPolicy;
  let fixture: ComponentFixture<ShowcasePrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcasePrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasePrivacyPolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
