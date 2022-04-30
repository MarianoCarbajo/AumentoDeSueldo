let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese el sueldo actual";

btnEnviar.addEventListener("click", () => {
  let sueldo: number = Number(dato1.value);
  
  if (sueldo <= 15000) {
    let aumento:number = sueldo * 0.20
    console.log("Usted obtuvo un aumento de $", aumento"su sueldo pasa a ser $", aumento+sueldo);
  } else if (sueldo > 15000 && sueldo <=20000) {
    let aumento:number = sueldo * 0.10
    console.log("Usted obtuvo un aumento de $", aumento"su sueldo pasa a ser $", aumento+sueldo);
  } else if (sueldo > 20000 && sueldo <=25000) {
    let aumento:number = sueldo * 0.05
    console.log("Usted obtuvo un aumento de $", aumento"su sueldo pasa a ser $", aumento+sueldo);
  } else {
    console.log ("Usted no obtuvo ningún aumento")
  }
});
