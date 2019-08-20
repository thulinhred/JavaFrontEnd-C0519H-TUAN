import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    function comparePassword(c: AbstractControl) {
      const v = c.value;
      return ( v.password === v.confirmPassword) ?
      null: {
        passwordnotmatch: true
      };
    }
    this.registerForm = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl(),
        confirmPassword: new FormControl('')
      }, comparePassword)

    });

    this.registerForm.patchValue ({
      email: 'info@gmail.com'
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}

