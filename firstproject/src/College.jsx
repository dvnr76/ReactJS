
// let college= 'SVECW';
const myObj = [
    {
    name: 'Raju',
    RegdNo: '1201',
    
    meta: {
      minutesWriting: 20,
      minutesProcrastinating: 0,
    }
},
    {
        name: 'Rosshhhhh',
        writing: true,
        enjoyment: 10,
        meta: {
          minutesWriting: 20,
          minutesProcrastinating: 0,
        }
    }

];
  
function College (){
    
const students=myObj.map((item)=>{
    return <div>My College is awesome and it is {item.name}</div>
})

return (students);
    
}

export default College;