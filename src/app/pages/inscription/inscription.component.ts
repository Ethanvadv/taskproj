import { Component } from '@angular/core';
import { User } from '../../Features/models/User';
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../../Features/services/autentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  user: User = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '', 
    passwordControl: ''
  };

  InsciptionIsValide: boolean = false

  constructor(private autService: AuthenticationService, private router: Router) { } 

  register(): void {
    // Vérifie si les champs requis sont renseignés
    if (this.user.nom && this.user.email && this.user.password) {
      // Appelle la méthode 'add' de ton service d'authentification pour ajouter l'utilisateur
      this.autService.add(this.user).subscribe({
        next: (response) => {
          console.log('Utilisateur enregistré avec succès.', response);
          // Réinitialise le formulaire après une inscription réussie
          this.user = { id: 0, nom: '', prenom: '', email: '', password: '', passwordControl: ''
        };
          this.InsciptionIsValide = true;

          this.router.navigate(['../login']); },
        error: (error) => {
          console.error('Une erreur s\'est produite lors de l\'inscription :', error);
        }
      });
    } else {
      console.error('Veuillez remplir tous les champs du formulaire.');
    }
  }
  redirect(){
    this.router.navigate(['/login']);  
  }
}
