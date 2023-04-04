/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ck_logo_svgComponent } from './ck_logo_svg.component';

describe('Ck_logo_svgComponent', () => {
  let component: Ck_logo_svgComponent;
  let fixture: ComponentFixture<Ck_logo_svgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ck_logo_svgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ck_logo_svgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
