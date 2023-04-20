import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarGestorComponent } from './registrar-gestor.component';

describe('RegistrarGestorComponent', () => {
  let component: RegistrarGestorComponent;
  let fixture: ComponentFixture<RegistrarGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
