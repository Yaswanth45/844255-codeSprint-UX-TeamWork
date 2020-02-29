import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  users:User[];
  errMsg:string;
  
  constructor(private userService :UserService) { }

  ngOnInit() {
    this.loadData();
  }
    loadData(){
      this.users=null;
      this.errMsg=null;
  
      this.userService.getAll().subscribe(
        (data) =>{ this.users=data; },
        (err) => {this.errMsg="Sorry Server not reachable!";}
      );

    }

}
