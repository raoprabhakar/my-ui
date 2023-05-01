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
    let zipCodeArray = ["75019","75063"];
    setInterval(()=>{
      const randomIndex = Math.floor(Math.random() * zipCodeArray.length);
      console.log(randomIndex);
      let zipCode = zipCodeArray[randomIndex]
      this.adsPikcerService.findPartnerImageByLocation(zipCode).subscribe((data) => {
        this.data = data.output;
      });
    },5000)
    
  }

}
