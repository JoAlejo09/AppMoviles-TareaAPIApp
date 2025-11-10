import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-api',
  templateUrl: './dog-api.page.html',
  styleUrls: ['./dog-api.page.scss'],
  standalone: false,
})
export class DogApiPage {
  dogImg: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  getDog() {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(res => {
      this.dogImg = res.message;
    });
  }

  volverAlMenu() {
    this.router.navigate(['/menu']);
  }
}
