import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  menu: any | undefined;

  logout() {
    this.authService.logoutUser().subscribe((res) => {
      if (res.code == 200) {
        localStorage.clear();
        this.router.navigate(['/login-page']);
      } else {
        console.log(res);
      }
    });
  }
}
