import {Injectable} from '@angular/core';
import {User} from '../userdata/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersAmount(users: User[]) {
    localStorage.setItem('ammount', users.length.toString());
    localStorage.setItem('activeAmmount', users.filter(ele => ele.active == true).length.toString());
  }
}