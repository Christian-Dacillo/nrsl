import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-radio-license',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network-radio-license.component.html',
  styleUrls: ['./network-radio-license.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkRadioLicenseComponent {
  previewMode = false;
  dataOnlyMode = false;

  licenseData = {
    issuedDate: 'MARCH 23, 2026',
    licenseNo: 'NRSL-EE-0561-2026 (NEW)',
    licensee: 'MALIDONG HIGH SCHOOL',
    postalAddress: 'Z-3 Brgy, Malidong, Pio Duran, Albay',
    frequencyRange: '136-174 MHz',
    bandwidthEmission: '16KOF3E',
    hoursOfOperation: '1(HJ)',
    natureOfService: 'CO',
    effectivityFrom: 'MARCH 23, 2026',
    effectivityTo: 'MARCH 22, 2027',
    pointOfService: 'To communicate to all duly authorized radio stations of the licensee within TEST',
    frequencies: [
      { ch: 'CH1::', tx: '169.0625 MHz', rx: '169.0625 MHz' },
    ],
    equipment: [
      { location: 'Portable', callSign: 'DXH-8063', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213685' },
      { location: 'Portable', callSign: 'DXH-8062', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213559' },
      { location: 'Portable', callSign: 'DXH-8061', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213385' },
      { location: 'Portable', callSign: 'DXH-8060', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213452' },
      { location: 'Portable', callSign: 'DXH-8059', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213741' },
      { location: 'Portable', callSign: 'DXH-8058', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213642' },
      { location: 'Portable', callSign: 'DXH-8057', power: '0.005', equipment: 'BAOFENG UV-82', serialNo: 'PH8213386' },
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

  get emptyRows(): number[] {
    const filled = this.licenseData.equipment.length;
    const min = 7;
    return filled < min ? Array(min - filled).fill(0) : [];
  }

  enterPreview(): void {
    this.previewMode = true;
    this.dataOnlyMode = false;
  }

  backToEdit(): void {
    this.previewMode = false;
    this.dataOnlyMode = false;
  }

  printFull(): void {
    this.dataOnlyMode = false;
    setTimeout(() => window.print(), 50);
  }

  printDataOnly(): void {
    this.dataOnlyMode = true;
    setTimeout(() => {
      window.print();
      // restore after print dialog closes
      setTimeout(() => { this.dataOnlyMode = false; }, 500);
    }, 50);
  }

  save(event: Event, obj: any, field: string): void {
    obj[field] = (event.target as HTMLElement).innerText.trim();
  }

  saveNote(event: Event, index: number): void {
    this.licenseData.notes[index] = (event.target as HTMLElement).innerText.trim();
  }

  blurOnEnter(event: Event): void {
    (event as KeyboardEvent).preventDefault();
    (event.target as HTMLElement).blur();
  }
}
