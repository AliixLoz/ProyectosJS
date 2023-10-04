const names = ["Aliix", "Jen", "Banana", "Are"]

const getNamesPromise = (valor) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            console.log('Ejecuta promesa');
            if (valor) {
                resolve(names);
            } else {
                reject(new Error('Falló'));
            }
        }, 1000)
    }
)

//console.log(getNamesPromise);

console.log('Inicia Petición');
getNamesPromise(0).then(
    (datos) => {
        console.log(datos);
        console.log('Finaliza Petición')
    }
)
    .catch(error => console.log(error))
console.log('Continua Ejecución');


