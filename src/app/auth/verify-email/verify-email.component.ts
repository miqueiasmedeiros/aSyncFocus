import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  state: 'pending' | 'verifying' | 'success' | 'error' = 'pending';
  errorMessage = '';
  resending = false;
  resendDone = false;

  tokenForm = this.fb.nonNullable.group({
    token: ['', [Validators.required, Validators.minLength(10)]]
  });

  resendForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.tokenForm.patchValue({ token });
      this.doVerify(token);
    }
  }

  submit(): void {
    if (this.tokenForm.invalid) return;
    this.doVerify(this.tokenForm.getRawValue().token);
  }

  private doVerify(token: string): void {
    this.state = 'verifying';
    this.authService.verifyEmail(token).subscribe({
      next: (res) => {
        this.state = 'success';
        this.snackBar.open(res.message ?? 'E-mail verificado!', 'Fechar', { duration: 4000 });
        setTimeout(() => this.router.navigate(['/login']), 2500);
      },
      error: (err) => {
        this.state = 'error';
        this.errorMessage = err?.error?.message ?? 'Token inválido ou expirado.';
      }
    });
  }

  resend(): void {
    if (this.resendForm.invalid) return;
    this.resending = true;
    this.authService.resendVerification(this.resendForm.getRawValue().email).subscribe({
      next: () => {
        this.resending = false;
        this.resendDone = true;
      },
      error: () => {
        this.resending = false;
        this.snackBar.open('Erro ao reenviar. Tente novamente.', 'Fechar', { duration: 3000 });
      }
    });
  }
}
