import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFinalComponent } from './info-final.component';

describe('InfoFinalComponent', () => {
  let component: InfoFinalComponent;
  let fixture: ComponentFixture<InfoFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
