import { Component } from '@angular/core';
import { babysitter } from '../models/babysitter.model';
import { BabysitterService } from '../services/babysitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-babysitter',
  templateUrl: './liste-babysitter.component.html',
  styleUrls: ['./liste-babysitter.component.css']
})
export class ListeBabysitterComponent {

  alert:boolean=false;
  babysitter:babysitter[]=[];

 constructor(private nounouServ :BabysitterService , private route:Router)
 {


 }
 ngOnInit(): void {
   this.nounouServ.getAllNounou().subscribe(
    
 (tabNounou)=>{
   this.babysitter=tabNounou;
 }
   )

 }
onDelete(nounouid:any){
 this.alert=true;
 this.nounouServ.deleteNounou(nounouid).subscribe(
   (p)=>{
     
   this.nounouServ.getAllNounou().subscribe(
      
     (tabParents)=>{
       this.babysitter=tabParents;
       this.route.navigate(['/listenounou']);})  }) 

}
onUpdate(idbabysitter:any){

 this.route.navigate(['/upbaby',idbabysitter])
}

 

}
