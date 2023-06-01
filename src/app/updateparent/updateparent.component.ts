import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from '../services/parent.service';
import { parent } from '../models/parent.model';

@Component({
  selector: 'app-updateparent',
  templateUrl: './updateparent.component.html',
  styleUrls: ['./updateparent.component.css']
})
export class UpdateparentComponent {
  id!:number; 
  inputform!:FormGroup;
  prt!:parent;
  constructor(private fb:FormBuilder,private actRoute:ActivatedRoute,private parentserv:ParentService){
 

  }
ngOnInit():void{
  this.inputform=this.fb.group(
  {"nom":[""],
  "prenom":[""],
  "email":[""],
  "telephone":[""],
  "adresse":[""],
  "genre":[""],
  "password":[""],
  "confpassword":[""] }
)
this.actRoute.params.subscribe(
  (param)=>{this.id=param['idparent']
 // console.log(this.id)
 this.parentserv.getParentById(this.id).subscribe(
(pr)=>{
  console.log(pr.nom )
  this.inputform.controls['nom'].setValue(pr.nom);
  this.inputform.controls['prenom'].setValue(pr.prenom);
  this.inputform.controls['email'].setValue(pr.email);
  this.inputform.controls['telephone'].setValue(pr.telephone);
  this.inputform.controls['adresse'].setValue(pr.adresse);
  this.inputform.controls['genre'].setValue(pr.genre);
  this.inputform.controls['password'].setValue(pr.password);
  this.inputform.controls['confpassword'].setValue(pr.confpassword);
}

 )

})



  }
onUpdate(){
  this.prt=new parent();
  this.prt.nom=this.inputform.controls['nom'].value;
  this.prt.prenom=this.inputform.controls['prenom'].value;
  this.prt.email=this.inputform.controls['email'].value;
  this.prt.telephone=this.inputform.controls['telephone'].value;
  this.prt.adresse=this.inputform.controls['adresse'].value;
  this.prt.genre=this.inputform.controls['genre'].value;
  this.prt.password=this.inputform.controls['password'].value;
  this.prt.confpassword=this.inputform.controls['confpassword'].value;


  this.parentserv.updateuser(this.id,this.prt).subscribe(

  (prt)=>{
     console.log(prt.nom)
  })

}
}
