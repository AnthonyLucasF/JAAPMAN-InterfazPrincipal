import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },

                    { path: 'history', loadChildren: () => import('./demo/components/history/history.module').then(m => m.HistoryModule) },
                    { path: 'company', loadChildren: () => import('./demo/components/company/company.module').then(m => m.CompanyModule) },

                    { path: 'enter-user', loadChildren: () => import('./demo/components/enter-user/enter-user.module').then(m => m.EnterUserModule) },
                    { path: 'enter-materials', loadChildren: () => import('./demo/components/enter-materials/enter-materials.module').then(m => m.EnterMaterialsModule) },
                    { path: 'enter-clients', loadChildren: () => import('./demo/components/enter-clients/enter-clients.module').then(m => m.EnterClientsModule) },
                    { path: 'enter-categories', loadChildren: () => import('./demo/components/enter-categories/enter-categories.module').then(m => m.EnterCategoriesModule) },
                    { path: 'enter-discount', loadChildren: () => import('./demo/components/enter-discount/enter-discount.module').then(m => m.EnterDiscountModule) },

                    { path: 'collections', loadChildren: () => import('./demo/components/collections/collections.module').then(m => m.CollectionsModule) },
                    { path: 'suspension', loadChildren: () => import('./demo/components/suspension/suspension.module').then(m => m.SuspensionModule) },

                    { path: 'sending-receipts', loadChildren: () => import('./demo/components/sending-receipts/sending-receipts.module').then(m => m.SendingReceiptsModule) },
                    { path: 'sending-mails', loadChildren: () => import('./demo/components/sending-mails/sending-mails.module').then(m => m.SendingMailsModule) },
                    { path: 'setting', loadChildren: () => import('./demo/components/setting/setting.module').then(m => m.SettingModule) },

                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },

                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
