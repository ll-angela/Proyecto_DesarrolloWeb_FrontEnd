import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {User} from "../user/user";

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

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

  modifyForm = this.formBuilder.group({
    id: 0,
    name: '',
    last_name: '',
    birth_date: '',
    username: '',
    password: ''
  });

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  onSubmit(): void {
    let idParam: number;
    let nameParam: string;
    let lastNameParam: string;
    let birthParam: string;
    let position: string;
    let active: boolean;
    let usernameParam: string;
    let passParam: string;
    let token: string;
    idParam = <number>this.modifyForm.value.id;
    nameParam = ''+this.modifyForm.value.name;
    lastNameParam = ''+this.modifyForm.value.last_name;
    birthParam = ''+this.modifyForm.value.birth_date;
    position = "Admin";
    active = true;
    usernameParam = ''+this.modifyForm.value.username;
    passParam = ''+this.modifyForm.value.password;
    token = "";

    this.userService.updateUser(idParam, nameParam, lastNameParam, birthParam, position, active, usernameParam, passParam).subscribe(
      data => {
        this.user = data;
        this.router.navigateByUrl('useradmin');
      }
    );
    this.modifyForm.reset();
  }

  getUsers(): void {
    this.userService.searchAllUsers().subscribe(
      data => this.users = data
    );
  }

}
