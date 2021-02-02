import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDescripcionComponent } from './seccion-descripcion.component';

describe('SeccionDescripcionComponent', () => {
  let component: SeccionDescripcionComponent;
  let fixture: ComponentFixture<SeccionDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
