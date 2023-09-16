import { insertNewMailQuery } from "../repositories";
import { Observable } from "../utils/Observable";

export class EmailSubscriptionService extends Observable<string> {
  constructor() {
    super();
  }

  subscribeUser(email: string) {
    insertNewMailQuery(email);
    this.notify(email);
  }
}
