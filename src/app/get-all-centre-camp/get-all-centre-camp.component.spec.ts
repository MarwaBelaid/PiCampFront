import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCentreCampComponent } from './get-all-centre-camp.component';

describe('GetAllCentreCampComponent', () => {
  let component: GetAllCentreCampComponent;
  let fixture: ComponentFixture<GetAllCentreCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllCentreCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCentreCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
