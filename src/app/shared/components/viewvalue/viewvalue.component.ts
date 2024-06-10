import { PercentPipe } from '@angular/common';
import { Component, Input, Pipe, TemplateRef } from '@angular/core';

type _PIPE = "percent" | "currency" | 'date' | 'upperCase' | "titlecase";

@Component({
  selector: 'app-viewvalue',
  templateUrl: './viewvalue.component.html',
  styleUrls: ['./viewvalue.component.scss']
})
export class ViewvalueComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() icon!: string;
  @Input() pipe!: _PIPE;
  @Input() customClass = "";
}
