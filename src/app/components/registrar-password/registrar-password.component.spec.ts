import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPasswordComponent } from './registrar-password.component';

describe('RegistrarPasswordComponent', () => {
  let component: RegistrarPasswordComponent;
  let fixture: ComponentFixture<RegistrarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
