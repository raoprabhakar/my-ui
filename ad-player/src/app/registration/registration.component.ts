import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  fg = new FormGroup({
    firstName : new FormControl({ value: 'rao', disabled: true }, [Validators.required]),
    lastName : new FormControl('rama rao'),
    email : new FormControl('prabhakar76@gmail.com'),
    phone : new FormControl('832-744-3333')
  });

  cart = new FormGroup({
    qnty : new FormControl(0)
  })

  constructor(private registration:RegistrationService) {
  }

  ngOnInit(): void {
  }

  addQnty = () => {
    let data:any = this.registration.addQnty().subscribe(data => {
      this.cart.controls.qnty.setValue(data);
    });
    
  }

  removeQnty = () => {
    let data:any = this.registration.removeQnty().subscribe(data => {
      this.cart.controls.qnty.setValue(data);
    });
    
  }




}
