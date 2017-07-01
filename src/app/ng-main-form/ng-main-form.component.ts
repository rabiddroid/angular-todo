import { Component } from '@angular/core';
import { NgTasklist } from './../ng-tasklist';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ng-main-form',
  templateUrl: './ng-main-form.component.html',
  styleUrls: ['./ng-main-form.component.css']
})

export class NgMainFormComponent {

  tasklists:NgTasklist[] = [];
  tasklist = new NgTasklist(0,'Task Name');
  submitted = false;

  constructor(private router:Router){}


  onSubmit(){
    this.submitted = true;
    this.tasklists.push(this.tasklist);
    this.router.navigate(['/tasklist',this.tasklist]);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.tasklist); }

}
