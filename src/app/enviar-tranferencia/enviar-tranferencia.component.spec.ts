import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarTranferenciaComponent } from './enviar-tranferencia.component';

describe('EnviarTranferenciaComponent', () => {
  let component: EnviarTranferenciaComponent;
  let fixture: ComponentFixture<EnviarTranferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarTranferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarTranferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
