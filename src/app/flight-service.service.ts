import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  private apiUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  
  getFlights(criteria: any): Observable<any[]> {
    const url = `${this.apiUrl}/route`;
    
    // Set the headers to specify JSON content type
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
 
    // Send the POST request with headers
    return this.http.post<any[]>(url, criteria, { headers });
  }
  getAirportSuggestions(starting: string): Observable<any[]> {
    const url = `${this.apiUrl}/suggest/${starting}`;
    return this.http.get<any[]>(url);
  }
  
}