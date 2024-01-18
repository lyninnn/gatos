document.querySelector("body").addEventListener("mousemove", eyeball);

// Esta funcion se encarga de dar la impresion de que las pupilas sigue el raton

function eyeball() {
  const eye = document.querySelectorAll(".ojo");
  // const eye2 = document.querySelectorAll(".eye2");
  // // Mi selector de pupila
  // const eyeIn = document.querySelectorAll(".eye-in");     
  // Mi selector de pupila

  eye.forEach(function (ojo) {
    let x = ojo.getBoundingClientRect().left + ojo.clientWidth / 2;
    let y = ojo.getBoundingClientRect().top + ojo.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;
    ojo.style.transform = "rotate(" + rotation + "deg)";
  });
  // eye2.forEach(function (eye2) {
  //   let x = eye2.getBoundingClientRect().left + eye2.clientWidth / 2;
  //   let y = eye2.getBoundingClientRect().top + eye2.clientHeight / 2;
  //   let radian = Math.atan2(event.pageX - x, event.pageY - y);
  //   let rotation = radian * (180 / Math.PI) * -1 + 270;
  //   eye2.style.transform = "rotate(" + rotation + "deg)";
  // });

////////////////////////////////////////

  // eyeIn.forEach(function (eyeIn) {
  //   let x = eyeIn.getBoundingClientRect().left + eyeIn.clientWidth / 2;
  //   let y = eyeIn.getBoundingClientRect().top + eyeIn.clientHeight / 2;
  //   let radian = Math.atan2(event.pageX - x, event.pageY - y);
  //   let rotation = radian * (180 / Math.PI) * 1 + 270;
  //   eyeIn.style.transform = "rotate(" + rotation + "deg)";
  // });


}
// funcion para que se cierre los ojos al pasar raton por encima de ellos.
// Cerrando ojos
// document.querySelector(".box-front").addEventListener("mouseover", eyecloset);
// function eyecloset() {
//   const eyeclosetop = document.querySelector(".box-t");
//   eyeclosetop.style.transform = "translate(0rem, 5rem)";
//   const eyeclosebot = document.querySelector(".box-b");
//   eyeclosebot.style.transform = "translate(0rem, -5rem)";

//   console.log("cierra");
// }

// funcion para que se abran los ojos al sacar el raton de los ojos.
// Abriendo ojos

// document.querySelector(".box-front").addEventListener("mouseout", eyeopent);
// function eyeopent() {
//   const eyeopentop = document.querySelector(".box-t");
//   eyeopentop.style.transform = "translate(0rem, 0rem)";
//   const eyeopenbot = document.querySelector(".box-b");
//   eyeopenbot.style.transform = "translate(0rem, 0rem)";
//   console.log("abierto");

//   // alert("holi")
// }

// function eyeopenb(){
//   const eyeopenbot = document.querySelector('.box-b');
//   eyeopenbot.style.transform = "translate(0rem, 0rem)";
//   alert("holi")
// }
