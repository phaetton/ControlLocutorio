import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductofiltradoComponent } from './productofiltrado.component';

describe('ProductofiltradoComponent', () => {
  let component: ProductofiltradoComponent;
  let fixture: ComponentFixture<ProductofiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductofiltradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductofiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
