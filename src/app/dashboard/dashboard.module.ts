import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
class DashboardModule { }

export { DashboardModule }
