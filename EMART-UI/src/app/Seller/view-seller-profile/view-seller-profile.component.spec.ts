import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellerProfileComponent } from './view-seller-profile.component';

describe('ViewSellerProfileComponent', () => {
  let component: ViewSellerProfileComponent;
  let fixture: ComponentFixture<ViewSellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
