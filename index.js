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


//--------------------------------------------
// task
function objdetails(name,m1,m2,m3){
    this.name=name;
    this.m1=m1;
    this.m2=m2;
    this.m3=m3;
}

function objtotals(objdetail){
    this.name=objdetail.name;
    this.total=parseInt(objdetail.m1)+parseInt(objdetail.m2)+parseInt(objdetail.m3);
} 

function objavgs(objtotal){
    this.avg=(parseInt(objtotal.total))/3
    
}
function totdetails(objtotal,objavg)
{
    this.name=objtotal.name;
    this.total=objtotal.total;
    this.avg=objavg.avg
    
}
var name=prompt('Enter the name: ')
var m1=prompt('Mark 1')
if(isNaN(m1)){
    alert('Enter valid values')
}
else{
  var m2=prompt('Mark 2')
  if(isNaN(m2)) 
    alert('Enter valid values')
  else{ var m3=prompt('Mark 3') 
if(isNaN(m3)) alert('Enter valid values')
else{
    const objdetail=new objdetails(name,m1,m2,m3);
    console.log(objdetail)
    const objtotal=new objtotals(objdetail);
    console.log(objtotal)
    const objavg=new objavgs(objtotal);
    console.log(objavg);
    const totdetail=new totdetails(objtotal,objavg)
    console.log(totdetail)
}
}}
