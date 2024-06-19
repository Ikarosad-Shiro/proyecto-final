import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material'; // Propiedad title añadida

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  scrollToImages() {
    const imagesSection = this.elementRef.nativeElement.querySelector('.images-section');
    imagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
