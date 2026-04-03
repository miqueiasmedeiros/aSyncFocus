import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirm')?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  loading = false;

  form = this.fb.nonNullable.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', Validators.required]
  }, { validators: passwordsMatch });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.authService.changePassword(this.form.getRawValue().password).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Senha alterada com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/home']);
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Falha ao alterar senha.', 'Fechar', { duration: 2500 });
      }
    });
  }
}
