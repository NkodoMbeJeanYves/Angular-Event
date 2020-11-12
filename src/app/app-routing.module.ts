import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEventComponent } from './event/components/new-event/new-event.component';
import { SingleGuestComponent } from './event/components/single-guest/single-guest.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {path: 'new-event', component: NewEventComponent},
  {path: '', component: EventListComponent},
  {path: 'sample', component: SampleComponent},
  { path: '**', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
