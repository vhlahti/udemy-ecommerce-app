import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    FontAwesomeModule,
    CdkStepperModule,
    RouterModule
  ],
  exports: [
    NgbPaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    NgbCarouselModule,
    OrderTotalsComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    TextInputComponent,
    CdkStepperModule,
    StepperComponent,
    BasketSummaryComponent
  ]
})
export class SharedModule { }
