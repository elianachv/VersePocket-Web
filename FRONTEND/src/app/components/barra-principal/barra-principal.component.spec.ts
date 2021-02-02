import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPrincipalComponent } from './barra-principal.component';

describe('BarraPrincipalComponent', () => {
  let component: BarraPrincipalComponent;
  let fixture: ComponentFixture<BarraPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
