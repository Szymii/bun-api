import { SubscribersRepository } from "../repositories";
import { Observable } from "../utils/Observable";

export class SubscriptionService extends Observable<string> {
	private emailRepository: SubscribersRepository;

	constructor(emailRepository: SubscribersRepository) {
		super();
		this.emailRepository = emailRepository;
	}

	addSubscriber(email: string) {
		this.emailRepository.insertNewMail(email);
		this.notify(email);
	}
}
