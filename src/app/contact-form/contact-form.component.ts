import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  FormData!: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl("", [Validators.required, Validators.email]),
      Message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData:any) {
    console.log(FormData);
    alert("Thank you for submitting form. name: " + FormData.Name + " | email:  " + FormData.Email + " | content:  " + FormData.Message );
  }
}