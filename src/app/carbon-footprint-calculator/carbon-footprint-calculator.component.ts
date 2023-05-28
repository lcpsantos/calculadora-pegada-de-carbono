import { Component } from '@angular/core';

interface CalculatorResult {
  energyCO2: number;
  gasCO2: number;
  totalEnergyCO2: number;
  totalGasCO2: number;
}

@Component({
  selector: 'app-carbon-footprint-calculator',
  templateUrl: './carbon-footprint-calculator.component.html',
  styleUrls: ['./carbon-footprint-calculator.component.css'],
})
export class CarbonFootprintCalculatorComponent {
  showForm = true;
  showReport = false;
  energyConsumption: number = 0;
  gasConsumption: number = 0;
  result!: CalculatorResult;

  calculateFootprint() {
    const energyCO2 = this.energyConsumption * 0.0426;
    const totalEnergyCO2 = energyCO2 * 12;

    const gasCO2 = this.gasConsumption * 2.932;
    const totalGasCO2 = gasCO2 * 12;

    this.showForm = false;
    this.showReport = true;

    this.result = {
      energyCO2,
      gasCO2,
      totalEnergyCO2,
      totalGasCO2,
    };
  }

  reset() {
    this.showReport = false;
    this.energyConsumption = 0;
    this.gasConsumption = 0;
    this.result = {
      energyCO2: 0,
      gasCO2: 0,
      totalEnergyCO2: 0,
      totalGasCO2: 0,
    };
  }
}
