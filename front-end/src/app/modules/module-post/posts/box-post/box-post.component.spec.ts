import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPostComponent } from './box-post.component';

describe('BoxPostComponent', () => {
  let component: BoxPostComponent;
  let fixture: ComponentFixture<BoxPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
