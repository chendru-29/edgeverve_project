import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListViewComponent } from "./pages/list-view/list-view.component";
import { DetailsLayoutComponent } from "./pages/details-layout/details-layout.component";
import { SidenavComponent } from "./pages/sidenav/sidenav.component";
import { ThemeWrapperComponent } from "./pages/theme-wrapper/theme-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: ThemeWrapperComponent,
    children: [
      { path: "list", component: ListViewComponent },
      { path: "detail", component: DetailsLayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
