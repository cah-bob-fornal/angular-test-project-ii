
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  data: Array<any> = [];
  columns: Array<string> = [
    "name", "email", "position"
  ];

  structure: Array<any> = [
    { title: 'Name', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Position', key: 'position' }
  ]

  constructor(
    public api: ApiService,
    public router: Router  ) {
    this.api.summaryData.subscribe(this.handleSummaryData.bind(this));
  }

  ngOnInit(): void {
    this.api.getSummary();
  }

  handleSummaryData = (data: Array<any>): void => {
    this.data = data;
  };

  handleCellClick = (struct: any, element: any) => {
    console.log(struct, element);
    let index = 0;
    for (let i = 0, len = this.data.length; i < len; i++) {
      if (element.email === this.data[i].email) {
        index = i;
        break;
      }
    }
    this.triggerOpenDetail(index);
  };

  triggerOpenDetail = (index: number): void => {
    const url = this.router.serializeUrl(this.router.createUrlTree([ `/detail/${ index }` ]));
    this.router.navigateByUrl(url);
  };

}
