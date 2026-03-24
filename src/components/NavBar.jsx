import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";

export default function NavBar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  return (
    <>
      <section>
        <div className="container text-end">
          <button
            className="btn btn-primary rounded-pill"
            onClick={() => setBudgetMode(!budgetMode)}
          >
            {budgetMode ? "Disable Budget Mode" : "Budget Mode"}
          </button>
        </div>
      </section>
    </>
  );
}
