import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
   const { transactions } = useTransactions();

   const summary = transactions.reduce(
      (acc, transaction) => {
         if (transaction.type === "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
         } else {
            acc.withdraws -= transaction.amount;
            acc.total -= transaction.amount;
         }
         return acc;
      },
      {
         deposits: 0,
         withdraws: 0,
         total: 0,
      }
   );

   // function calcAmount(transactionArray: any) {
   //    return transactionArray.reduce((prevValue: any, currentValue: any) => {
   //       return prevValue + currentValue.amount;
   //    }, 0);
   // }

   // const total = calcAmount(transactions);
   // const incomeFilter = transactions.filter((transaction) => {
   //    return transaction.type === "deposit";
   // });
   // const income = calcAmount(incomeFilter);

   // const outcomeFilter = transactions.filter((transaction) => {
   //    return transaction.type === "withdraw";
   // });
   // const outcome = calcAmount(outcomeFilter);

   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={incomeImg} alt="entradas" />
            </header>
            <strong>
               {" "}
               {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
               }).format(summary.deposits)}
            </strong>
         </div>
         <div>
            <header>
               <p>Saidas</p>
               <img src={outcomeImg} alt="saidas" />
            </header>
            <strong>
               {" "}
               {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
               }).format(summary.withdraws)}
            </strong>
         </div>
         <div className="total">
            <header>
               <p>Total</p>
               <img src={totalImg} alt="total" />
            </header>
            <strong>
               {summary.total >= 0
                  ? `${new Intl.NumberFormat("pt-bt", {
                       style: "currency",
                       currency: "BRL",
                    }).format(summary.total)}`
                  : `- R$ ${summary.total}`}
            </strong>
         </div>
      </Container>
   );
}
