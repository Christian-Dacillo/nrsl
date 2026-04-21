import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-network-radio-license',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './network-radio-license.component.html',
  styleUrls: ['./network-radio-license.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkRadioLicenseComponent {
  // 'form' = edit form, 'document' = document view, 'preview' = preview mode
  viewMode: 'form' | 'document' | 'preview' = 'form';
  dataOnlyMode = false;

  licenseData = {
    issuedDate: 'March 23, 2026',
    licenseNo: 'NRSL-EE-0561-2026 (NEW)',
    licensee: 'MALIDONG HIGH SCHOOL',
    postalAddress: 'Z-3 Brgy. Malidong, Pio Duran, Albay',
    frequencyRange: '136-174 MHz',
    bandwidthEmission: '16KOF3E',
    hoursOfOperation: 'I(HJ)',
    natureOfService: 'CO',
    effectivityFrom: 'March 23, 2026',
    effectivityTo: 'March 22, 2027',
    pointOfService: 'To communicate to all duly authorized radio stations of the licensee within Pio Duran, Albay.',
    frequencies: [
      { ch: 'OH1:', tx: '169.0625 MHz', rx: '169.0625 MHz' }
    ],
    equipment: [
      { location: 'Portable', callSign: 'DXH-8063', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213685' },
      { location: 'Portable', callSign: 'DXH-8062', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213559' },
      { location: 'Portable', callSign: 'DXH-8061', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213385' },
      { location: 'Portable', callSign: 'DXH-8060', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213452' },
      { location: 'Portable', callSign: 'DXH-8059', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213741' },
      { location: 'Portable', callSign: 'DXH-8058', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213642' },
      { location: 'Portable', callSign: 'DXH-8057', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PHB213386' }
    ],
    signatoryName: 'ATTY. JUDY SANN N. BILANGEL',
    signatoryTitle: 'OIC-Regional Director, RV',
    notes: [
      'This license is issued subject to the provisions of Act No. 3846, as amended and the regulations promulgated there under, and the Radio Regulations annexed to the International Telecommunications Convention in force.',
      'This license is valid only when payment of the required fees is indicated hereon.',
      'Renewal of this license should be filed Sixty (60) days before the expiration.',
      'This license is issued subject to inspection of the radio station at any available time. Any discrepancy (ies) found at the time of inspection will cause revocation of this license.',
      'The actual operation of this radio station shall be carried only at all times by duly licensed radio operator.',
      'Issuance of this license is without prejudice to any or all administrative case filed against this station.',
      'Frequency assignment on sharing and strictly non-interference basis (NIB).',
      'Paid under O.R.: 1488792    Amount: 3,440.38    Dated: March 23, 2026'
    ]
  };

  constructor(private cdr: ChangeDetectorRef) {}

  get emptyRows(): number[] {
    const filled = this.licenseData.equipment.length;
    const min = 7;
    return filled < min ? Array(min - filled).fill(0) : [];
  }

  submitForm(): void {
    this.viewMode = 'document';
    this.cdr.markForCheck();
  }

  backToForm(): void {
    this.viewMode = 'form';
    this.dataOnlyMode = false;
    this.cdr.markForCheck();
  }

  enterPreview(): void {
    this.viewMode = 'preview';
    this.dataOnlyMode = false;
    this.cdr.markForCheck();
  }

  backToDocument(): void {
    this.viewMode = 'document';
    this.dataOnlyMode = false;
    this.cdr.markForCheck();
  }

  printFull(): void {
    this.dataOnlyMode = false;
    setTimeout(() => window.print(), 50);
  }

  printDataOnly(): void {
    this.dataOnlyMode = true;
    this.cdr.markForCheck();
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        this.dataOnlyMode = false;
        this.cdr.markForCheck();
      }, 500);
    }, 50);
  }

  addEquipmentRow(): void {
    this.licenseData.equipment.push({ location: '', callSign: '', power: '', equipment: '', serialNo: '' });
    this.cdr.markForCheck();
  }

  removeEquipmentRow(index: number): void {
    this.licenseData.equipment.splice(index, 1);
    this.cdr.markForCheck();
  }
}
