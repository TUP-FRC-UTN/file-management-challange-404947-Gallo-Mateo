import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosAccionesComponent } from './archivos-acciones.component';

describe('ArchivosAccionesComponent', () => {
  let component: ArchivosAccionesComponent;
  let fixture: ComponentFixture<ArchivosAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivosAccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivosAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
