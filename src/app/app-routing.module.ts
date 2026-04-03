import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { MustChangePasswordGuard } from './guards/must-change-password.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard, MustChangePasswordGuard] },
  { path: 'posts/new', component: PostCreateComponent, canActivate: [AuthGuard, MustChangePasswordGuard] },
  { path: 'posts/:id/edit', component: PostEditComponent, canActivate: [AuthGuard, MustChangePasswordGuard] },
  { path: 'posts/:id', component: PostDetailComponent, canActivate: [AuthGuard, MustChangePasswordGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, MustChangePasswordGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard, MustChangePasswordGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
