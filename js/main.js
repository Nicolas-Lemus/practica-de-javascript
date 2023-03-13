/* FOR*/
/* i++  i= i + 1*/
/*
for (let i = 2; i <= 13; i++){
    console.log(i);
}
let limite = prompt("ingrese numero limimte");
let ingreso = parseint(prompt("ingresar numero a multiplicar"));
*/
/*
let suUsuario = "Nicolas";
let suContraseña = "1234";

for(let i = 0; 1 <=3; i++){
    let nombre = prompt("ingrese usuario");

    if( nombre == suUsuario){
        alert("¡Usuario correcto! " + "Bienvenido " + nombre);

    let contraseña =prompt("ingrese su contraseña");

    if (contraseña == suContraseña){
        alert("Contraseña correcta! " + "Ingresando")
        break;
    }
    alert("verificar contraseña")
        
    }
    alert("¡usuario incorrecto! ");
}*/
/*
let pinUsuario = "1234";
let ingreso =false;

for(let i = 2; i >= 0; i--){
    let pin = prompt("Ingrese su PIN:" + "tienes "+ (i+1) + " oportunidades");

    if(pin == pinUsuario) {

        alert("Ingreso con exito");
        ingreso = true;
        break;
    }
    else{
        alert("Usuario incorrecto. Reintente.");
    }
} 
        
        if(ingreso){
            let=saldo =2000;

            while(opcion!="x")
            if(opcion="1"){
                
            }
            let opcion=prompt("elegi una opcion: \n1-Saldo, \n2-retiro , \n3-depocito , \n4- presione x para salir");

        }else{
            alert("error de ingreso");
        }
*/
/*
let suUsuario = "Nicolas || nicolas";
let pinUsuario = "1234";
let saldo = 2000;
let ingreso = false;
let opcion = "";

for (let i = 2; i >= 0; i--){

    let usuario=prompt("Ingrese su usuario");
    if (usuario===suUsuario){
        alert("Bienvenido" + " " + usuario);
        let pin = prompt("Ingrese su PIN: " + "Tiene " + (i + 1) + " oportunidades.");

if (pin === pinUsuario) {
    alert("Ingreso con éxito.");
    ingreso = true;
    } else {
        alert("PIN incorrecto. Reintente.");
    }
    }
    else{
        alert("verificar usuario")
    }

    


if (ingreso) {
    while (opcion !== "x") {
    opcion = prompt("Elige una opcion: \n1. Saldo \n2. Retiro \n3. Deposito \nx. Salir");

    if (opcion == "1") {
        alert("Tu saldo es de $" + saldo + ".");

    } else if (opcion == "2") {
        let monto = prompt("Ingresa el monto a retirar:");
    if (monto == "") {
        alert("ingrese su monto. Gracias");
    } else {
        if (monto > saldo) {
            alert("Saldo insuficiente.Usted es pobre! Recuerdelo!");
        } else {
            saldo -= monto;
            alert("Retiro exitoso.Su saldo es de $" + saldo + ".");
        }
    }
    } else if (opcion == "3") {
        let monto = prompt("Ingresa el monto a depositar:");

        if (monto == ""){
            alert("ingrese su monto.");

        } else {
            saldo += monto;
            alert("Deposito exitoso.Su saldo es de $" + saldo + ".");
        }

        }else if (opcion == "x") {
            alert("Gracias por elegirnos.");
            break;
    }
}
}
else{
    alert("Sus intentos finalizaron .Reintente mas tarde, Gracias.")
}}


/*
for(let i = 1; i <= 3; i++){
    let nombre = prompt("Ingrese usuario:");

    if(nombre == suUsuario) {

        alert("¡Usuario correcto! Bienvenido " + nombre);

        let contraseña = prompt("Ingrese su contraseña:");

        if(contraseña === suContraseña){
            alert("Contraseña correcta!" + " " + "Bienvenido" );
            break;
        }else{
            alert("Contraseña incorrecta. Verifique.");
        }
    }else{
        alert("Usuario incorrecto. Reintente.");
    }
} 
*/



