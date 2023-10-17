import { EmailRepository } from "../repositories";
import { Observable } from "../utils/Observable";

export class EmailSubscriptionService extends Observable<string> {
	private emailRepository: EmailRepository;

	constructor(emailRepository: EmailRepository) {
		super();
		this.emailRepository = emailRepository;
	}

	subscribeUser(email: string) {
		this.emailRepository.insertNewMail(email);
		this.notify(email);
	}
}
