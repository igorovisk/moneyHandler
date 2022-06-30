import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from "react";
import { api } from "../services/api";

//INTERFACES////////////////////////////////////////////////////////
interface Transaction {
   id: number;
   title: string;
   amount: number;
   type: string;
   category: string;
   createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionProviderProps {
   children: ReactNode;
}

interface TransactionsContextData {
   transactions: Transaction[];
   createTransaction: (transaction: TransactionInput) => Promise<void>;
   deleteTransaction: (transactionId: number) => void;
   // editTransaction: (transactionId: number) => void;
}

//////////////////////////////////////////////////////////////////////

//CONTEXT
export const TransactionsContext = createContext<TransactionsContextData>(
   {} as TransactionsContextData
);

//PROVIDER
export function TransactionsProvider({ children }: TransactionProviderProps) {
   const [transactions, setTransactions] = useState<Transaction[]>([]);

   useEffect(() => {
      getTransactions();
   }, []);

   async function getTransactions() {
      api.get("transactions").then((res: any) => {
         setTransactions(res.data.transactions);
      });
   }

   async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post("/transaction", {
         ...transactionInput,
         createdAt: new Date(),
      });
      const { transaction } = response.data;
      setTransactions([...transactions, transaction]);
   }

   async function deleteTransaction(transactionId: number) {
      await api.delete(`/transaction/${transactionId}`).then((res: any) => {
         getTransactions();
         return res;
      });
   }

   // async function editTransaction(transactionId: number) {
   //    await api.patch(`/transaction/${transactionId}`).then((res: any) => {
   //       getTransactions();
   //       return res;
   //    });
   // }

   return (
      <TransactionsContext.Provider
         value={{
            transactions,
            createTransaction,
            deleteTransaction,
            // editTransaction,
         }}
      >
         {children}
      </TransactionsContext.Provider>
   );
}

export function useTransactions() {
   const context = useContext(TransactionsContext);
   return context;
}
