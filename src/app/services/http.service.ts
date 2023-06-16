import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: String = "https://www.alphavantage.co/query"
  key: String = "JBSKN89ZX2I3OF63"

  constructor(private http: HttpClient) { }

  public autoComplete(query: String) {
    return this.http.get(this.baseUrl + `?function=SYMBOL_SEARCH&keywords=${query}&apikey=${this.key}`)
  }

  public getOverview(symbol: String) {
    return this.http.get(this.baseUrl + `?function=OVERVIEW&symbol=${symbol}&apikey=${this.key}`)
  }

  public getIncomeStatement(symbol: String) {
    return this.http.get(this.baseUrl + `?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${this.key}`)
  }

}
