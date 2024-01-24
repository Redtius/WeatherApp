import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { SwUpdate,VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap , map } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    WeatherComponent,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'weather-app';

  constructor(private snackbar: MatSnackBar,private updates: SwUpdate) { }

  ngOnInit() {
    console.log('reload request coming!!');
    this.updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      switchMap(() => this.snackbar.open('A new version is available', 'Update Now',{ duration: 5000 }).onAction()),
      switchMap(() => this.updates.activateUpdate()),
    ).subscribe();
  }

}
