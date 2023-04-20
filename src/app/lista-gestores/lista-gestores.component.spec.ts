import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGestoresComponent } from './lista-gestores.component';

describe('ListaGestoresComponent', () => {
  let component: ListaGestoresComponent;
  let fixture: ComponentFixture<ListaGestoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGestoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGestoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
