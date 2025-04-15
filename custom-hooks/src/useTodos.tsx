import { useCallback, useEffect, useState } from "react";

interface Todo {
  title: string;
  id: number;
}

export default function useTodos(): {
  done: boolean;
  todos: Todo[];
  refetch: (empty?: boolean) => Promise<void>;
  errors: unknown;
} {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<unknown | undefined>(undefined);

  const refetch = useCallback(async function (empty: boolean = false) {
    setDone(false);

    if (empty) setTodos([]);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
    } catch (e: unknown) {
      setErrors(e);
    } finally {
      setDone(true);
    }
  }, []);

  useEffect(() => {
    refetch();

    return () => {};
  }, [refetch]);

  return { done, todos, refetch, errors };
}
