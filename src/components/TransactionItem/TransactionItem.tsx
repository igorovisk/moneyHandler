import { useState } from "react";
import { TransactionModal } from "../TransactionModal/TransactionModal";
import { TransactionBody } from "./styles";

interface TransactionProps {
   transaction: {
      id: number;
      title: string;
      amount: number;
      type: string;
      category: string;
      createdAt: string;
   };
}

//
export function TransactionItem({ transaction }: TransactionProps) {
   const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

   function closeTransactionModal() {
      console.log("aaa");
      setIsTransactionModalOpen(false);
   }
   return (
      <>
         <TransactionBody onClick={() => setIsTransactionModalOpen(true)}>
            <tr key={transaction.id}>
               <td>{transaction.title}</td>
               <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-bt", {
                     style: "currency",
                     currency: "BRL",
                  }).format(transaction.amount)}
               </td>
               <td>{transaction.category}</td>
               <td>
                  {" "}
                  {new Intl.DateTimeFormat("pt-bt", {}).format(
                     new Date(transaction.createdAt)
                  )}
               </td>
            </tr>
         </TransactionBody>
         <TransactionModal
            onRequestClose={closeTransactionModal}
            transaction={transaction}
            isOpen={isTransactionModalOpen}
         />
      </>
   );
}
