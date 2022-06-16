// comprobar que indexeddb está

import { domainToASCII } from "url"
import { Turno } from "../model/client"

const initializeDB = (): void => {
  let db: IDBDatabase

  const openRequest = window.indexedDB.open('imagina', 2)
  openRequest.onupgradeneeded = ev => {
    let db = openRequest.result

    switch (ev.oldVersion) {
      case 0:
        console.log('aqui no había base de datos')
        db.createObjectStore('turnos', {
          //autoIncrement: true,
          keyPath: 'id',
        })
        break
      case 1:
        console.log('actualiza ')
        db

      default:
        break
    }
  }

  openRequest.onerror = console.error

  openRequest.onsuccess = ev => {
    db = openRequest.result
  }
}



if (window.indexedDB) {
  initializeDB()
}


//
const addTurno = () =>   {
    let db: IDBDatabase

    const openRequest = window.indexedDB.open('imagina', 2)

    openRequest.onsuccess = () => {
        db = openRequest.result
          // Primero crear la transacción
          const turnosTransaction: IDBTransaction = db.transaction('turnos', 'readwrite')
          // recuperar la store
          const turnosStore = turnosTransaction.objectStore('turnos')
          // hacer lo que quiero
          const turnoAddRequest = turnosStore.add(
              {
                  id: 4, 
                  servicio: "informacion"
              } as Turno
          )
          turnoAddRequest.onsuccess = () => {
              console.log("todo bien")
          }
    }
          
}

const getTurno = () =>   {
    let db: IDBDatabase

    const openRequest = window.indexedDB.open('imagina', 2)

    openRequest.onsuccess = () => {
            db = openRequest.result
          // Primero crear la transacción
          const turnosTransaction: IDBTransaction = db.transaction('turnos', 'readonly')
          // recuperar la store
          const turnosStore = turnosTransaction.objectStore('turnos')
          // hacer lo que quiero
          const turnoAddRequest = turnosStore.get(4)
          turnoAddRequest
          .onsuccess= ev => {console.log(ev.target.result as Turno)}
    }
          
}
