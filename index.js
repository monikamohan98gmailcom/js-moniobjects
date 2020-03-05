const object={
  title:'Hipple',
  author:'Paul Coelho',
  year:2003,
  publish_status:'good',
  review:'good',
  Famous_books:'Kindle Digest',
  getName: function(){
    return this
  },
  setName:function(name){
    this.title=name
  }
}

const name=object.getName().title;
console.log(name)
object.setName('Monika')
const setname=object.getName().title;
console.log(setname)