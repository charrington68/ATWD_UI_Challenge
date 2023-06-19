import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('containerDiv' , {read: ElementRef, static: true}) container: ElementRef;
  @ViewChild('buttonDiv' , {read: ElementRef, static: true}) buttonDiv: ElementRef;
  title = 'wfui';
  buttonText = ['Click Me!', 'Just Missed!', 'Try Again!', 'Almost Got It!', 'SOOOO Close!', 'Gotta Be Faster!', 'Once More!', 'Sorry!'];
  buttonIcon = ['home', 'star', 'favorite', 'key', 'info', 'code', 'bug_report'];
  buttonId = 0;
  iconId = 4;
  topVal = 50;
  top = '50px';
  leftVal = 100;
  left = '100px';
  vertMin = 50;
  horizMin = 121;

  mouseOver(): void {
    const containerRect = this.container.nativeElement.getBoundingClientRect();
    console.log(containerRect);
    const buttonRect = this.buttonDiv.nativeElement.getBoundingClientRect();
    console.log(buttonRect);
    const minVertMove = Math.floor(buttonRect.height) + 1;
    const minHorizMove = Math.floor(buttonRect.width) + 1;
    const maxVertLoc = containerRect.height - minVertMove - 10;
    const maxHorzLoc = containerRect.width - minHorizMove - 10;
    this.topVal = this.getNewCoord(this.topVal, minVertMove, maxVertLoc);
    this.top = this.topVal.toString() + 'px';
    this.leftVal = this.getNewCoord(this.leftVal, minHorizMove, maxHorzLoc);
    this.left = this.leftVal.toString() + 'px';
    this.buttonId = this.randomIntFromInterval(0, this.buttonText.length - 1);
    this.iconId = this.randomIntFromInterval(0, this.buttonIcon.length - 1);
  }

  getNewCoord(current: number, width: number, max: number): number {
    let coordOk = false;
    let newCoord = 0;
    while (!coordOk) {
      newCoord = this.randomIntFromInterval(0, max);
      if (newCoord + width < current) {
        coordOk = true;
      }
      if (newCoord > current + width) {
        coordOk = true;
      }
      }
    return newCoord;
  }

  randomIntFromInterval(min: number, max: number) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
