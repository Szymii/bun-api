export type ObservableFunction<T> = (event: T) => void;

export class Observable<T> {
  private observers: Array<ObservableFunction<T>>;

  constructor() {
    this.observers = [];
  }

  subscribe(func: ObservableFunction<T>) {
    this.observers.push(func);
  }

  unsubscribe(func: ObservableFunction<T>) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}
