import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photography-nav',
  templateUrl: './photography-nav.component.html',
  styleUrls: ['./photography-nav.component.css']
})
export class PhotographyNavComponent implements OnInit {
  @ViewChild('fixedContainer') fixedContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onScrolledPastLanding(isScrolledPast: boolean) {
    if (isScrolledPast) {
      this.fixedContainer.nativeElement.classList.add('scrolled');
    } else {
      this.fixedContainer.nativeElement.classList.remove('scrolled');
    }
  }
}