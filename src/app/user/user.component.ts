import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  UserNameFromParam: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => {
      this.UserNameFromParam = res.id;
      console.log(res.id);
    });
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
