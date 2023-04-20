import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGestorComponent } from './actualizar-gestor.component';

describe('ActualizarGestorComponent', () => {
  let component: ActualizarGestorComponent;
  let fixture: ComponentFixture<ActualizarGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
