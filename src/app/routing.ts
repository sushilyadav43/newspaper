import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

export const router:Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"",
        redirectTo:"/dashboard",
        pathMatch:"full"
    }
]    