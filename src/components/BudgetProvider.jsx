import { useState } from "react";
import BudgetContext from "../context/BudgetContext";

export default function BudgetProvider({children}) {
  const [budgetMode, setBudgetMode] = useState(false);

  return(
    <BudgetContext.Provider value={{budgetMode, setBudgetMode}}>
        {children}
    </BudgetContext.Provider>
  )
}

