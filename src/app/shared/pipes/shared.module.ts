import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { GridFilterPipe } from "../pipes/grid-filter.pipe";
import { CamelCasePipe } from "../pipes/camel-case.pipe";

@NgModule({
  declarations: [
    GridFilterPipe,
    CamelCasePipe
  ],
  exports: [
    RouterModule,
    GridFilterPipe,
    CamelCasePipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
