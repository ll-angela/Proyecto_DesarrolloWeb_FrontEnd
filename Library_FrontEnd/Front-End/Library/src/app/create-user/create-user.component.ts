import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UserService } from "../service/user.service";
import { User } from "../user/user";
import {Router } from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  user: User =
    {
      "id": 0,
      "name": '',
      "last_name": '',
      "birth_date": '',
      "position": '',
      "active": true,
      "username": '',
      "password": '',
      "token": ''
    };

  createForm = this.formBuilder.group({
    name: '',
    last_name: '',
    birth_date: '',
    username: '',
    password: ''
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    let nameParam: string;
    let lastNameParam: string;
    let birthParam: string;
    let position: string;
    let active: boolean;
    let usernameParam: string;
    let passParam: string;
    let token: string;
    nameParam = ''+this.createForm.value.name;
    lastNameParam = ''+this.createForm.value.last_name;
    birthParam = ''+this.createForm.value.birth_date;
    position = "Admin";
    active = true;
    usernameParam = ''+this.createForm.value.username;
    passParam = ''+this.createForm.value.password;
    token = "";

    this.userService.createUser(nameParam, lastNameParam, birthParam, position, active, usernameParam, passParam).subscribe(
      data => {
        this.user = data;
        this.router.navigateByUrl('/useradmin');
      }
    );
    this.createForm.reset();
  }

}
