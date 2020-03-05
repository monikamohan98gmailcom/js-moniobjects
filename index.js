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
  },
  setTitle:function(title){
    this.title=title
  },
  setYear:function(year){
    this.year=year
  },
  setPublishingStatus:function(ps){
    this.publish_status=ps
  },
  setreview:function(reiew){
    this.review=reiew
  },
  setFamousBooks:function(fb){
    this.Famous_books=fb
  }
}
//getting the name from the function
const name=object.getName().title;
console.log(name)  //output=Hipple
//setting the name with arg passed to function
object.setName('Monika')
const setname=object.getName().title;
console.log(setname) //output=Monika
object.setTitle('The end')
const setname=object.getName().title;
console.log(setname) //output=The end
object.setYear(2019)
const setname=object.getName().year;
console.log(setname) //output=2019
object.setPublishingStatus('Super')
const setname=object.getName().publish_status;
console.log(setname) //output=Super
object.setreview('Awesome')
const setname=object.getName().review;
console.log(setname) //output=Awesome
object.setFamousBooks('The legacy')
const setname=object.getName().Famous_books;
console.log(setname) //output=The legacy
