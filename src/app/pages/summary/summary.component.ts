
import { Component, OnInit } from '@angular/core';

import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  data: Array<any> = [];

  constructor(
    public api: ApiService
  ) {
    this.api.summaryData.subscribe(this.handleSummaryData.bind(this));
  }

  ngOnInit(): void {
    this.api.getSummary();
  }

  handleSummaryData = (data: Array<any>): void => {
    this.data = data;
  };

}
