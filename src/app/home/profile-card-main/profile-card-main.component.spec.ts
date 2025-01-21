import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardMainComponent } from './profile-card-main.component';

describe('ProfileCardMainComponent', () => {
  let component: ProfileCardMainComponent;
  let fixture: ComponentFixture<ProfileCardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCardMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
