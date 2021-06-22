import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.page.html',
  styleUrls: ['./listlocation.page.scss'],
})
export class ListlocationPage implements OnInit {
  
  profileId: string;
  location;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId= this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/location' + this.profileId)
    .subscribe(res => this.location = res);
  }

}

