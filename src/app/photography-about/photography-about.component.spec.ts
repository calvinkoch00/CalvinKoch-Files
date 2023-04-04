import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyAboutComponent } from './photography-about.component';

import { Ck_logo_svgComponent } from 'src/assets/ck_logo_svg/ck_logo_svg.component';

describe('PhotographyAboutComponent', () => {
  let component: PhotographyAboutComponent;
  let fixture: ComponentFixture<PhotographyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
