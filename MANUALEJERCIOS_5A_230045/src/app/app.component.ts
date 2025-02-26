import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { BREADCRUMBComponent } from "./componets/breadcrumb/breadcrumb.component";
import { SIDEBARComponent } from "./componets/sidebar/sidebar.component";
import { PAGECONTENTComponent } from "./componets/page-content/page-content.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent, BREADCRUMBComponent, SIDEBARComponent, PAGECONTENTComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MANUALEJERCIOS_5A_230045';
}
