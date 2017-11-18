'use strict';
class Question{
  constructor(id, content){
    this.id = id
    this.content = content
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All;
  }

  static find(id){
    return this.All().filter(function(question){
      return question.id === id;
    })
  }
}
Question._All = []

Question.find(id)
