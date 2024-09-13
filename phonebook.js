class phoneBook {
    constructor(){
        this.entries = new Map()
        this.numberArray = []
        this.nameArray = []
    }
    addPerson(name,phoneNumber,email,age){
        if(this.entries.has(phoneNumber)){
            console.log('Phonenumber already exists in phonebook')
            return
        }else{
            this.entries.set(phoneNumber,{name , phoneNumber , age , email})
            this.numberArray.push(phoneNumber)
            this.nameArray.push(name)
            console.log('entry stored in phonebook and numberArray')
        }
    }
    updatePerson(phoneNumber, newName,newEmail,newAge){
        if(this.entries.has(phoneNumber)){
            const entry = this.entries.get(phoneNumber)
            entry.name = newName || entry.name
            entry.email = newEmail || entry.email
            entry.age= newAge || entry.age
            this.entries.set(phoneNumber,entry)
            console.log('phonebook entry updated')
            return
        }
        console.log('please create entry first before updating')
        return
    }
    deletePerson(phoneNumber){
        if(!this.entries.has(phoneNumber)){
            return console.log('please create an entry first before deleting')
        }
        this.entries.delete(phoneNumber)
        this.numberArray = this.numberArray.filter(num => num !== phoneNumber);
        return console.log('number deleted from array and phonebook')
    }
}


module.exports=phoneBook