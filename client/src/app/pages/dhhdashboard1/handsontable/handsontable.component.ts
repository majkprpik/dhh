import { Component } from '@angular/core';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'ngx-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss'],
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class HandsontableComponent {
  dataset: any[] = Handsontable.helper.createSpreadsheetData(30, 30);
  public settings: any;
  public funCalls: object[];
  public columns: object[];
  public rows: object[];

  constructor() {
    this.funCalls = [];
    this.columns = [
      { data: 'name', title: 'Name'},
      { data: 'id', title: 'ID'},
      { data: 'age', title: 'age'},
    ];
    this.rows = [
      { data: 'name', title: 'Name'},
      { data: 'id', title: 'ID'},
      { data: 'age', title: 'age'},
    ];
    this.settings = {
        afterColumnMove: (key, target, newPosition) => {
          this.funCalls.push({
            funcName: 'moveColumns',
            params: [target, newPosition],
          });
        }, autoWrapRow: true,
        height: 500, manualColumnMove: true, manualColumnResize: true,
        manualRowMove: true, manualRowResize: true, maxRows: 20,
        rowHeaders: true, width: 1150, contextMenu: true,
        bindRowsWithHeaders: 'strict',
    };
  }
  public funCaller() {
    for (const A of this.funCalls) {
      if (A['funcName'] === 'moveColumns') {
        const columns = A['params'][0];
        const target = A['params'][1];
        Handsontable.plugins.ManualColumnMove.moveColumns(columns, target);
      }
    }
  }
}
