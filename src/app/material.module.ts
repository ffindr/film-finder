import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    FontAwesomeModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
