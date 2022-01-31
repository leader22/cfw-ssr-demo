import { useLoaderData } from "remix";

// export const handle = { hydrate: false };

export const loader = async () => {
  return Math.random();
};

export default function Foo() {
  const data = useLoaderData();

  return (
    <>
      <p>SSR: {data}</p>
    </>
  );
}
