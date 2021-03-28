import Modal from "react-modal";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  const handleNewTransactionModal = () => {
    setIsNewTransactionModalOpen((prevState) => !prevState);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
