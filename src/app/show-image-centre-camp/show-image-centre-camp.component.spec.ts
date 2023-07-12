import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowImageCentreCampComponent } from './show-image-centre-camp.component';

describe('ShowImageCentreCampComponent', () => {
  let component: ShowImageCentreCampComponent;
  let fixture: ComponentFixture<ShowImageCentreCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowImageCentreCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowImageCentreCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
