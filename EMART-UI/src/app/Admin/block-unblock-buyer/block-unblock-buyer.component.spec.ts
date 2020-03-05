import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnblockBuyerComponent } from './block-unblock-buyer.component';

describe('BlockUnblockBuyerComponent', () => {
  let component: BlockUnblockBuyerComponent;
  let fixture: ComponentFixture<BlockUnblockBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockUnblockBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUnblockBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
