import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HomeActualizarComponent } from './home-actualizar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from'@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeActualizarComponent', () => {
  let component: HomeActualizarComponent;
  let fixture: ComponentFixture<HomeActualizarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActualizarComponent ],
      imports: [
        MatButtonModule,
        MatInputModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('We should have 18 Inputs', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('input').length).toBe(18);
  })
});
