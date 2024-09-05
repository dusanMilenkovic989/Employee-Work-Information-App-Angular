import type { OnChanges, SimpleChanges } from '@angular/core'
import { Component, Input } from '@angular/core'
import { TableData } from '../../../../types/table.component.type'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
})
class TableComponent<T> implements OnChanges
{ 
    @Input({ required: true }) public dataForRendering: TableData<T>[] = []
    @Input({ required: true }) public tableDescription = ''
    @Input({ required: true }) public columnNames: string[] = []
    public dataColumns: string[] = []

    public ngOnChanges(changes: SimpleChanges): void 
    {
        if (changes['dataForRendering']) 
        {
            if (this.dataForRendering.length)
            {
                this.dataColumns = Object.keys(this.dataForRendering[0].data as any)
            }
            else 
            {
                this.dataColumns = []
            }
        }
    }

    public getValueHelper(item: TableData<T>, columnName: string): T[keyof T]
    {
        return item.data[columnName as keyof T]
    }
}

export { TableComponent }
