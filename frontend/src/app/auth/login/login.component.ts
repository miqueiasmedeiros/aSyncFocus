import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  unverifiedEmail = false;
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  get emailControl() {
    return this.form.controls.email;
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  showFieldError(controlName: 'email' | 'password'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

  get formErrorMessage(): string {
    if (this.emailControl.hasError('required') || this.passwordControl.hasError('required')) {
      return 'Preencha os campos obrigatórios para entrar.';
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
    this.unverifiedEmail = false;
    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
        this.router.navigate([returnUrl]);
      },
      error: (err) => {
        this.loading = false;
        const msg: string = err?.error?.message ?? '';
        if (msg.toLowerCase().includes('verificad')) {
          this.unverifiedEmail = true;
        } else {
          this.snackBar.open('Credenciais inválidas. Verifique e-mail e senha.', 'Fechar', {
            duration: 3000
          });
        }
      }
    });
  }
}
