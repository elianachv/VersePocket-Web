import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPrincipalComponent } from './carrusel-principal.component';

describe('CarruselPrincipalComponent', () => {
  let component: CarruselPrincipalComponent;
  let fixture: ComponentFixture<CarruselPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
