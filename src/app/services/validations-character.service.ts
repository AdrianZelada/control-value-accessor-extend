import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsCharacterService {

  constructor() { }

  isNumber(n: any) {
    const pattern = /^\d+$/;
    return pattern.test(n);
  }

  isLetter(l: string) {
    const pattern  = /^[a-z]+$/i;
    return pattern.test(l);
  }
}
