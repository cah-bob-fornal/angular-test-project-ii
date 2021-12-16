import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  index: number = -1;
  data: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const stringIndex: string = params.get('index') || '-1';
      this.index = parseInt(stringIndex);
      this.data = this.api.getSummaryByIndex(this.index);
    });
  }

}
