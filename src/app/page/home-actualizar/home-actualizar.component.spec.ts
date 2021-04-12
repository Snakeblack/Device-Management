import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActualizarComponent } from './home-actualizar.component';

describe('HomeActualizarComponent', () => {
  let component: HomeActualizarComponent;
  let fixture: ComponentFixture<HomeActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
