import { getSession } from "../lib/actions";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/");
  return (
    <div>
      <h1>welcome to profile page</h1>
      <p>
        Welcome <b>{session.userName}</b>
      </p>
      <span>
        Yoe are a <b>{session.isPro ? "Premium" : "Free"}</b>
      </span>
    </div>
  );
}
