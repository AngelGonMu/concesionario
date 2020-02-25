import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from "./car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  //cars: Car[];

  public emptycar={
    title: null,
    description: null,
    precio: null,
    status: null
  };

  public car={
    title: null,
    description: null,
    precio: null,
    status: null
  };

  public cars = null;

  public api_path = "http://localhost:8000/api/";
  public error = null;
  public showNew = false;
  public hds = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCars();
  }

  displayNew(val){
    this.showNew = val;
  }

  getCars(){
    this.http.get("http://localhost:8000/api/cars").subscribe(
      data=>this.handleGetSuccess(data),
      error=>console.log(error)
    );
  }

  newCarSubmit(){
    this.hds = new HttpHeaders({
      "Content-type":"application/json",
      "Authorization" : "Bearer "+localStorage.getItem("token")
    });
    return this.http.post('http://localhost:8000/api/cars',this.car,{headers: this.hds}).subscribe(
      data=>this.handleNewSuccess(data),
      error=>console.log(error)
    );
  }

  updateCar(i){
    console.log(this.cars[i]);
  }

  deleteCar(i){
    console.log(this.cars[i]);
    this.http.delete(`http://localhost:8000/api/cars/${this.cars[i].id}`).subscribe(
      data=>this.handleDeleteSuccess(data),
      error=>console.log(error)
    );
  }

  handleGetSuccess(data){
    this.cars = data.results;
  }

  handleNewSuccess(data){
    this.showNew=false;
    this.car=null;
    this.car=this.emptycar;
    console.log(data);
    this.getCars();
  }

  handleUpdateSuccess(data){
    console.log(data);
    this.getCars();
  }

  handleDeleteSuccess(data){
    console.log(data);
    this.getCars();
  }


}
