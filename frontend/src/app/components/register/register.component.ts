import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form={
    name: null,
    email: null,
    password: null
  };

  public error=null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.http.post('http://localhost:8000/api/register',this.form).subscribe(
      data=>this.handleSuccess(data),
      error=>this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

  handleSuccess(data){
    console.log(data);
    this.error = null;
    this.router.navigateByUrl("/login");
  }

}
