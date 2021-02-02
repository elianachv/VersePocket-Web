import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCategoriaComponent } from './creacion-categoria.component';

describe('CreacionCategoriaComponent', () => {
  let component: CreacionCategoriaComponent;
  let fixture: ComponentFixture<CreacionCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
