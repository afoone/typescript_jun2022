interface Suscriber {
    notify(): void
}

class Subject {
    private _suscriptors: Suscriber[] = []
    constructor() {

    }

    suscribe(s: Suscriber) {
        this._suscriptors.push(s)
    }

    public notifyAll() {
        this._suscriptors.forEach(
            s=> s.notify()
        )
    }
}

class SubscriberObj implements Suscriber {
    notify(): void {
        console.log('estoy notificado')
    }
}

const sbj: Subject = new Subject()

const sus: SubscriberObj = new SubscriberObj()

sbj.suscribe(sus)

sbj.notifyAll()