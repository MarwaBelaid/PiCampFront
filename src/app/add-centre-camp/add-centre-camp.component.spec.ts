import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCentreCampComponent } from './add-centre-camp.component';

describe('AddCentreCampComponent', () => {
  let component: AddCentreCampComponent;
  let fixture: ComponentFixture<AddCentreCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCentreCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCentreCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
