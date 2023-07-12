import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCentreCampComponent } from './update-centre-camp.component';

describe('UpdateCentreCampComponent', () => {
  let component: UpdateCentreCampComponent;
  let fixture: ComponentFixture<UpdateCentreCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCentreCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCentreCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
