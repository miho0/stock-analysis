import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";
import {AutoCompleteStockData} from "../interfaces/AutoCompleteStockData";

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})

export class StockInfoComponent implements OnInit {

  public symbol: String = "";
  public options: AutoCompleteStockData[] = []

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  public updateOptions() {
    this.http.autoComplete(this.symbol).subscribe(
      (res: any) => {
        const matches = res.bestMatches
        if (matches.length > 0) {
          this.options = []
          matches.forEach((match: any) => {
            this.options.push({symbol: match["1. symbol"], name: match["2. name"]})
          })
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }

  public search(symbol: any) {
      this.http.getOverview(symbol).subscribe(
        (res: any) => {
          console.log(res)
          if (res.Symbol) {
            console.log(res)
          } else {
            console.log("The symbol doesn't exist")
          }
        },
        (err) => {
          console.log(err)
        }
      )
  }

  // public search() {
  //   this.http.getIncomeStatement(this.symbol).subscribe(
  //     (res: any) => {
  //       if (res.symbol) {
  //         console.log(res)
  //       } else {
  //         console.log("The symbol doesn't exist")
  //       }
  //     },
  //     (err) => {
  //       console.log(err)
  //     }
  //   )
  // }
}
