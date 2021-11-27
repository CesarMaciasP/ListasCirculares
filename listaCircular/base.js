export default class Base {
    constructor(base, minutes) {
        this.base = base;
        this.minutes = minutes;
        this.next = null;
        this.before = null;
    }

    getBase() {
        return this.base;
    }

    getMinutes() {
        return this.minutes;
    }

    getInfo() {
        return `Base "${this.base}"  con duración de: ${this.minutes} minutos`
    }

    infoCard(hour, minutes) {
        return `<div>
        <h2>Base ${this.getBase()}</h2> 
        <p>Hora de llegada:${hour}</p><p>Minutos restantes: ${minutes}</p>                                 
                </div>`;
    }

}
