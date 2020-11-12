import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleGuestComponent } from './event/components/single-guest/single-guest.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { NewEventComponent } from './event/components/new-event/new-event.component';
import { SampleComponent } from './sample/sample.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './services/shared-data.service';
import { BuilderService } from './services/builder.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

const toastrConfig = {
  timeOut: 3000,
  progressBar: true,
  positionClass: 'toast-up-left',
  titleClass: '',
  messageClass: '',
  enableHtml: true
};



@NgModule({
  declarations: [
    AppComponent,
    SingleGuestComponent,
    EventListComponent,
    NewEventComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(toastrConfig),

  ],
  providers: [
    SharedDataService,
    BuilderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
