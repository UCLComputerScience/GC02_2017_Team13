import { Directive, ElementRef, Renderer } from "@angular/core";
import { Content } from "ionic-angular";
@Directive({
  selector: '[hide-fab]',
  host: {
    '(ionScroll)': 'handleScroll($event)'
  }
})
export class HideFabDirective {
  private fabRef;
  private storedScroll: number = 0;
  private threshold: number = 5;

  constructor(public element:ElementRef,public renderer:Renderer) {
    console.log('Hello HideFabDirective Directive');
  }

  ngAfterViewInit() {
    console.log("All Transtition set");
    this.fabRef = this.element.nativeElement.getElementsByClassName("fab")[0];
    this.renderer.setElementStyle(this.fabRef, 'webkitTransition', 'transform 500ms,bottom 500ms');
  }

  handleScroll(event: Content) {
    if (event.scrollTop - this.storedScroll > this.threshold) {
      console.log("Scrolling down");
        this.renderer.setElementStyle(this.fabRef, 'bottom', '-70px');
        this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(.1,.1,.1)');
    } else if (event.scrollTop - this.storedScroll < 0) {
      console.log("Scrolling up");
        this.renderer.setElementStyle(this.fabRef, 'bottom', '10px');
        this.renderer.setElementStyle(this.fabRef, 'webkitTransform', 'scale3d(1,1,1)');
    }
    // console.log(event.scrollTop - this.storedScroll);
    this.storedScroll = event.scrollTop;
  }
}
