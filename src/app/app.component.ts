import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import DxEncoding from 'dxcode-film-db';
import DxCodes from 'dxcode-film-db/data/dxcodes.json';

export class DxCodeData {
  isValid: boolean;
  dxPart1: number;
  dxPart2: number;
  dxLength: number;
  exposures: number;
  manufacturer: string[];
}

export interface TableItem {
  manufacturer: string;
  product: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faGithub = faGithub;

  dxCode = new DxCodeData();
  tableColumns: string[] = ['manufacturer', 'product'];
  tableItems: TableItem[] = [];

  doSearch(filterValue: string) {
    try {
      const dx = DxEncoding.parseDxNumber(filterValue);
      const dbEntry = DxCodes[dx.dxPart1];
      const dbManufacturer = dbEntry ? dbEntry.manufacturer.map(m => m.name) : [];
      const dbProducts = dbEntry ? dbEntry.products[dx.dxPart2] : [];

      this.dxCode = {
        isValid: true,
        dxPart1: dx.dxPart1,
        dxPart2: dx.dxPart2,
        dxLength: dx.dxLength,
        exposures: DxEncoding.getExposures(dx.dxLength),
        manufacturer: dbManufacturer
      };

      this.tableItems = [];

      if (dbProducts) {
        const m = dbManufacturer.join(' / ');
        for (const p of dbProducts) {
          this.tableItems.push({manufacturer: m, product: p.name});
        }
      }
    } catch {
      this.dxCode = new DxCodeData();
      this.tableItems = [];
    }
  }
}
