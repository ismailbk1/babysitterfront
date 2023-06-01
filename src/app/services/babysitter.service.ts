import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { babysitter } from '../models/babysitter.model';


@Injectable({
  providedIn: 'root'
})
export class BabysitterService {

  item = new BehaviorSubject(0);
  counter=0
  
  constructor(private httpclt:HttpClient) { 
    this.item.subscribe(
    (it)=>{this.counter=it}  )
  }
 
  addNounou(bobo:any):Observable<babysitter>{
    return this.httpclt.post<babysitter>("http://localhost:8087/addbabysitter",bobo)}
 

  increment(){
   this.item.next(this.item.getValue()+1)}



   getAllNounou():Observable<babysitter[]>{

    return this.httpclt.get<babysitter[]>("http://localhost:8087/listeAllbaby")
  
     }
     deleteNounou(idbabysitter:any):Observable<babysitter>{

      return this.httpclt.delete<babysitter>("http://localhost:8087/Deletebabysitter/"+idbabysitter)
    }
     getnounouById(idbabysitter:any):Observable<babysitter>{

      return this.httpclt.get<babysitter> ("http://localhost:8087/finedidbaby/"+idbabysitter)
    } 
  
    updatenounou(idbabysitter:any,prt:babysitter):Observable<babysitter>{
  
    console.log(prt.nom)
      return this.httpclt.put<babysitter>("http://localhost:8087/updateBaby/"+idbabysitter,prt)
    } 
  
    connect(email:string,password:string):Observable<AuthenticatorResponse>{
  
     return this.httpclt.post<AuthenticatorResponse>("http://localhost:8087/login/",{email:email,password:password})
  
    }

    rechercheBabysitter(adresse:any):Observable<babysitter>{
     
      return this.httpclt.get<babysitter>("http://localhost:8087/finedadresse/"+adresse)

    }

}
