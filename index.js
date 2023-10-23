/*
const items =[{Name:"Alice ",Occupation:" Writer ",StartingPrice:30},
              {Name:"Bob ",Occupation:" Teacher ",StartingPrice:50},
              {Name:"Carol ",Occupation:" Programmer ",StartingPrice:70}             
             ];

   
// loops through items to displays Names using ID's       
list3=document.querySelector("#dataDisplayName")
     
     items.forEach((item) => {
         let p = document.createElement("p");
         p.innerText = item.Name;
         list3.append(p);
     });

// loops through items to displays Occupation using ID's   
list4=document.querySelector("#dataDisplayOc")
     
     items.forEach((item) => {
         let p = document.createElement("p");
         p.innerText = item.Occupation;
         list4.append(p);
     });

// loops through items to displays Starting Price using ID's   
list5=document.querySelector("#dataDisplaySP")
     
        items.forEach((item) => {
            let p = document.createElement("p");
            p.innerText ="  $"+item.StartingPrice;
            list5.append(p);
        });

// function that gets the average of the initial
// data being displayed
function average(items)

           {
            const arr = Object.values(items);
            const sum = (prev, cur) => ({StartingPrice: prev.StartingPrice + cur.StartingPrice});
            const avg = arr.reduce(sum).StartingPrice / arr.length;
            return (avg); 
            }

// Displays the average by calling the average function and using the average
// price id to specific where to display
const  list2=document.querySelector("#averagePrice")
     
            let p = document.createElement("p");
            p.innerText = "  $ "+average(items);
            list2.append(p);
  
     
const counter=0;

//runs the functin addFreelancer every 3 seconds.

setInterval(addFreelancers ,3000);


function addFreelancers(){

//defines array of objects (data)
const items2 =[{Name:"Alice",Occupation:"Writer",StartingPrice:30},
              {Name:"Bob",Occupation:"Teacher",StartingPrice:50},
              {Name:"Carol",Occupation:"Programmer",StartingPrice:70}             
             ];

//defines array of names and randomly selects a name
const freelancerName = ["Mike","John","Mary","Sam","Steve","Anna","Kelly","joe","Katherine","Kathy","Jeff","Jamnes","Tom","Thomas"];
const randomName= freelancerName[Math.floor(Math.random()*freelancerName.length)];

//defines array of occupation and randomly selects an occupation
const freelancerOccupation = ["Carpenter","Cashier","Lawyer","Professor","Doctor","Janitor","Mechanic","Vet","Plumber","Scientist"];
const randomOccupation=freelancerOccupation[Math.floor(Math.random()*freelancerOccupation.length)];

 //defines array of starting price  and randomly selects a starting price  
const freelancerStartingPrice = [25,30,35,40,45,50,55,60,65,70,75,80,];
const randomStartingPrice=freelancerStartingPrice[Math.floor(Math.random()*freelancerStartingPrice.length)];

const N=randomName;
const O=randomOccupation;
const S=randomStartingPrice;

//pushes the randomly selected data to the items2 array of objects   
items2.push({Name:N,Occupation:O,StartingPrice:S});


//creates element and uses the dataDisplyName to display
// the randomly selected name.
const  list6=document.querySelector("#dataDisplayName")
     const P = document.createElement("p");
            P.innerText = randomName;
            list6.append(P);

//creates element and uses the dataDisplyOc ID to display
// the randomly selected Occupation.         
const  list7=document.querySelector("#dataDisplayOc");
      const T= document.createElement("p");
            T.innerText =randomOccupation;
            list7.append(T);

//creates element and uses the dataDisplySP ID to display
// the randomly selected starting price.       
const  list8=document.querySelector("#dataDisplaySP")
      const M= document.createElement("p");
            M.innerText = " $"+randomStartingPrice;
            list8.append(M);


//function that calculates the average starting price of
//the initial data add and the add data
function average2(items2)    
   {
     const arr = Object.values(items2);
     const sum = (prev, cur) => ({StartingPrice:prev.StartingPrice + cur.StartingPrice});
     const avg =arr.reduce(sum).StartingPrice/ arr.length;
     return (avg); 
   }

// Displays the average by calling the average2 function and using the average
// price id to specific where to display
const  list2=document.querySelector("#averagePrice")

    // let p = document.createElement("p");
     p.innerText = "  $ "+average2(items2);
     list2.append(p);

   
}
*/