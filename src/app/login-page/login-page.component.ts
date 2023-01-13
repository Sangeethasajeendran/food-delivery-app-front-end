import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  msg = ""
  eMsg=""

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      let username = this.loginForm.value.username
      let password = this.loginForm.value.password
      this.api.login(username, password)
        .subscribe((result: any) => {
          console.log(result);
          this.msg = result.message
          localStorage.setItem("username",result.username)
            setTimeout(() => {
              this.router.navigateByUrl('/items-list')
            }, 2000)
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