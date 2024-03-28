import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAppView } from './menu-app.view';

describe('MenuAppComponent', () => {
  let component: MenuAppView;
  let fixture: ComponentFixture<MenuAppView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAppView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAppView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
