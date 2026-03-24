import { useContext } from "react"
import BudgetContext from "../context/BudgetContext"

export default function NavBar(){

    const {budgetMode, setBudgetMode} = useContext(BudgetContext)
    console.log(budgetMode, setBudgetMode);
    


    return(
        <>
        <h1>Ciaooo</h1>
        </>
    )
}