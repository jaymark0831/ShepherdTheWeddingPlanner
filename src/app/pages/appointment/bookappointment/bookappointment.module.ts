import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';


import { BookappointmentPageRoutingModule } from './bookappointment-routing.module';

import { BookappointmentPage } from './bookappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookappointmentPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [BookappointmentPage]
})
export class BookappointmentPageModule {}