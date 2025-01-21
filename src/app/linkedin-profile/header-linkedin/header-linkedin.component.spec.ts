import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinkedinComponent } from './header-linkedin.component';

describe('HeaderLinkedinComponent', () => {
  let component: HeaderLinkedinComponent;
  let fixture: ComponentFixture<HeaderLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLinkedinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
