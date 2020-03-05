//object creation with braces
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
  //setting  with the arg value
  setName:function(name){ 
    this.title=name
  },
  setTitle:function(title){
    this.author=title
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
const name=object.getName().title;
console.log(name)  //output=Hipple
object.setName('Monika book')
const setname=object.getName().title;
console.log(setname) //output=Monika book

const name=object.getName().author;
console.log(name) //paul coelho
object.setTitle('Monika')
const setname=object.getName().author;
console.log(setname) //output=monika

const name=object.getName().year;
console.log(name) //2003
object.setYear(2019)
const setname=object.getName().year;
console.log(setname) //output=2019

const name=object.getName().publish_status;
console.log(name) //good
object.setreview('Awesome')
object.setPublishingStatus('Super')
const setname=object.getName().publish_status;
console.log(setname) //output=Super

const name=object.getName().review;
console.log(name)  //good
object.setreview('Awesome')
const setname=object.getName().review;
console.log(setname) //output=Awesome

const name=object.getName().Famous_books;
console.log(name)  //Kindle digest
object.setreview('Awesome')
object.setFamousBooks('The legacy')
const setname=object.getName().Famous_books;
console.log(setname) //output=The legacy

// obj={a:this,
//     fn(){
//       console.log(this); 
//       return {c:this,
//                fn1(){
//                  console.log(this);
//                  }
//               }
//         }
//     }

//------------------------------------
//object creation using function
function People(){
  let id=1; //let,const,var are private keywords
  this.name='monika';
  this.getId=function(){
    return id;
  }
  this.setID=function(id1){
    id=id1;
  }
}

const person=new People()
console.log('object is: '+person.name);
//to get the private variables,use getmethod
console.log(person.getId());
person.setID(2);
console.log(person.getId())