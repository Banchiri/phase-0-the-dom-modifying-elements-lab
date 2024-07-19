// // const element = document.createElement("div")
// // document.body.append(element)
// const ul =document.createElement("ul")
// document.body.append(ul)
// for(let i =0; i<3; i++){
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }
// // element.append(ul);
// const main =document.getElementById("main")
// main.innerHTML = 
// "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
// const element = document.getElementById("main")
// element.style.height = "200px";
// element.style.backgroundColor = "#27647B";
// element.textContent = "wow"
// element.className = "pet-listing dog";
// element.classList.remove("dog");
// element.classList.add("cat", "sale");

let main = document.querySelector("main#main");
main.remove();
const newHeader=document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Sandra is the champion";
document.body.append(newHeader);