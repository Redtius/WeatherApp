import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
