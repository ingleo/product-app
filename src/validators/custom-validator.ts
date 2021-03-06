import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  /*public static passwordValidator(control: AbstractControl) {
	    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
	      return null;
	    } else {
	      return {'invalidPassword': true };
	    }
  }*/

  public static emailValidator(control: AbstractControl) {
    console.log('email validator')
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  public static numericValidator(controlTwo: AbstractControl) {
    console.log('numeric validator');
    if (controlTwo.value.match(/^(0|[1-9][0-9]*)$/)) {
      return null;
    } else {
      return { 'invalidNumericField': true };
    }
  }
} 