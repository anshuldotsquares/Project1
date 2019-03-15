import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAGridComponent } from './ctagrid.component';

describe('CTAGridComponent', () => {
  let component: CTAGridComponent;
  let fixture: ComponentFixture<CTAGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTAGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTAGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
