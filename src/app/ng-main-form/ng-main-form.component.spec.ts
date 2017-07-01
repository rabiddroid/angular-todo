import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMainFormComponent } from './ng-main-form.component';

describe('NgMainFormComponent', () => {
  let component: NgMainFormComponent;
  let fixture: ComponentFixture<NgMainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
