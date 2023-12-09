import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';

  constructor(private router: Router){

  }
  counter(){
    this.router.navigate(['counter'])
  }

   weather(){
    this.router.navigate(['vatavaran'])
   }
}
