import { Component, ViewChild, Renderer, Input, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'page-accordion',
  templateUrl: 'accordion.html',
})

export class AccordionPage {
  @Input() title: title;
  @Input() content: Array<Object>;
  @Input() buttons: Array<button>;
  @Output() action = new EventEmitter();
  property: Array<string> = [];
  expandedCondition: boolean = false;
  @ViewChild("expand") cardExpand: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public renderer: Renderer) { }

  ngOnInit() {
    this.expandedCondition = false;
    for (let i in this.content) {
      this.property = Object.keys(this.content[i])
    }
    this.showDetail();
    this.renderer.setElementStyle(this.cardExpand.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms")
  }

  showDetail() {
    if (this.expandedCondition) {
      this.renderer.setElementStyle(this.cardExpand.nativeElement, "max-height", "500px")
      this.renderer.setElementStyle(this.cardExpand.nativeElement, "padding", "10px 16px")
    } else {
      this.renderer.setElementStyle(this.cardExpand.nativeElement, "max-height", "0px")
      this.renderer.setElementStyle(this.cardExpand.nativeElement, "padding", "0px 16px")
    }
    this.expandedCondition = !this.expandedCondition
  }

  outputAction(type, value) {
    this.action.emit({ type: type, value: value })
  }

}

export interface title {
  title:string,
  subtitle?:string
}

export interface button {
  label : string,
  value : string | number,
  type? : string
}
