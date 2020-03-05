import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnblockSellerComponent } from './block-unblock-seller.component';

describe('BlockUnblockSellerComponent', () => {
  let component: BlockUnblockSellerComponent;
  let fixture: ComponentFixture<BlockUnblockSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockUnblockSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUnblockSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
