
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import hostnames from '@core/constants/hostnames.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public useLocalJSON: boolean = true;

  private _summaryData: Array<any> = [];
  public summaryData: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor(
    public http: HttpClient
  ) { }

  getSummary = async (): Promise<void> => {
    const base: string = hostnames.localJSON.BASE;
    const file: string = hostnames.localJSON['get-summary'];
    const url: string = `http://localhost:4200/${ base }${ file }`;

    try {
      const data: any = await this.http.get<Array<any>>(url).toPromise();
      this._summaryData = data;
      this.summaryData.next(data);
    } catch (error) {
      console.log(error);
      this.summaryData.next([]);
    }
  };

  getSummaryByIndex = (index: number): any => {
    return this._summaryData[index];
  };

}
