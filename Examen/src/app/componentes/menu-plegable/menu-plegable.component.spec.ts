import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlegableComponent } from './menu-plegable.component';

describe('MenuPlegableComponent', () => {
  let component: MenuPlegableComponent;
  let fixture: ComponentFixture<MenuPlegableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPlegableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
