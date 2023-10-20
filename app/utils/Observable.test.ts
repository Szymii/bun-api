import { Observable } from "./Observable";
import { describe, expect, it, mock } from "bun:test";

class FakeObservable extends Observable<number> {
	triggerObservers(number: number) {
		this.notify(number);
	}
}

describe("Observable", () => {
	it("Should triggers observers action", async () => {
		// arrange
		const observable = new FakeObservable();
		const mockAction = mock((number: number) => number);

		// act
		observable.subscribe(mockAction);
		observable.triggerObservers(11);

		// assert
		expect(mockAction).toHaveBeenCalled();
	});

	it("Should be possible to unsubscribe", async () => {
		// arrange
		const observable = new FakeObservable();
		const mockAction = mock((number: number) => number);

		// act
		observable.subscribe(mockAction);
		observable.unsubscribe(mockAction);
		observable.triggerObservers(11);

		// assert
		expect(mockAction).not.toHaveBeenCalled();
	});
});
