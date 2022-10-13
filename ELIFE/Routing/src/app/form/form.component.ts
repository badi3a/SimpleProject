import { UserService } from './../services/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User;
  constructor(private service: UserService,
    private route: Router) { }

  ngOnInit(): void {
    this.user= new User()
  }
  save(): void{
    this.service.addUser(this.user).subscribe(
      ()=>this.route.navigate(['users'])
    );
  }

}
