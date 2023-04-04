import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PhotographyNavComponent } from '../photography-nav/photography-nav.component';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  @ViewChild('landing') landing!: ElementRef;
  @ViewChild(PhotographyNavComponent) navComponent!: PhotographyNavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const landingHeight = this.landing.nativeElement.offsetHeight;
  const landingTop = this.landing.nativeElement.offsetTop;
  const landingBottom = landingHeight + landingTop - 100;
  const windowHeight = window.innerHeight - 100;

  if (window.pageYOffset > Math.min(landingBottom, windowHeight)) {
    this.navComponent.onScrolledPastLanding(true);
  } else {
    this.navComponent.onScrolledPastLanding(false);
  }
}
}