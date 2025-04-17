import { useEffect, useState } from "react";
import { useCallback } from "react";

let instance: undefined | Store = undefined;

interface StoreData {
  [key: string]: unknown;
}

interface Subscribers {
  [key: string]: (() => void)[];
}

class Store {
  subscribers: Subscribers = {};
  data: StoreData = {};

  private constructor() {}

  static get() {
    if (instance === undefined) {
      instance = new Store();
    }
    return instance;
  }

  fromKey(key: string, defaultValue: unknown): unknown {
    if (this.data[key] === undefined) return defaultValue;
    return this.data[key];
  }

  setKey(key: string, value: unknown) {
    this.data[key] = value;
    this.notify(key);
  }

  subscribe(key: string, subscriber: () => void) {
    if (this.subscribers[key] === undefined) {
      this.subscribers[key] = [];
    }

    const index = this.subscribers[key].indexOf(subscriber);

    if (index === -1) {
      this.subscribers[key].push(subscriber);
    }
  }

  unsubscribe(key: string, subscriber: () => void) {
    if (this.subscribers[key] === undefined) {
      return;
    }

    const index = this.subscribers[key].indexOf(subscriber);

    if (index !== -1) {
      this.subscribers[key].splice(index, 1);
    }
  }

  private notify(key: string) {
    if (this.subscribers[key] === undefined) {
      return;
    }

    console.log(this.subscribers);

    this.subscribers[key].forEach((fn) => fn.call(null));
  }
}

const store = Store.get();

// custom hook
export default function useStore<T>(
  key: string,
  initialValue: T
): [T, (data: T) => void] {
  const [state, setState] = useState(store.fromKey(key, initialValue));

  const update = useCallback(() => {
    setState(store.fromKey(key, initialValue));
  }, [key, initialValue]);

  useEffect(() => {
    store.subscribe(key, update);
    return () => store.unsubscribe(key, update);
  }, [key, update]);

  return [
    state as T,
    (data: T) => {
      store.setKey(key, data);
    },
  ];
}
