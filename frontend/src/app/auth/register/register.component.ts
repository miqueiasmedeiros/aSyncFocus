import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading = false;
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.snackBar.open(response.message ?? 'Account created. Please verify your email.', 'Close', {
          duration: 3500
        });
        this.router.navigate(['/verify-email']);
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Registration failed. Try again.', 'Close', { duration: 3000 });
      }
    });
  }
}
