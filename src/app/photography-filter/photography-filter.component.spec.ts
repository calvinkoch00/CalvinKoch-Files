import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyFilterComponent } from './photography-filter.component';

describe('PhotographyFilterComponent', () => {
  let component: PhotographyFilterComponent;
  let fixture: ComponentFixture<PhotographyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
