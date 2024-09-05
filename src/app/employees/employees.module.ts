import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { EmployeesComponent } from './employees.component'
import { GeneralModule } from '../general/general.module'
import { EmployeesEffects } from './employees.effects'

@NgModule({
    declarations: [
        EmployeesComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forRoot([EmployeesEffects]),
        GeneralModule
    ]
})
class EmployeesModule { }

export { EmployeesModule }