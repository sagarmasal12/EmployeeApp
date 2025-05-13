import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, Booking, IScheduleData, LoginModel, RegisterModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl: string = "https://api.freeprojectapi.com/api/BusBooking/";

  constructor(private http: HttpClient) { }
  

  searchBus(fromId: string, toId: string, date: string) {
    return this.http.get(this.apiUrl + "searchBus2?fromLocation="+fromId+"&toLocation="+toId+"&travelDate="+date+"")
  }

  getBusScheduleById(scheduleId: number) : Observable<IScheduleData>{
    return this.http.get<IScheduleData>(`${this.apiUrl}GetBusScheduleById?id=${scheduleId}`)
  }
  //PostBusBooking
  createNewBooking(obj: Booking) {
    return this.http.post(`${this.apiUrl}PostBusBooking`,obj)
  }

  //
  getBookedSeats(shceduleId:number) {
    return this.http.get(`${this.apiUrl}getBookedSeats?shceduleId=${shceduleId}`)
  }

  registerUser(model: RegisterModel): Observable<any> {
    return this.http.post<any>(this.apiUrl +"AddNewUser", model);
  }

  loginUser(model: LoginModel): Observable<any> {
    return this.http.post<any>(this.apiUrl  +"login", model);
  }

  getDashbvaordData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "GetDashboard");
  }
}
