import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeDetallesComponent } from './mensaje-detalles.component';

describe('MensajeDetallesComponent', () => {
  let component: MensajeDetallesComponent;
  let fixture: ComponentFixture<MensajeDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
