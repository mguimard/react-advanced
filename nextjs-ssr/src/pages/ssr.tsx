import Component1 from "@/app/components/Component1";
import Todo from "@/app/interfaces/todo";
import PageLayout from "@/app/page-layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function SSR({ todos }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(todos);
  console.log("return");

  return (
    <>
      <PageLayout>
        <h1>Hello SSR</h1>
        <p>Fetched {todos?.length} todos on server side</p>
        <Component1 />
      </PageLayout>
    </>
  );
}

// This gets called on every request
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await res.json();
  // Pass data to the page via props
  return { props: { todos } };
}) satisfies GetServerSideProps<{ todos: Todo[] }>;
