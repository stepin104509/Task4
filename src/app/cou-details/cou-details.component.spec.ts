import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouDetailsComponent } from './cou-details.component';

describe('CouDetailsComponent', () => {
  let component: CouDetailsComponent;
  let fixture: ComponentFixture<CouDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
