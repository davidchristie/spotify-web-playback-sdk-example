import { ReactNode } from "react";

export function Login(): ReactNode {
  return (
    <div className="App">
      <header className="App-header">
        <a className="btn-spotify" href="/auth/login">
          Login with Spotify
        </a>
      </header>
    </div>
  );
}
