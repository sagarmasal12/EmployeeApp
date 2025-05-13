export class Search {
    fromLocationId: string;
    toLocationId: string;
    date: string;

    constructor() {
        this.fromLocationId = "";
        this.toLocationId = "";
        this.date = ""
    }
}

export interface ISearchBus {
    availableSeats: number
    totalSeats: number
    price: number
    arrivalTime: string
    scheduleId: number
    departureTime: string
    busName: string
    busVehicleNo: string
    fromLocationName: string
    toLocationName: string
    vendorName: string
    scheduleDate: string
    vendorId: number
  }

  export interface IScheduleData {
    scheduleId: number
    vendorId: number
    busName: string
    busVehicleNo: string
    fromLocation: number
    toLocation: number
    departureTime: string
    arrivalTime: string
    scheduleDate: string
    price: number
    totalSeats: number
  }

  export class Booking {
    bookingId: number
    custId: number
    bookingDate: Date
    scheduleId: number
    busBookingPassengers: BusBookingPassenger[];

    constructor() {
      this.bookingId = 0;
      this.custId = 0;
      this.bookingDate =  new Date();
      this.scheduleId = 0;
      this.busBookingPassengers = []
    }
  }
  
  export class BusBookingPassenger {
    passengerId: number;
    bookingId: number;
    passengerName: string;
    age: number;
    gender: string;
    seatNo: number;

    constructor() {
        this.passengerId = 0;
        this.bookingId = 0;
        this.age = 0;
        this.passengerName= "";
        this.gender = "";
        this.seatNo = 0
    }
  }
  
  
  export interface RegisterModel {
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    role: string;
    createdDate: string;
    password: string;
    projectName: string;
    refreshToken: string;
    refreshTokenExpiryTime: string;
  }
  
  export interface LoginModel {
    userName: string;
    password: string;
  }
  
  export interface AuthResponse {
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    role: string;
    createdDate: string;
    password: string;
    projectName: string;
    refreshToken: string;
    refreshTokenExpiryTime: string;
  }
  