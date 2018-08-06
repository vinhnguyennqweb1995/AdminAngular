import { Component, OnInit } from '@angular/core';
import { ServerAPI } from "./service.api";
import { FormsModule } from '@angular/forms';
import { async } from '../../node_modules/@angular/core/testing';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'abe';
  dataList: any;
  name: string;
  success: boolean = false;

  constructor(private api: ServerAPI){
    
  }

  ngOnInit(){
    this.getData();
  }

  async getData(){
    let rec = await this.api.getList();

    if(rec && rec.length > 0)
      this.dataList = rec;
  }

  async save(){
    let rec = await this.api.saveAdd(this.name);
    if(rec && rec.length > 0)
      this.success = true;
  }
}
