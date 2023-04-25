import { Component, OnInit } from '@angular/core';
import { AdsPickerService } from '../ads-picker.service';

@Component({
  selector: 'app-ads-displayer',
  templateUrl: './ads-displayer.component.html',
  styleUrls: ['./ads-displayer.component.css']
})
export class AdsDisplayerComponent implements OnInit{
 adsPikcerService !:AdsPickerService;
 data:any
  constructor(adsPickerService : AdsPickerService) {
    this.adsPikcerService = adsPickerService;
  }

  ngOnInit(): void {
    let zipCode = "75019"
    this.adsPikcerService.findPartnerImageByLocation(zipCode).subscribe((data) => {
      this.data = data.output;
    })
  }

}
