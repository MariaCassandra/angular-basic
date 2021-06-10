import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', [ Validators.required, Validators.minLength(10), Validators.maxLength(100) ]),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  get name() {
    return this.contactForm.get('name');
   }
   get email() {
     return this.contactForm.get('email');
   }
   get subject() {
     return this.contactForm.get('subject');
   }
   get message() {
     return this.contactForm.get('message');
   }
   get nameNotValid(){
     return this.contactForm.get('name')?.invalid && this.contactForm.get('name')?.touched
   }

   get emailNotValid() {
    return this.contactForm.get('email')?.invalid && this.contactForm.get('email')?.touched
   }

   get subjectNotValid() {
     return this.contactForm.get('subject')?.invalid && this.contactForm.get('subject')?.touched
   }

   get messageNotValid() {
    return this.contactForm.get('message')?.invalid && this.contactForm.get('message')?.touched
   }

   onSubmit(){
     if( this.contactForm.invalid) {
       return Object.values(this.contactForm.controls).forEach(control => {
         control.markAsTouched();
       });
     } else if (this.contactForm.valid) {
       alert ("Your message has been sent");
       this.contactForm.reset();
     }
   }
  }
