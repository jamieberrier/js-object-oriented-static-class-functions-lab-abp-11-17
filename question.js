'use strict';
class Question{
  constructor(){

  }

  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All;
  }
}
