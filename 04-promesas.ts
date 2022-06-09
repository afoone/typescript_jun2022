const p2 = new Promise(
    // Las promesas comienzan en un estado pendiente (pending)
    // Las promesas, en un momento dado, se resuelven
    // los estados de resolución con fulfilled o rejected
    (resolve, reject) => {
        setTimeout(
            () => { resolve("ok") },
            20000)
    })
// undefined
// p
// Promise {<fulfilled>: 'ok'}
// p2
// Promise {<pending>}
// p2
// Promise {<pending>}
// p2


const p_1 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => { resolve("p_1 ha terminado") },
            20000)
    })

const p_2 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => { resolve("p_2 ha terminado`") },
            20000)
    })

// Genera una promesa con un array de promesas, la promesa se resuelve cuando todas están resueltas
// Devuelve un array con las respuestas
// Es rechazado si una cualquiera es rechazada. El motivo de rechazo es el primero que es rechazado
Promise.all([p_1, p_2]).then(console.log)


const p_11 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => { resolve("p_1 ha terminado") },
            20000)
    })

const p_22 = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => { resolve("p_2 ha terminado`") },
            5000)
    })

// Devolver el resutlado (rechazo o cumplimiento) de la primera que resuelve
//Promise.race([p_11, p_22]).then(console.log).catch(err => console.error("ha habido un error", err))




p_11.then(
    () => {
        console.log('la primera ha terminado')
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => { resolve("p_2 ha terminado`") },
                    5000)
            }
        )
    }).then (
        res => {
            console.log('la segunda ha terminado')
        }
    ).catch (
        console.error
    )


const ejecutaPromesas = async () => {
    const res1 = await new Promise(
        (resolve, reject) => {
            setTimeout(
                () => { resolve("p_1 ha terminado") },
                3000)
        })

    console.log(res1)
    const res2 = await new Promise(
        (resolve, reject) => {
            setTimeout(
                () => { resolve("p_1 ha terminado") },
                3000)
        })

    console.log(res2)

}

const wrapper = async () => {
    console.log("empezamos")
    await ejecutaPromesas()
    console.log("terminamos")
}


const p_typed = new Promise<string> (
    (resolve) => {
        resolve("cadena")
    }
)





    

