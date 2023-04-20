import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaDetallesComponent } from './transferencia-detalles.component';

describe('TransferenciaDetallesComponent', () => {
  let component: TransferenciaDetallesComponent;
  let fixture: ComponentFixture<TransferenciaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
