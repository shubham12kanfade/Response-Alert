import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.loginUser(this.loginForm.value).subscribe((res) => {
      console.log('res', res);
      if (res.code == 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        this.router.navigate(['/']);
        console.log(this.loginForm.value);
      } else {
        this.router.navigate(['/login-page']);
      }
    });
  }
}
