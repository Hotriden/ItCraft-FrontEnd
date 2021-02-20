import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'dialog-box-component',
  templateUrl: 'dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  constructor(
    public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContentExampleDialog);
  }
}

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog-box.window.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogContentExampleDialog implements OnInit {
  totalAmount;
  activeAmount;

  ngOnInit() {
    this.totalAmount = localStorage.getItem('ammount');
    this.activeAmount = localStorage.getItem('activeAmmount');
  }
}