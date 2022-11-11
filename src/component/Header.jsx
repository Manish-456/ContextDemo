import React from "react";
import { useUserContext } from "./context/LogContext";
const Header = () => {
  const { user, logOut } = useUserContext();

  return (
    <div>
      <div className="nav d-flex justify-content-between bg-success text-light">
        <div className="mx-3"> React-Context-Api </div>
        <div className="mx-3">
          {" "}
          Welcome {user.name}{" "}
          {user.isGuestUser && (
            <button type="button" onClick={logOut} className="btn btn-primary">
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
