import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyNavComponent } from './photography-nav.component';

describe('PhotographyNavComponent', () => {
  let component: PhotographyNavComponent;
  let fixture: ComponentFixture<PhotographyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
