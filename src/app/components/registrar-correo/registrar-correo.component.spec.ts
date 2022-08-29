import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCorreoComponent } from './registrar-correo.component';

describe('RegistrarCorreoComponent', () => {
  let component: RegistrarCorreoComponent;
  let fixture: ComponentFixture<RegistrarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
