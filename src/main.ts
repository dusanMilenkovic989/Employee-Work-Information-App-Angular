import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'

platformBrowserDynamic()
    .bootstrapModule(AppModule, {
        ngZoneEventCoalescing: true
    })
    .catch((e: unknown): void => 
    {
        if (e instanceof Error)
        {
            console.error(e.message)
        }
    })