import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableComponent } from './components/table/table.component'
import { ChartComponent } from './components/chart/chart.component'

@NgModule({
    declarations: [
        TableComponent,
        ChartComponent
    ],
    imports: [
        CommonModule
    ],
    exports:
    [
        TableComponent,
        ChartComponent
    ]
})
class GeneralModule { }

export { GeneralModule }
