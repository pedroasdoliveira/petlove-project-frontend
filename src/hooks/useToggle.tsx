import { ToggleContext } from "contexts/ToggleModeStyles";
import { useContext } from "react";

export const useToggle = () => {
  const toggle = useContext(ToggleContext);

  if (!toggle) {
    throw new Error(
      "useToggle deve ser utilizado dentro da função ToggleContextProvider"
    );
  }

  return toggle;
};
