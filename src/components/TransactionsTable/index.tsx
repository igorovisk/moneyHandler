import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { TransactionItem } from "../TransactionItem/TransactionItem";

export function TransactionsTable() {
   const { transactions } = useTransactions();

   return (
      <Container>
         <table>
            <thead>
               <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Data</th>
               </tr>
            </thead>
            {transactions.map((transaction) => {
               return (
                  <>
                     <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                     />
                  </>
               );
            })}
         </table>
      </Container>
   );
}
