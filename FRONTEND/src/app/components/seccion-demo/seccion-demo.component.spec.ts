import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDemoComponent } from './seccion-demo.component';

describe('SeccionDemoComponent', () => {
  let component: SeccionDemoComponent;
  let fixture: ComponentFixture<SeccionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
