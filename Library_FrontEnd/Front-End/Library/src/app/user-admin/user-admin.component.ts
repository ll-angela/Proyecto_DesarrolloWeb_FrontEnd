import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { User } from "../user/user";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.searchAllUsers().subscribe(
      data => this.users = data
    );
  }

}
