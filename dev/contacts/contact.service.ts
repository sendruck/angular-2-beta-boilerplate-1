import {Injectable} from "angular2/src/core/di/decorators";
import {CONTACTS} from "./mock-contact";
@Injectable()
export class ContactService {
  getContact() {
     return Promise.resolve(CONTACTS);
  }
}
