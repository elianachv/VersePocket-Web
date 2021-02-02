import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSumateComponent } from './seccion-sumate.component';

describe('SeccionSumateComponent', () => {
  let component: SeccionSumateComponent;
  let fixture: ComponentFixture<SeccionSumateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionSumateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionSumateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
