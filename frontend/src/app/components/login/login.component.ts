import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    email: null,
    password: null
  };

  public api_path = "http://localhost:8000/api/";
  public error = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.http.post('http://localhost:8000/api/login',this.form).subscribe(
      data=>this.handleSuccess(data),
      error=>this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

  handleSuccess(data){
    localStorage.setItem("token", data.token);
    console.log(data);
    this.error = null;
    this.router.navigateByUrl("/cars");
  }

}
