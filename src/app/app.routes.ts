import { Routes } from '@angular/router';
import { NetworkRadioLicenseComponent } from './network-radio-license/network-radio-license.component';

export const routes: Routes = [
  { path: '', component: NetworkRadioLicenseComponent },
  { path: '**', redirectTo: '' }
];
