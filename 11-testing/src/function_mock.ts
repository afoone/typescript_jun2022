import axios from 'axios'

export const ejecutaTresVeces = (funcion: Function) => {
  for (let index = 0; index < 3; index++) {
    funcion(index).toUpperCase()
  }
}

export const explotaPlaneta = (index: number): string => {
  return 'boom ' + index
}


export const recuperaTodo = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return res
}


// export const ejecutaTresVeces = () => {
//     for (let index = 0; index < 3; index++) {
//       explotaPlaneta(index).toUpperCase()
//     }
//   }


