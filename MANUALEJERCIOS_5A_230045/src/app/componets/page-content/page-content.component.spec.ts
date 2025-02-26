import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGECONTENTComponent } from './page-content.component';

describe('PAGECONTENTComponent', () => {
  let component: PAGECONTENTComponent;
  let fixture: ComponentFixture<PAGECONTENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PAGECONTENTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAGECONTENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
