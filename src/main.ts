import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // ✅ Assure-toi que le nom est correct !

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
