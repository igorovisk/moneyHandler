import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Factory, Model } from "miragejs";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

createServer({
   models: {
      transaction: Model,
   },

   seeds(server) {
      server.db.loadData({
         transactions: [
            {
               id: 1,
               title: "Freelance de website",
               type: "deposit",
               category: "desenvolvimento",
               amount: 5000,
               createdAt: new Date("2022-12-12 09:00:00"),
            },
            {
               id: 2,
               title: "Salário empresa",
               type: "deposit",
               category: "salário",
               amount: 6000,
               createdAt: new Date("2022-08-01 09:00:00"),
            },
            {
               id: 3,
               title: "Aluguel casa",
               type: "withdraw",
               category: "despesas",
               amount: 1300,
               createdAt: new Date("2022-08-01 09:00:00"),
            },
         ],
      });
   },

   routes() {
      this.namespace = "api"; //3000/api/xxx

      this.get("/transactions", () => {
         return this.schema.all("transaction");
      });

      this.post("/transaction", (schema, request) => {
         const data = JSON.parse(request.requestBody);
         return schema.create("transaction", data);
      });

      this.del("/transaction/:id");

      this.patch("/transaction/:id");
   },
});

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
