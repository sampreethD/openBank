import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSliderChange } from '@angular/material';
import { coerceNumberProperty } from '@angular/cdk/coercion';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('tenure', { static: false }) tenure: ElementRef;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10000000;
  min = 1000;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  value1 = 0;
  vertical = false;
  loanAmount = 0;
  emiAmount = 0;
  // tslint:disable-next-line: variable-name
  private _tickInterval = 1;
  existingEmi = 0;
  tenureList = [3,4,5,6];

  ngOnInit() {
  }

  onSliderChange(event: MatSliderChange, key) {
    console.log(this.tenure);
    switch (key) {
      case 'value': this.value = event.value;
        break;
      case 'value1': this.value1 = event.value;
        break;
    }
    if (this.value > 0 && this.value1 > 0) {
      if (this.value > this.value1) {
        this.loanAmount = this.value - this.value1;
        this.emiAmount = this.value / 10;
      } else {
        this.loanAmount = 0;
        this.emiAmount = 0;
      }
    }

  }


  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }

}
