import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { ADMIN_STATES } from './admin.state.js';
import { AdminComponent } from './admin.component.js';
import { ResetComponent } from './reset/reset.component.js';

// angular2 module
@NgModule({
  imports: [
    UIRouterModule.forChild({ states: ADMIN_STATES })
  ],
  declarations: [AdminComponent, ResetComponent]
})
export default class AdminModule { }
