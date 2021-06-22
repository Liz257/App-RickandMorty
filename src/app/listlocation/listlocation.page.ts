import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.page.html',
  styleUrls: ['./listlocation.page.scss'],
})
export class ListlocationPage implements OnInit {
  
  listlocationId:String
  characters:String[];

  

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.listlocationId= this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get<any>('https://rickandmortyapi.com/api/location' + this.listlocationId)
    .subscribe(res=>{
      console.log(res)
      this.characters=res;

    })
  }

}

