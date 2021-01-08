export default class User {
    constructor(firstname, lastname, adress, city, postalcode, email) {
        this.firstName = firstname
        this.lastName = lastname
        this.adress = adress
        this.city = city
        this.postalcode = postalcode
        this.email = email
        this.id = Date.now().toString()
    }
    
    get displayName() {
        return `${this.firstName} ${this.lastName}`
    }
    
}