import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-management/employee-list/employee-list.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeListComponent, canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
