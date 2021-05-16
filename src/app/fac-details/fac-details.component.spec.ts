import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDetailsComponent } from './fac-details.component';

describe('FacDetailsComponent', () => {
  let component: FacDetailsComponent;
  let fixture: ComponentFixture<FacDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
