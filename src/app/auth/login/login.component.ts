import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showError: boolean = false
  public hidePassword: boolean = true;
  public myForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
  }

  get myFormValue() {
    return this.myForm.value as User
  }

  onSubmit() {
    this.authService.login(this.myFormValue)
      .subscribe(
        (res) => {
          this.showError = false
          this.router.navigate(['/news'])
        },
        (err) => {
          this.showError = true
        },

      )
    this.myForm.setValue({
      username: '',
      password: ''
    })
  }

  closeErrorMessage() {
    this.showError = false
  }
}
