"use server";

import { SessionData, defaultSession, sessionOptions } from "./types";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";

// dummy data
const username = "rhee";
const isPro = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) session.isLoggedIn = defaultSession.isLoggedIn;
  return session;
};
export const login = async (
  prevState: { error: "string" | undefined },
  formdata: FormData
) => {
  const session = await getSession();
  const user = formdata.get("username");
  console.log(user);
  const password = formdata.get("password");

  if (user !== username) return { error: "Wrong Credentials" };
  session.userId = "1";
  session.userName = username;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
