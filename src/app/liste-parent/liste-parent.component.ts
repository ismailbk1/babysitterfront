import { Component } from '@angular/core';
import { ParentService } from '../services/parent.service';
import { parent } from '../models/parent.model';
import { Router } from '@angular/router';
import { SessionService } from '../services/Session.service';

@Component({
  selector: 'app-liste-parent',
  templateUrl: './liste-parent.component.html',
  styleUrls: ['./liste-parent.component.css']
})
export class ListeParentComponent {
  alert:boolean=false;
  parents:parent[]=[];
  constructor(private parentServ :ParentService , private route:Router, private sessionservice:SessionService)
  {


  }
  ngOnInit(): void {
    this.parentServ.getAllParents().subscribe(
     
  (tabParents)=>{
    this.parents=tabParents;
  }
    )

  }
onDelete(prtid:any){
  this.alert=true;
  
  this.parentServ.deleteParent(prtid).subscribe(
    (p)=>{
      
      this.parentServ.getAllParents().subscribe(
       
        (tabParents)=>{
          this.parents=tabParents;

          
          this.route.navigateByUrl('/listeparent');
          
        }
        
        )    
  }) 

}
onUpdate(idparent:any){

  this.route.navigate(['/upparent',idparent])
}

  logout():void{

    this.sessionservice.clearAdmin();
    this.route.navigate(['/login']);
  }


}
