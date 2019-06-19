import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMeatComponent } from './the-meat.component';

describe('TheMeatComponent', () => {
  let component: TheMeatComponent;
  let fixture: ComponentFixture<TheMeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
