"use client";

import { login } from "../lib/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <form action={formAction} className="text-black">
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
}
