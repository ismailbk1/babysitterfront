import { Component } from '@angular/core';
import { babysitter } from '../models/babysitter.model';
import { BabysitterService } from '../services/babysitter.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/loginRequest.model';

@Component({
  selector: 'app-acceuil-p',
  templateUrl: './acceuil-p.component.html',
  styleUrls: ['./acceuil-p.component.css']
})
export class AcceuilPComponent {

  babysitter:babysitter[]=[];
  nom!:any ;

  constructor(private nounouServ :BabysitterService , private authService:AuthService,private route:Router)
 {


 }
 ngOnInit(): void {
  
  const loggedInUser =sessionStorage.getItem('loggedInUser');
    
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    this.nom = user.nom;
    
    console.log(user.nom);
   
     console.log(user);
  }




   this.nounouServ.getAllNounou().subscribe(
    
 (tabNounou)=>{
   this.babysitter=tabNounou;
 }
   )

 }


 dell(idbabysitter:any){

  this.route.navigate(['/profilb',idbabysitter])
}

}
