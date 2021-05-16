import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CWNFDetailsComponent } from './cwnfdetails.component';

describe('CWNFDetailsComponent', () => {
  let component: CWNFDetailsComponent;
  let fixture: ComponentFixture<CWNFDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CWNFDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CWNFDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
