import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaIndividualComponent } from './categoria-individual.component';

describe('CategoriaIndividualComponent', () => {
  let component: CategoriaIndividualComponent;
  let fixture: ComponentFixture<CategoriaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
