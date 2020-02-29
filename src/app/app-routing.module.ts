import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { PlaceappointmentComponent } from './views/placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './views/viewappointment/viewappointment.component';
import { SidenavComponent } from './sidenav/sidenav.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "placeappointment",
    component: PlaceappointmentComponent,
    data: {
      title: "Placeappointment"
    }
  },
  {
    path: "viewappointment",
    component: ViewappointmentComponent,
    data: {
      title: "Viewappointment"
    }
  },
  {
    path: "contactus",
    component: ContactusComponent,
    data: {
      title: "Contactus"
    }
  },
  {
    path: "sidenav",
    component: SidenavComponent,
    data: {
      title: "Sidenav"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
