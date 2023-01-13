import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  eMsg=''
  msg = ""
  constructor(private fb: FormBuilder, private api: ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  signUp() {
    if (this.signupForm.valid) {
      let username = this.signupForm.value.username
      let password = this.signupForm.value.password
      this.api.signUp(username, password)
        .subscribe((result: any) => {
          console.log(result);
          this.msg = result.message
          this.router.navigateByUrl('/login-page')
          
        },
          (result: any) => {
            this.eMsg=result.error.message

          }
        )



    }
    else {
      alert('invalid')
    }
  }
}
