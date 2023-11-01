import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { UnauthorizedComponent } from "./unauthorized.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login'
    },
    {
        path: '',
        component: UnauthorizedComponent,
        children: [
            {
                path: '/login',
                component: LoginComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UnauthorizedRoutingModule { }
