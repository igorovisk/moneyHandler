import Modal from "react-modal";
import React, { useState, useContext } from "react";
import closeIcon from "../../assets/close.svg";
import {
   Container,
   TransactionTypeButton,
   TransactionTypeContainer,
} from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionsModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function NewTransactionsModal({
   isOpen,
   onRequestClose,
}: NewTransactionsModalProps) {
   //STATE FOR FORM INPUTS
   const [transactionType, setTransactionType] = useState<string>("deposit");
   const [title, setTitle] = useState("");
   const [amount, setAmount] = useState("");
   const [category, setCategory] = useState("");

   const { createTransaction } = useTransactions();

   async function handleCreateNewTransaction(event: React.FormEvent) {
      event.preventDefault();
      const transaction = {
         title: title,
         amount: Number(amount),
         category: category,
         type: transactionType,
         createdAt: new Date(),
      };
      await createTransaction(transaction);

      closeModalAndClearInputFields();
   }

   function closeModalAndClearInputFields() {
      onRequestClose();
      setTitle("");
      setAmount("");
      setCategory("");
      setTransactionType("deposit");
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={closeModalAndClearInputFields}
         overlayClassName="react-modal-overlay"
         className="react-modal-content react-modal-content-animation "
      >
         <Container onSubmit={handleCreateNewTransaction}>
            <span
               onClick={closeModalAndClearInputFields}
               className="react-modal-close"
            >
               <img src={closeIcon} alt="icone de fechar o modal"></img>
            </span>

            <h2>Cadastrar transação</h2>

            <input
               placeholder="Título"
               value={title}
               onChange={(event) => setTitle(event.target.value)}
            ></input>
            <input
               placeholder="Valor"
               value={amount}
               type="number"
               onChange={(event) => setAmount(event.target.value)}
            />

            <TransactionTypeContainer>
               <TransactionTypeButton
                  type="button"
                  onClick={() => {
                     setTransactionType("deposit");
                  }}
                  isActive={transactionType === "deposit"}
                  activeColor="green"
               >
                  <img src={incomeImg} alt="logo da income"></img>
                  Entrada
               </TransactionTypeButton>

               <TransactionTypeButton
                  type="button"
                  onClick={() => {
                     setTransactionType("withdraw");
                  }}
                  isActive={transactionType === "withdraw"}
                  activeColor="red"
               >
                  <img src={outcomeImg} alt="logo da outcome"></img>
                  Saída
               </TransactionTypeButton>
            </TransactionTypeContainer>

            <input
               placeholder="Categoria"
               type="text"
               value={category}
               onChange={(event) => setCategory(event.target.value)}
            />

            <button type="submit" className="submit-button">
               Cadastrar
            </button>
         </Container>
      </Modal>
   );
}
