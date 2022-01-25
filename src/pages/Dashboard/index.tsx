import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TableDragon from "../../components/TableDragon";

import "../../styles/dashboard.scss";
export function Dashboard() {
  return (
    <div className="layout">
      <Header />
      <TableDragon />
      <Footer />
    </div>
  );
}
