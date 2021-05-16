import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CWFDetailsComponent } from './cwfdetails.component';

describe('CWFDetailsComponent', () => {
  let component: CWFDetailsComponent;
  let fixture: ComponentFixture<CWFDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CWFDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CWFDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
