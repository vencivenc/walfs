import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext, useEffect,
  useState
} from "react";
import {Session, User} from '@supabase/supabase-js'
import {supabase} from "../common/superbase";

type UserContextType = {
  user: User | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
}

const UserProvider = (props: { children: ReactNode }): ReactElement => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSessionHandler(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSessionHandler(session)
    })
  }, [])

  const setSessionHandler = (session: Session | null) => {
    setUser(session?.user || null)
  }

  return <UserContext.Provider {...props} value={{user}} />
};

export {UserProvider, useUser};
