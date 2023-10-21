import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListariconoComponent } from './listaricono.component';

describe('ListariconoComponent', () => {
  let component: ListariconoComponent;
  let fixture: ComponentFixture<ListariconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListariconoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListariconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
