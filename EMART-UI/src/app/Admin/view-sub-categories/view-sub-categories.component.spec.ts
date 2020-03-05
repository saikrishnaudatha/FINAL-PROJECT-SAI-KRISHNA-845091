import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubCategoriesComponent } from './view-sub-categories.component';

describe('ViewSubCategoriesComponent', () => {
  let component: ViewSubCategoriesComponent;
  let fixture: ComponentFixture<ViewSubCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
