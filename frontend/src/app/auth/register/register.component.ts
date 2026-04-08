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
  submitted = false;
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

  get nameControl() {
    return this.form.controls.name;
  }

  get emailControl() {
    return this.form.controls.email;
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  showFieldError(controlName: 'name' | 'email' | 'password'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

  get formErrorMessage(): string {
    if (
      this.nameControl.hasError('required') ||
      this.emailControl.hasError('required') ||
      this.passwordControl.hasError('required')
    ) {
      return 'Preencha os campos obrigatórios para criar sua conta.';
    }

    if (this.nameControl.hasError('minlength')) {
      return 'O nome deve ter pelo menos 2 caracteres.';
    }

    if (this.emailControl.hasError('email')) {
      return 'Informe um e-mail válido.';
    }

    if (this.passwordControl.hasError('minlength')) {
      return 'A senha deve ter pelo menos 8 caracteres.';
    }

    return 'Revise os dados informados e tente novamente.';
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
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
