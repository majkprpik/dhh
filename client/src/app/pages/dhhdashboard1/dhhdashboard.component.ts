import { Component } from '@angular/core';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'ngx-dhhdashboard',
  styleUrls: ['./dhhdashboard.component.scss'],
  templateUrl: './dhhdashboard.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class DhhDashboard1Component {
  dataset: any[] = Handsontable.helper.createSpreadsheetData(30, 30)
}
