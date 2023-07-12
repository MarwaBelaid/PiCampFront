import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterActivityComponent } from './affecter-activity.component';

describe('AffecterActivityComponent', () => {
  let component: AffecterActivityComponent;
  let fixture: ComponentFixture<AffecterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
