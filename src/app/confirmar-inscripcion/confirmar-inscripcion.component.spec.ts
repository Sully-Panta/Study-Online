import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarInscripcionComponent } from './confirmar-inscripcion.component';

describe('ConfirmarInscripcionComponent', () => {
  let component: ConfirmarInscripcionComponent;
  let fixture: ComponentFixture<ConfirmarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
