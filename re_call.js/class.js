class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    
    greet(){
        return `hello ${this.name} how's going ${this.age}`
    }

    update(newage){
        this.age = newage
        console.log(`${this.age} is your new age`)
    }

}

let vaibhav = new person('vaibhav',19)

console.log(vaibhav.greet())

vaibhav.update(20)