/* while  bucle infinito */
/*
let pass="gato";

let continuar =true;

let passUser= prompt("ingresa contraseña");

while(passUser != pass){
    alert("pass incorrecta");
    passUser= prompt("ingresa contraseña");
}*/
/*
let suUsuario = "Nicolas";
let pinUsuario = "1234";
let saldo = 2000;
let ingreso = false;
let opcion = "";

for (let i = 2; i >= 0; i--){
    let usuario = prompt("Ingrese su usuario  " + "Tiene " + (i + 1) + " oportunidades.");

    if (usuario === suUsuario){
        alert("Bienvenido " + usuario);

    for(let i = 2; i >= 0; i--){
        let pin = prompt("Ingrese su PIN:"  + "Tiene " + (i + 1) + " oportunidades.");
        if (pin === pinUsuario) {
            alert("Ingreso con éxito.");
            ingreso = true;
        } else {
            alert("PIN incorrecto. Reintente.");
        }
    }
    } else {
        alert("Verificar usuario");
    }
}

if (ingreso) {
    while (opcion !== "x") {
        opcion = prompt("Elige una opcion: \n1. Saldo \n2. Retiro \n3. Deposito \nx. Salir");
        if (opcion == "1") {
            alert("Tu saldo es de $" + saldo + ".");
        } else if (opcion == "2") {
            let monto = prompt("Ingresa el monto a retirar:");
            if (monto == "") {
                alert("Ingrese su monto. Gracias");
                
            } else {
                monto = parseFloat(monto);
                if (monto > saldo) {
                    alert("Saldo insuficiente. Usted es pobre! Recuerdelo!");
                } else {
                    saldo -= monto;
                    alert("Retiro exitoso. Su saldo es de $" + saldo + ".");
                }
            }
        } else if (opcion == "3") {
            let monto = prompt("Ingresa el monto a depositar:");
            if (monto == ""){
                alert("Ingrese su monto.");
                
            } else {
                monto = parseFloat(monto);
                saldo += monto;
                alert("Deposito exitoso. Su saldo es de $" + saldo + ".");
            }
        } else if (opcion == "x") {
            alert("Gracias por elegirnos.");
            break;
        }
    }
} else {
    alert("Sus intentos finalizaron. Reintente mas tarde. Gracias.");
}*/

/*solucion de chatgpt*/
let suUsuario = ["Nicolas" , "NICOLAS" , "nicolas"];
let pinUsuario = "1234";
let saldo = 20000;
let ingreso = false;
let opcion = "";

    alert("Bienvenido al Banco Central");


for (let i = 2; i >= 0; i--){
    let usuario = prompt("Ingrese su Usuario. Tiene " + (i + 1) + " oportunidades.");

    if (suUsuario.includes(usuario)){
        alert("Bienvenido " + usuario);

        for (let j = 2; j >= 0; j--) {
            let pin = prompt("Ingrese su PIN. Tiene " + (j + 1) + " oportunidades.");
            if (pin === pinUsuario) {
                alert("Ingreso con exito.");
                ingreso = true;
                break;
            } else {
                alert("PIN incorrecto. Reintente.");
            }
        }
        if (ingreso) {
            break;
        }
    } else {
        alert("Nombre usuario incorrecto.");
    }
}

if (ingreso) {
    while (opcion !== "x") {
        opcion = prompt("Elige una opcion: \n1. Saldo actual \n2. Retirar dinero \n3. Depositar dinero \nx. Salir");

        if (opcion == "1") {
            alert("Tu saldo es de $" + saldo + ".");
        } else if (opcion == "2") {
            let monto = prompt("Ingresa el monto a retirar:");
            if (monto == "") {
                alert("Ingrese su monto. Gracias");
            } else {
                monto = parseFloat(monto);
                if (monto > saldo) {
                    alert("Saldo insuficiente. Usted es pobre! Recuerdelo!");
                } else {
                    saldo -= monto;
                    alert("Retiro exitoso. Su saldo es de $" + saldo + ".");
                }
            }
        } else if (opcion == "3") {
            let monto = prompt("Ingresa el monto a depositar:");
            if (monto == ""){
                alert("Ingrese su monto.");
                
            } else {
                monto = parseFloat(monto);
                saldo += monto;
                alert("Deposito exitoso. Su saldo es de $" + saldo + ".");
            }
        } else if (opcion == "x") {
            alert("Gracias por elegirnos.");
            break;
        }
    }
} else {
    alert("Sus intentos finalizaron. Reintente mas tarde. Gracias.");
}
