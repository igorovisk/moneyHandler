import {
   Container,
   EditModalContainer,
   EditTransactionTypeButton,
   EditTransactionTypeContainer,
   TransactionActionButton,
   TransactionTypeContainer,
} from "./styles";
import Modal from "react-modal";
import { Pencil, Trash } from "phosphor-react";
import { useTransactions } from "../../hooks/useTransactions";
import { useState } from "react";

import closeIcon from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface TransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
   transaction: {
      id: number;
      title: string;
      amount: number;
      type: string;
      category: string;
      createdAt: string;
   };
}

export function TransactionModal({
   isOpen,
   onRequestClose,
   transaction,
}: TransactionModalProps) {
   const { deleteTransaction } = useTransactions();
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const [transactionType, setTransactionType] = useState(transaction.type);
   const [title, setTitle] = useState(transaction.title);
   const [amount, setAmount] = useState(transaction.amount);
   const [category, setCategory] = useState(transaction.category);
   const [createdAt, setCreatedAt] = useState(transaction.createdAt);

   function handleFormSubmit(event: any) {
      event?.preventDefault();
      console.log("teste");
      // editTransaction(transaction.id);
      onRequestClose();
   }

   return (
      <>
         <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content react-modal-content-animation"
         >
            <Container>
               <span
                  onClick={() => onRequestClose}
                  className="react-modal-close"
               ></span>
               <div>
                  <h1 className={transaction.type}>
                     {transaction.type === "withdraw" ? "RETIRADA" : "DEPÓSITO"}
                  </h1>
                  <h3>{transaction.title.toUpperCase()}</h3>
               </div>

               <h3>ID: {transaction.id}</h3>

               <h3>
                  Valor da transação:{" "}
                  {new Intl.NumberFormat("pt-bt", {
                     style: "currency",
                     currency: "BRL",
                  }).format(transaction.amount)}
               </h3>
               <h3>
                  Data:{" "}
                  {new Intl.DateTimeFormat("pt-bt", {}).format(
                     new Date(transaction.createdAt)
                  )}
               </h3>
               <h3>Categoria: {transaction.category.toUpperCase()}</h3>
            </Container>
            <TransactionTypeContainer>
               {/* <TransactionActionButton
                  activeColor="green"
                  type="button"
                  onClick={() => setIsEditModalOpen(true)}
               >
                  <Pencil size={32} />
                  Editar transação
               </TransactionActionButton> */}

               <TransactionActionButton
                  activeColor="red"
                  type="button"
                  onClick={() => {
                     deleteTransaction(transaction.id);
                     onRequestClose();
                  }}
               >
                  <Trash size={32} />
                  Deletar transação
               </TransactionActionButton>
            </TransactionTypeContainer>
         </Modal>

         <Modal
            isOpen={isEditModalOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content react-modal-content-animation "
         >
            <EditModalContainer onSubmit={handleFormSubmit}>
               <span
                  onClick={() => setIsEditModalOpen(false)}
                  className="react-modal-close"
               >
                  <img src={closeIcon} alt="icone de fechar o modal"></img>
               </span>

               <h2>Editar transação</h2>

               <input
                  placeholder="Título"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
               ></input>
               <input
                  placeholder="Valor"
                  value={amount}
                  type="number"
                  onChange={(event) => setAmount(Number(event.target.value))}
               />

               <EditTransactionTypeContainer>
                  <EditTransactionTypeButton
                     type="button"
                     onClick={() => {
                        setTransactionType("deposit");
                     }}
                     isActive={transactionType === "deposit"}
                     activeColor="green"
                  >
                     <img src={incomeImg} alt="logo da income"></img>
                     Entrada
                  </EditTransactionTypeButton>

                  <EditTransactionTypeButton
                     type="button"
                     onClick={() => {
                        setTransactionType("withdraw");
                     }}
                     isActive={transactionType === "withdraw"}
                     activeColor="red"
                  >
                     <img src={outcomeImg} alt="logo da outcome"></img>
                     Saída
                  </EditTransactionTypeButton>
               </EditTransactionTypeContainer>

               <input
                  placeholder="Categoria"
                  type="text"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
               />

               <input
                  placeholder="Categoria"
                  type="text"
                  value={new Intl.DateTimeFormat("pt-bt", {}).format(
                     new Date(createdAt)
                  )}
                  onChange={(event) => setCreatedAt(event.target.value)}
               />

               <button type="submit" className="submit-button">
                  Editar Transação
               </button>
            </EditModalContainer>
         </Modal>
      </>
   );
}
