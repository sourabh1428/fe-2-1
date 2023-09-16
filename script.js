const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "ayush", age: 23, profession: "sde" },


];

// 1. Print Developers
function printDeveloper() {
  for(let a of data){
    if(a.profession=="developer")console.log(a.name);
  }
}

// 2. Add Data
function addData() {
  let x=prompt("enter name");
  let y=prompt("enter age");

  let z=prompt("enter profession");


  data.push({name:x,age:parseInt(y),profession:z});
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0;i<data.length;i++){
    if(data[i].profession=="admin"){
      //remove this part
      data.splice(i,1);
    }
  }
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let dummy=[{
    name:"chandu",
    age:23,
    profession:"barber",
  },
  {
    name:"abdul",
    age:17,
    profession:"enterprenuer"
  }

  ];
  
    dummy=dummy.concat(data);
  console.log(dummy);


}

// 5. Average Age
function averageAge() {
  let ans=0;
  for(let i=0;i<data.length;i++){
    ans+=data[i].age;
  }
  console.log(ans/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i=0;i<data.length;i++){
    if(data[i].age>25){
      console.log(data[i].name);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {

  let map=new Map();
  for(let i=0;i<data.length;i++){
    if(map.has(data[i].profession)){
      map.set(data[i].profession,map.get(data[i].profession)+1);
    }
    else{
      map.set(data[i].profession,1);
    }
  }
  for(let i=0;i<data.length;i++){
    if(map.get(data[i].profession)==1){
      console.log(data[i].profession);
    }
  }

}

// 8. Sort by Age
function sortByAge() {
  let k=data.sort((a,b)=>a.age-b.age)
  console.log(k);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    if(data[i].name=="john"){
      data[i].profession="manager";
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let a=[{developer:0},{admin:0},{manager:0},{sde:0}];
  data.forEach((x)=>{
    if(x.profession=="developer"){
      a[0].developer+=1;
    }
    else if(x.profession=="admin"){
      a[1].admin+=1;
    }else if(x.profession=="manager"){
      a[2].manager+=1;
    }else if(x.profession=="sde"){
      a[3].sde+=1;
    }
  });

  console.log(a);
}
