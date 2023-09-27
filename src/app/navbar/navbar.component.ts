import { Component } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';
  showSuggestions: boolean = false;
  suggestions: any[] = [];
 
  constructor(private flightService: FlightServiceService,private router:Router) {}
 
  onInputChange() {
    if (this.searchQuery.length >= 1) {
      this.flightService.getAirportSuggestions(this.searchQuery)
        .subscribe(data => {
          this.suggestions = data;
          this.showSuggestions = true;
        });
    } else {
      this.suggestions = [];
      this.showSuggestions = false;
    }
  }
 
  selectSuggestion(suggestion: any) {
    this.router.navigate(['/suggestion', suggestion.code]);
    this.showSuggestions = false;
  }
}