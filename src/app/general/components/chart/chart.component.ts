import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Chart, registerables as REGISTERABLES } from 'chart.js'
import { ChartData } from '../../../../types/chart.component.type'

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.css'
})
class ChartComponent implements OnChanges
{
    @Input({ required: true }) chartDescription = ''
    @Input({ required: true }) chartData: ChartData = { labels: [], data: [] }

    constructor() {
        Chart.register(...REGISTERABLES)
    }

    public ngOnChanges(changes: SimpleChanges): void
    {
        if (changes['chartData']) 
        {
            if (this.chartData.labels.length)
            {
                this.renderChart()
            }
        }
    }

    private renderChart() 
    {
        const CANVAS = document.querySelector('#chart') as HTMLCanvasElement
        
        if (CANVAS)
        {
            CANVAS.width = 400
            CANVAS.height = 400

            new Chart(CANVAS, {
                type: 'pie',
                data: {
                    labels: [...this.chartData.labels],
                    datasets: [{
                        label: '',
                        data: [...this.chartData.data],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)', 
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)', 
                            'rgba(199, 199, 199, 0.2)',
                            'rgba(83, 102, 255, 0.2)', 
                            'rgba(255, 102, 102, 0.2)',
                            'rgba(102, 255, 153, 0.2)',
                            'rgba(104, 240, 10, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)', 
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(199, 199, 199, 1)',
                            'rgba(83, 102, 255, 1)',
                            'rgba(255, 102, 102, 1)',
                            'rgba(102, 255, 153, 1)',
                            'rgba(104, 240, 10, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            display: false
                        },
                        y: {
                            display: false
                        }
                    }
                }
            })
        }
    }
}

export { ChartComponent }