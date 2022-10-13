import { UserService } from './../services/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list: User[]
  constructor(private service: UserService) { }

  ngOnInit(): void {
   this.service.getUsers().subscribe(
    (response:User[])=>this.list=response
   );
  }

}
