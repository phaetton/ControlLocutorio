import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrariconoComponent } from './registraricono.component';

describe('RegistrariconoComponent', () => {
  let component: RegistrariconoComponent;
  let fixture: ComponentFixture<RegistrariconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrariconoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrariconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
