import React, {useEffect, useState} from "react";
import Page from "../common/layout/Page";
import {Entry} from "./Entry";
import {State} from "./State";
import {StateDto} from "../dto/state.dto";
import {AppService} from "../services/App.service";
import {useUser} from "../common/hooks/useUser";
import {UserState} from "./UserState";

export const Dashboard = () => {
  const {user} = useUser()
  const [state, setState] = useState<StateDto | null>(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    const interval = setInterval(async () => {
      try {
        const tmpState = await AppService.get(user.name);
        if (tmpState) {
          setState(tmpState);
        }
      } catch (e: any) {
      } finally {
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [user]);

  return (
    <React.Fragment>
      { user && user.name == 'main' &&
      <Page breadcrumbs={[{to: "/app", label: "Dashboard"}]} fill={false}>
        <div
          className="site-layout-background"
          style={{
            marginTop: "16px",
            padding: 24,
          }}
        >
          <Entry />
        </div>
      </Page> }
      <Page breadcrumbs={[{to: "/app", label: "Dashboard"}]} fill={false}>
        <div
          className="site-layout-background"
          style={{
            marginTop: "16px",
            padding: 24,
          }}
        >
          {user && user.name == 'main' && state && <State state={state} />}
          {user && user.name != 'main' && state && <UserState state={state} name={user.name} />}
        </div>
      </Page>
    </React.Fragment>
  );
}
