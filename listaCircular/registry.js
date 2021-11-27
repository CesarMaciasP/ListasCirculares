export default class Registry {
    constructor() {
        this.start = null
        this.large = 0
    }

    add(base){
        if(this.start === null){
            this.start = base
            base.next = this.start
            base.previous = this.start
            this.large++
        } else {
            let last = this.start.previous
            base.next = this.start
            base.previous = last
            last.next = base
            this.start.previous = base
            this.large++
        }

    }

    delete(name) {
        let baseDel
        let tail
        let next
        if(this.start == null) {
            return null
        }
        else if (this.start.getBase() == name && this.large === 1) {
            baseDel = this.start
            this.start = null
            baseDel.next = null
            baseDel.previous = null
            this.large--
            return baseDel
        } else if (this.start.getBase() == name) {
            baseDel = this.start
            tail = baseDel.previous
            next = baseDel.next
            this.start = next
            this.start.previous = last
            tail.next = this.start
            baseDel.previous = null
            baseDel.next = null
            this.large--
            return baseDel
        } else {
            let previous = this.start
            let current = this.start.next
            while(current !== this.start) {
                if(current.getBase() == name && current.next == this.start) {
                    baseDel = current
                    next = baseDel.next
                    previous.next = next
                    next.previous = previous
                    baseDel.next = null
                    baseDel.before = null
                    this.large--
                    return baseDel
                } else {
                    previous.current
                    current.current.next
                }
            }
            return null
        }
    }

    list() {
        let listInfo = ''
        let temp = this.start
        if(temp == null) {
            return '<div>La lista está vacía </div>'
        }
        else {
            let temp = this.start;
            do {
               listInfo += `<div>${temp.getInfo()}</div></br>`
                temp = temp.next
            } while (temp != this.start)
            return listInfo
        }
    }
    
    createCard(base, hour, minutes) {
        let card = ''
        let hours = 0
        let find = this.findBase(base)

        if(!find) {
            return null
        } else {
            while(minutes >= 0) {
                card += find.infoCard(this.hourConvert(hour, hours), minutes) + '\n'           
                hours += find.next.getMinutes()
                minutes -= find.next.getMinutes()
                find = find.next
            }
            return card
        }   
    }

    
    hourConvert(hour, minutes) {
        let hourMinutes = ((hour * 60) + minutes) / 60;
        let hoursTotal = Math.trunc(hourMinutes)
        let minusMinutes = Math.round((hourMinutes - hoursTotal) * 60);
        if(minusMinutes < 10) {
            return `${hoursTotal}:0${minusMinutes}`
        } else {
            return `${hoursTotal}:${minusMinutes}`
        }
    }

    findBase(name) {
        let nameBase = this.start
        if(!nameBase) {
            return null
        } else {
            do{
                if(nameBase.getBase() == name) {
                    return nameBase
                } else {
                    nameBase = nameBase.next
                }
            } while(nameBase !== this.start)
            return null
        }
    }

}