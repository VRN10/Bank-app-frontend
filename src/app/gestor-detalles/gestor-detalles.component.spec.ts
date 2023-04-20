import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorDetallesComponent } from './gestor-detalles.component';

describe('GestorDetallesComponent', () => {
  let component: GestorDetallesComponent;
  let fixture: ComponentFixture<GestorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
