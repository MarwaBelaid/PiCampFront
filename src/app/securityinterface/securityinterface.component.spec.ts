import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityinterfaceComponent } from './securityinterface.component';

describe('SecurityinterfaceComponent', () => {
  let component: SecurityinterfaceComponent;
  let fixture: ComponentFixture<SecurityinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
