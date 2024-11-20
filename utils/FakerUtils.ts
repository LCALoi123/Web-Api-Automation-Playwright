import { faker, fakerVI } from '@faker-js/faker';

export class FakerUtils {
  public static getFirstName(): string {
    return fakerVI.person.firstName();
  }
  public static getLastName(): string {
    return fakerVI.person.lastName();
  }

  public static getEmail(): string {
    return faker.internet.email().replace('đ', 'd');
  }
  public static getPhone(): string {
    const phoneFaker: string = fakerVI.phone.number({ style: 'national' });
    const phone: string = phoneFaker.replace(/\s/g, '');
    return `${'09'.concat(phone.substring(2, 10))}`;
  }

  public static getUserName(): string {
    return fakerVI.internet.username();
  }
  public static getPassword(): string {
    const temp: string = fakerVI.internet.password();
    return `${temp.slice(0, 5) + '@' + temp.slice(6)}`
  }

  public static getAddress(): string {
    return `${fakerVI.location.streetAddress()}`;
  }

  public static getTaxCode(): string {
    const taxCode: string[] = [
      '0102057816',
      '0105653905',
      '0318227161',
      '0318226760',
    ];
    return taxCode[Math.floor(Math.random() * taxCode.length)];
  }

  public static getGender(): string {
    const gender: string[] = ['Anh', 'Chị'];
    return gender[Math.floor(Math.random() * gender.length)];
  }
}
