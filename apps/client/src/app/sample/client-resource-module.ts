import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientResourceRoutes } from './routes';

@NgModule({
  imports: [RouterModule.forChild(ClientResourceRoutes)],
})
export class ClientResourceModule {
  configure(providers: Provider[]): ModuleWithProviders<ClientResourceModule> {
    return {
      ngModule: ClientResourceModule,
      providers,
    };
  }
}
