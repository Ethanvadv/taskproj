import { Component } from '@angular/core';
import {  Router } from '@angular/router'; 


@Component({
  selector: 'app-firstaccuil',
  templateUrl: './firstaccuil.component.html',
  styleUrl: './firstaccuil.component.scss'
})
export class FirstaccuilComponent {
  
    cardItem :any[] = [
    {titre :'Marseille', img :'../../img/calanque.jpg', description: 'incroyable cette ville', date: '2023'},
    {titre :'Budapest', img :'../../img/budabpest.jpg', description: 'incroyable cette ville', date: '2023'},
    {titre :'Amsterdam', img :'../../img/pexels-monstera-production-7411970(1).jpg', description: 'incroyable cette ville', date: '2023'}
   ]

  
   constructor(private router: Router) { }

  redirectionToInscription() {
   this.router.navigate(['/inscription'])
  }

  redirectionToConnection() {
    this.router.navigate(['/login'])

  }

  
  
}
