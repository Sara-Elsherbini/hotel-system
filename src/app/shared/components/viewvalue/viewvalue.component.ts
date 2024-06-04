import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewvalue',
  templateUrl: './viewvalue.component.html',
  styleUrls: ['./viewvalue.component.scss']
})
export class ViewvalueComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() icon!: string;
}
