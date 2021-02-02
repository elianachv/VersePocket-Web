import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFuncionalidadesComponent } from './seccion-funcionalidades.component';

describe('SeccionFuncionalidadesComponent', () => {
  let component: SeccionFuncionalidadesComponent;
  let fixture: ComponentFixture<SeccionFuncionalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionFuncionalidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionFuncionalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
