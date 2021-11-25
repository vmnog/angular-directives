import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHightlight]",
})
export class BetterHightlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHightlight") highLightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "yellow"
    );
  }

  @HostListener("mouseenter") mousehover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      this.highLightColor
    );
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      this.defaultColor
    );
  }
}
