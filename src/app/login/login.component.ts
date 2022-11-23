import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Users = new Users();
  getData!: boolean;
 
  constructor(private userservice : UserserviceService) { }
  private router!: Router;

  ngOnInit(): void {
  }

  loginUser()
  {
    console.log(this.user);
    this.userservice.getUserData(this.user).subscribe((res) =>{
      alert("login sucessful");
    })
  }  
}
