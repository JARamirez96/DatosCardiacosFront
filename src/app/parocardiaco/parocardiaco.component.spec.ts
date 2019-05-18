import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParocardiacoComponent } from './parocardiaco.component';

describe('ParocardiacoComponent', () => {
  let component: ParocardiacoComponent;
  let fixture: ComponentFixture<ParocardiacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParocardiacoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParocardiacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
