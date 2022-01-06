/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaintananceComponent } from './maintanance.component';

describe('MaintananceComponent', () => {
  let component: MaintananceComponent;
  let fixture: ComponentFixture<MaintananceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintananceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
