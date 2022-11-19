import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UserService } from "../service/user.service";
import { User } from "../user/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inactivate-user',
  templateUrl: './inactivate-user.component.html',
  styleUrls: ['./inactivate-user.component.css']
})
export class InactivateUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  users: User[] = [];

  inactivateForm = this.formBuilder.group({
    user: ''
  });

  ngOnInit(): void {
    this.getUsers();
  }

  onSubmit() {
    let userParam: User;
    let user = this.users.find(element => element.name == this.inactivateForm.value.user);
    userParam = {"id": user!.id, "name": user!.name, "last_name": user!.last_name, "birth_date": user!.birth_date, "position": user!.position, "active": user!.active, "username": user!.username, "password": user!.password, "token": user!.token};
    if (confirm("¿Está seguro que quiere inactivar el usuario " + user!.name + "?")) {
      this.userService.inactivateUser(userParam.id, userParam.name, userParam.last_name, userParam.birth_date, userParam.position, userParam.active, userParam.username, userParam.password).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('useradmin');
        }
      );
    }
  }

  getUsers(): void {
    this.userService.searchAllUsers().subscribe(
      data => this.users = data
    );
  }

}
