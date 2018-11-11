import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';  
import { ImpactComponent } from '../impact/impact.component'; 
import { ProductComponent } from '../product/product.component';
import { SearchComponent } from '../search/search.component';
import { AccountComponent } from '../account/account.component';
import { MissionComponent } from '../mission/mission.component';
import { EducateComponent } from '../educate/educate.component';
import { IndexComponent } from '../index/index.component';

export const routes: Routes=[
    {path: '', component: IndexComponent},
    {path: 'product', component: ProductComponent},
    {path: 'search', component: SearchComponent},
    {path: 'impact', component: ImpactComponent},
    {path: 'mission', component: MissionComponent},
    {path: 'educate', component: EducateComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)], 
        exports: [RouterModule]
})
export class AppRoutingModule {}
