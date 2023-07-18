import { Component, OnInit } from '@angular/core';
import {StoreserviceService} from 'src/app/services/storeservice.service';
import {Producto} from 'src/app/Models/Producto';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

   productos:Producto[]=[]
   constructor(private service:StoreserviceService)
   {

   }
  ngOnInit(): void {
    this.getData()
  }


   getData()
   {
      this.service.getDataArticles().subscribe(x=>{
        console.log(x)
        this.productos=<Producto[]>x
      })
   }
}
