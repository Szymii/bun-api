import { insertNewMailQuery } from "../repositories";
import { Observable } from "../utils/Observable";

export class EmailSubscriptionService extends Observable<string> {
	subscribeUser(email: string) {
		insertNewMailQuery(email);
		this.notify(email);
	}
}
