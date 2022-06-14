// Dependas de abstracciones, no de concreciones

// ///=============
// class Important {

//     public li: LessImportant = new LessImportant()

// }

// // =============

// class LessImportant {
//     public operacionQueTieneQueEjecutarse() {

//     }
// }

// Important depende de LessImportant

///=============
class Important {

    public li: ILessImportant = new LessImportant()

}

interface ILessImportant {
    operacionQueTieneQueEjecutarse : () => void
}

// =============

class LessImportant implements ILessImportant {
    public operacionQueTieneQueEjecutarse() {

    }
}
