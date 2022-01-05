import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaExplorarComponent } from './ruta-explorar.component';

describe('RutaExplorarComponent', () => {
  let component: RutaExplorarComponent;
  let fixture: ComponentFixture<RutaExplorarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaExplorarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
