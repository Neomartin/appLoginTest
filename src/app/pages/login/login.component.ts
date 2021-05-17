import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    username: ['', [ Validators.required, Validators.minLength(4) ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]],
  });
  
  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService
  ) {}

  ngOnInit(): void {

  }
  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }
  login() {
    if(this.form.valid){
      console.log(this.form.getRawValue());
      this.LoginService.login(this.form.getRawValue()).subscribe((resp:any) => {
        console.log(resp);
        localStorage.setItem('token', JSON.stringify(resp.token));
        localStorage.setItem('user', JSON.stringify(resp.user));
        Swal.fire({
          title: 'Login Correcto!',
          text: 'Se ha logueado correctamente, redireccionando...',
          icon: 'success',
          timer: 500,
        }).then(() => {
          window.location.href = '/home';
        })
      }, err => {
        console.log(err)
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Entendido'
        })
      });
    }
  }
  // get f() { return this.loginForm.controls }

 

}
