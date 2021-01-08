export default class User {
    constructor(firstname, lastname, address, city, postalcode, email) {
        this.firstName = firstname
        this.lastName = lastname
        this.address = address
        this.city = city
        this.postalcode = postalcode
        this.email = email
        this.id = Date.now().toString()
    }
    
    get displayName() {
        return `${this.firstName} ${this.lastName}`
    }
    
}