import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Features/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  userName?: string; 

  constructor(private userService:  UserService){

  }

  ngOnInit(): void {
    
  }

  getUser(): void{
    this.userService.getUserDetails().subscribe((response: any) => {
      this.userName = response.nom
    }, error => {
      console.error('Une erreur s\'est produite lors de la récupération des données utilisateur :', error);
    });
  }

}
 

