import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.page.html',
  styleUrls: ['./add-expenses.page.scss'],
})
export class AddExpensesPage implements OnInit {
mydate:number

  constructor(public router:Router) { }

  ngOnInit() {
  }
  proceed(){
  this.router.navigate(['/add-expenses']);
}
save(){
  this.router.navigate(['/dashboard']);
}
}
