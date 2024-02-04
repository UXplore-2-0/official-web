import React, { createContext, useContext, useState } from "react";

const TeamContext = createContext(null);

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children }) {
  const [team, setTeam] = useState(null);

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
}
