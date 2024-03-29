import { getSession } from "../lib/actions";

export default async function Page() {
  const session = getSession();

  return (
    <div>
      <h1>welcome to profile page</h1>
    </div>
  );
}
