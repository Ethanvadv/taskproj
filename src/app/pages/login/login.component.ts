import { Component } from '@angular/core';
import { AuthenticationService } from '../../Features/services/autentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    email: string|null = null;

    password: string|null = null;
  
    constructor(private authService: AuthenticationService, private router: Router) {}
  
    login() {
      if(this.email && this.password) {
        this.authService.login(this.email, this.password).subscribe({
          next : (response) => {
            localStorage.setItem('TOKEN', response.token);
            console.log(response.token);
            






            
            this.router.navigate(['main']);
          },
          error: () => {} 
        }) 
      }
    }
  
}
