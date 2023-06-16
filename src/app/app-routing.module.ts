import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockInfoComponent} from "./stock-info/stock-info.component";

const routes: Routes = [
  {path: "", component: StockInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
