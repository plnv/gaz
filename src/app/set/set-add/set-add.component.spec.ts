import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAddComponent } from './set-add.component';

describe('SetAddComponent', () => {
  let component: SetAddComponent;
  let fixture: ComponentFixture<SetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
