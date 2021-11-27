import Registry from "./registry.js"
import Base from "./base.js"

class App{

    constructor(){
        this.registry = new Registry

        this.btnAdd = document.getElementById('btnAdd')
        btnAdd.addEventListener('click', this.add)

        this.btnDelete = document.getElementById('btnDelete')
        btnDelete.addEventListener('click', this.delete)

        var btnList = document.getElementById('btnList')
        btnList.addEventListener('click', this.list)

        let btnCreateCard = document.getElementById('btnCreateCard')
        btnCreateCard.addEventListener('click', this.createCard)

        this.details = document.getElementById('details')



    }

    add = () => {
        let name = document.getElementById('nameInp').value
        let duration = Number(document.getElementById('minutesInp').value)
        let newBase = new Base(name, duration)
        this.registry.add(newBase)
        this.details.innerHTML = `<div>La base ${newBase.getBase()} se ha creado exitosamente</div>`
    }

    delete = () => {
        let name = document.getElementById('nameDelInp').value
        let deleteBase = this.registry.delete(name)
        if(deleteBase) {
            this.details.innerHTML = `<div>La base ${name} se ha eliminado exitosamente</div>`
        } else if(!name) {
            this.details.innerHTML = `<div>Ingresa la base a eliminar</div>`
        } else {
            this.details.innerHTML = `<div>La base ${name} no existe</div>`
        }
    }

    list = () =>  {
        let listCheck = this.registry.list()
        if(!listCheck) {
            this.details.innerHTML = '<div>La lista está vacía </div>'
        }
        this.details.innerHTML = `${this.registry.list()}`  
    }

    createCard = () =>{
        let base = document.getElementById('nameCardInp').value
        let hour = Number(document.getElementById('hourCardInp').value)
        let minutes = Number(document.getElementById('minutesInp').value)
        let cardCreated = this.registry.createCard(base, hour, minutes)
        if(!this.registry) {
            this.details.innerHTML = '<div>La lista está vacía</div>'
        } else if(!cardCreated) {
            this.details.innerHTML = `<div>La base: ${base} no existe</div>`
        } else {
            this.details.innerHTML = `<div>La ruta comienza en la base "${base}"</div> </br>
            <div>Más información: </div> </br>
            <div>${cardCreated}</div>`
        }
    }

}

let app = new App()
