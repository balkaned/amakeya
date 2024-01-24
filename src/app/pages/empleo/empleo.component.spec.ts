import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleoComponent } from './empleo.component';

describe('EmpleoComponent', () => {
  let component: EmpleoComponent;
  let fixture: ComponentFixture<EmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
