import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMensajeComponent } from './actualizar-mensaje.component';

describe('ActualizarMensajeComponent', () => {
  let component: ActualizarMensajeComponent;
  let fixture: ComponentFixture<ActualizarMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
