import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BREADCRUMBComponent } from './breadcrumb.component';

describe('BREADCRUMBComponent', () => {
  let component: BREADCRUMBComponent;
  let fixture: ComponentFixture<BREADCRUMBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BREADCRUMBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BREADCRUMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
