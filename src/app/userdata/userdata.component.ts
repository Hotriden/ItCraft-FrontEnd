import {Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {RestService} from '../services/RestService';
import {UserService} from '../services/UserService';
import { UrlSerializer } from '@angular/router';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})

export class UserdataComponent implements OnInit  {
  displayedColumns: string[] = ['id', 'name', 'active'];
  users;
  data;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private restService:RestService,
    private userService:UserService) { }

    ngOnInit() {
    this.restService.getUsers().subscribe(
      response => {
        this.users = new MatTableDataSource(response);
        this.users.sort = this.sort;
        this.data = response;
        this.userService.usersAmount(this.data);
      }
    );
  }

  onActiveToggle(user){
    user.active = !user.active;
    this.restService.putUser(user, user.id).subscribe();
    this.userService.usersAmount(this.data);
  }
}
