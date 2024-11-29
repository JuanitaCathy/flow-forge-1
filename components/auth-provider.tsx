"use client";

import { account } from "@/lib/appwrite";
import { OAuthProvider } from "appwrite";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type Session = {
  $id: string;
  email: string;
};

const UserContext = createContext<{
  current: Session | null;
  loginWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
}>({
  current: null,
  loginWithGithub: async () => {},
  logout: async () => {},
});

export function useUser() {
  return useContext(UserContext);
}

export function AuthProvider(props: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<Session | null>(null);
  const router = useRouter();

  async function loginWithGithub() {
    await account.createOAuth2Session(
      OAuthProvider.Github,
      new URL("/dashboard", window.location.href).toString(),
    );
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    router.push("/");
  }

  async function init() {
    try {
      const loggedIn = (await account.get()) as unknown as Session;
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, loginWithGithub, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
