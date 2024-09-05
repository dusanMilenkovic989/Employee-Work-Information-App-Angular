import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EmployeesComponent } from './employees/employees.component'
import { ROUTER_PATHS } from '../constants/routerPaths'

const ROUTES: Routes = [
    { path: ROUTER_PATHS.index, redirectTo: `/${ROUTER_PATHS.dashboard}`, pathMatch: 'full' },
    { path: ROUTER_PATHS.dashboard, component: DashboardComponent },
    { path: ROUTER_PATHS.employeesInfo, component: EmployeesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
class AppRoutingModule { }

export { AppRoutingModule }
