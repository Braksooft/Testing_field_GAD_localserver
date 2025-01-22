import { faker } from "@faker-js/faker";

// Obiekt 
export const userOne = {
    first_name: 'Tadeusz',
    last_name: 'Nowak',
    email: 'test@tes123.com.pl',
    birth_date: '1999-12-24',
    password: 'password'
}

export class userGenerator {
    first_name : string;
    last_name : string;
    mail : string;
    birthdate : Date;
    password: string;
    
  

    constructor() {
        this.first_name = faker.person.firstName()
        this.last_name = faker.person.lastName()
        this.mail = faker.internet.email()
        this.birthdate = faker.date.birthdate({ refDate: new Date('1999-01-22')})
        this.password = faker.internet.password({length: 8, prefix: 'W@1s'})
        
    }
    getBirthdateString(): string {
        return this.birthdate.toISOString().split('T')[0]; // Format YYYY-MM-DD
    }
}