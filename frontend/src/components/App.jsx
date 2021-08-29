import React from "react";
import { ThemeProvider, sportsbetLight } from "@heathmont/moon-themes";
import { useState } from "react";
import { Switch } from "@heathmont/moon-components";


const App = () => {
  const [state, setState] = useState(true);
  return (
    <ThemeProvider theme={sportsbetLight}>
      <main>
        <Switch checked={state} onChange={(e) => setState(e.target.checked)} />

      </main>
    </ThemeProvider>
  );
};

export default App;
