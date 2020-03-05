//declaring object with key value pairs
const object={
  title:'Hipple',
  author:'Paul Coelho',
  year:2003,
  publish_status:'good',
  review:'good',
  Famous_books:'Kindle Digest',
  //getting the key value pairs
  getName: function(){
    return this
  },
  //setting the name with the arg value
  setName:function(name){ 
    this.title=name
  }
}
//getting the name from the function
const name=object.getName().title;
console.log(name)  //output=Hipple
//setting the name with arg passed to function
object.setName('Monika')
const setname=object.getName().title;
console.log(setname) //output=Monika