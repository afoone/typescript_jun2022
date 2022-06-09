# RxJS

- Programación síncrona: ejecuta una línea detrás de otra.
- Programación asíncrona: ejecuta una línea detrás de otra, pero no espera a que termine la anterior. -> Complejo

Programación reactiva: 
 Erik Meijer - Rx.NET

 ```javascript
 let a = 1;
 let b = 2;
 let c = a + b
 // c = 3;
 a = 3;
 b = 4;
 // c = 3; <--- Programación no reactiva
 // c = 7; <--- Programación reactiva
 ```

 # Patrón observer
 - Observable - fuente de datos que envía datos continuamente
 - Observer - objeto que recibe los datos del observable
 - Suscriber- conecta el observer con el observable
 - operador - funcion que recibe un observable y devuelve un observable, enruta transformaciones en los datos


El observable, se comunica con el observer invocando sus métodos:

- next(value) envia el valor al observer
- error(error) envia un error al observer
- complete() envia un mensaje de finalización al observer

Para empezar a observar:
observer.subscribe()

```javascript



