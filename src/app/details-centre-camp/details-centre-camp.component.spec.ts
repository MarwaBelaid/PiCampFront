import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCentreCampComponent } from './details-centre-camp.component';

describe('DeleteCentreCampComponent', () => {
  let component: DetailsCentreCampComponent;
  let fixture: ComponentFixture<DetailsCentreCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCentreCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCentreCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
