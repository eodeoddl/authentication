import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "../lib/actions";

export default async function Navbar() {
  const session = await getSession();
  console.log(session);
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
}
