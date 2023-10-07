import { ReactNode, useEffect, useState } from "react";
import "./app.css";
import { Login } from "./login";
import { WebPlayback } from "./web-playback";

export function App(): ReactNode {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return <>{token === "" ? <Login /> : <WebPlayback token={token} />}</>;
}
