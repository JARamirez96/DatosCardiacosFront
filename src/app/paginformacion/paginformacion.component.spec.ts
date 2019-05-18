import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginformacionComponent } from './paginformacion.component';

describe('PaginformacionComponent', () => {
  let component: PaginformacionComponent;
  let fixture: ComponentFixture<PaginformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
