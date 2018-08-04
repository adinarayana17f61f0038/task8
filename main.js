// BY USING XMLHttpRequest
// function loadjson(file,callback)
// {
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function()
//   {
//     if(xhr.readyState===4 && xhr.status=="200")
//     {
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send();
// }
// loadjson("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
        }
        else{
          reject(new Error('error'));
        }
    })
  })
}
var fetchedData=loadjson("data.json");
fetchedData.then(data=>{  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})

var child2=document.querySelector("#child2");
// Career
function career(car){
  var heading=document.createElement("h1");
  heading.textContent="Career Objective";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}

//education
function education(edu){
  var heading=document.createElement("h1");
  heading.textContent="Education Qualifications";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> S.no  </td> <td> Degree </td> <td> Institute </td> <td> Data </td>  </tr>";
  // table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(var i=0;i<edu.length;i++){
  tr1+="<tr> <td>"+(i+1)+"</td> <td>"+edu[i].Degree+" </td><td>"+edu[i].Institute_Name+"</td><td>"+edu[i].data+"</td></tr>";
   }
    table.innerHTML=tr+tr1;
}

//  skills
function skills(skill){
  var heading=document.createElement("h1");
  heading.textContent="Technical Skills";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  for(var i=0;i<skill.length;i++){
    var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child2.appendChild(title);
  var list=document.createElement("ul");
  child2.appendChild(list);
  console.log(skill[i].set.length);
  for(var j=0;j<skill[i].set.length;j++){
    var listItem=document.createElement("li");
    listItem.textContent=skill[i].set[j];
    list.appendChild(listItem);
    }
}
}
//achievements
function achievements(achieve){
  var heading=document.createElement("h1");
  heading.textContent="Achievements";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var list=document.createElement("ul");
  child2.appendChild(list);
  var i=0;
  var listItem="";
  while(i<achieve.length){
    listItem+="<li>"+achieve[i].achievedData+"</li>";
    i++;
  }
  list.innerHTML=listItem;
}
