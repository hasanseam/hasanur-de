import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeCardComponent } from './leetcode-card.component';

describe('LeetcodeCardComponent', () => {
  let component: LeetcodeCardComponent;
  let fixture: ComponentFixture<LeetcodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeetcodeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeetcodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
