import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosMostrarComponent } from './archivos-mostrar.component';

describe('ArchivosMostrarComponent', () => {
  let component: ArchivosMostrarComponent;
  let fixture: ComponentFixture<ArchivosMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivosMostrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
