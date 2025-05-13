import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { Booking, BusBookingPassenger, IScheduleData } from '../../model/model';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  imports: [DatePipe,NgClass,FormsModule],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {

  activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchService);
  scheduoleData!: IScheduleData;
  seatNoList: number []= [];
  selectedSeatArray: BusBookingPassenger[] = [];
  bookTicketObj: Booking  = new Booking();
  bookedSeatList: number []=[];


  constructor( ){
   
    this.activatedRoute.params.subscribe((res:any)=>{
      debugger;
      const scheduleId =  res.scheduleId;
     
      this.bookTicketObj.scheduleId =  scheduleId;
      this.bookTicketObj.bookingDate =  new Date();
      this.getBusDetails(scheduleId);
      this.getBookedSeats(scheduleId);
      const loggedData = localStorage.getItem("redBusUser");
      if(loggedData !=null) {
        const par =  JSON.parse(loggedData);
        this.bookTicketObj.custId =  par.userId;
      } else {
        this.bookTicketObj.custId =0;
      } 
    })
  }

  getBusDetails(scheduleId: number) {
    this.searchService.getBusScheduleById(scheduleId).subscribe((res:IScheduleData)=>{
      this.scheduoleData = res;
      for (let index = 1; index <=  this.scheduoleData.totalSeats; index++) {
        this.seatNoList.push(index) 
      }
    })
  }

  getBookedSeats(scheduleId: number) {
    this.searchService.getBookedSeats(scheduleId).subscribe((res:any)=>{
      this.bookedSeatList = res; 
    })
  }
  
  checkIfSeatIsSelected(seatNo:number) {
    const check = this.selectedSeatArray.find(m=>m.seatNo == seatNo);
    if(check == undefined) {
      return false;
    } else {
      return true;
    }
  }

  checkIfBooked(seatNo:number) {
    const check = this.bookedSeatList.find(m=>m == seatNo);
    if(check == undefined) {
      return false;
    } else {
      return true;
    }
  }

  onSelect(seatNo: number) {

    const isExistIndex =  this.selectedSeatArray.findIndex(m=>m.seatNo == seatNo);
    if(isExistIndex != -1) {
      this.selectedSeatArray.splice(isExistIndex,1)
    } else {
      const newPassnegerData :BusBookingPassenger = {
        seatNo : seatNo,
        age:0,
        bookingId: 0,
        gender: '',
        passengerId: 0,
        passengerName: ''
      };
      this.selectedSeatArray.push(newPassnegerData)
    }
   
  }

  bookTicket() {
    debugger;
    if(this.bookTicketObj.custId ==0) {
      alert("Do Login First")
    } else {
      this.bookTicketObj.busBookingPassengers = this.selectedSeatArray;
      this.searchService.createNewBooking(this.bookTicketObj).subscribe((Res:any)=>{
        alert("Ticket Booked Success")
      })
    }
   
  }
}
