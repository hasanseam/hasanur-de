import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionProfileCardComponent } from './suggestion-profile-card.component';

describe('SuggestionProfileCardComponent', () => {
  let component: SuggestionProfileCardComponent;
  let fixture: ComponentFixture<SuggestionProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionProfileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
