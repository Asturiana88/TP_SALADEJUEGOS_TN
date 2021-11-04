import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPuntuacionComponent } from './tabla-puntuacion.component';

describe('TablaPuntuacionComponent', () => {
  let component: TablaPuntuacionComponent;
  let fixture: ComponentFixture<TablaPuntuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPuntuacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPuntuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
