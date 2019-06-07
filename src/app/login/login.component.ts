import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFom = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.required)
  })
  constructor(private auth : AuthService, private msg :MessageService, private router : Router) { }
  ngOnInit() {
  }
  
  login(form: FormGroup){
    console.log(form.value)
      this.auth.login(form.value).subscribe(resp => {
        this.router.navigate(['users']);
      },error =>{
        this.showError('error');
      }) 
  }

  showSuccess(m: string) {
    this.msg.add({severity:'success', summary: 'Exito!', detail: m, life:3000});
  }
  showError(m: string) {
    this.msg.add({severity:'error', summary: 'Error!', detail: m, life:3000});
  } 
}
