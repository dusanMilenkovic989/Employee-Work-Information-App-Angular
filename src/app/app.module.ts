import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import type { AppState } from '../types/models/app.state.model'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { GeneralModule } from './general/general.module'
import { EmployeesModule } from './employees/employees.module'
import { employeeReducer } from './employees/employees.reducer'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot<AppState>({ employeeEntryDataCollection: employeeReducer }),
        CoreModule,
        GeneralModule,
        DashboardModule,
        EmployeesModule,
        StoreDevtoolsModule.instrument()
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
})
class AppModule { }

export { AppModule }
