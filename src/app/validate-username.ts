import {FormControl} from "@angular/forms";

const USERNAME_REG = new RegExp("^1[0-9]{10,10}$");

export function validateUserName(c: FormControl) {
  // return null;
  if(USERNAME_REG.test(c.value)) {
    return null;
  } else {
    return {
      userName:{
        valid: true,
        errorMsg: '请输入合法的电话号码'
      }
    }
  }
}
