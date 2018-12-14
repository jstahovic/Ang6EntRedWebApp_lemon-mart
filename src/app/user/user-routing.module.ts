import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LogoutComponent } from './logout/logout.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'navigation-menu', component: NavigationMenuComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
