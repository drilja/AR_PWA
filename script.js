
console.log("test erfolgreich")

// window.onload = function () {
//   document
//     .querySelector(".change")
//     .addEventListener("click", function () {
//       // here you can change also a-scene or a-entity properties, like
//       // changing your 3D model source, size, position and so on
//       // or you can just open links, trigger actions...
//       console.log("Button wurde geklickt");
//       alert("This is marker 1");
      
//     });
// };

//   window.onload = () => {
//     const button = document.querySelector('button[data-action="change"]')
//     button.innerText = '?';
//     console.log("Seite wurde geladent");

// };

document.getElementById("info").addEventListener("click", changePuppet);

function changePuppet(){
  alert("This is marker 1");
  console.log("Button wurde geklickt");
}

// window.onload = function () {
//   document
//     .querySelector(".info")
//     .addEventListener("click", function () {
//       // here you can change also a-scene or a-entity properties, like
//       // changing your 3D model source, size, position and so on
//       // or you can just open links, trigger actions...
//       alert("This is marker 1");
//       console.log("Button wurde geklickt");
//     });
// };
