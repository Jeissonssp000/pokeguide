import "./Home.css"
import React from "react";
import Filter from "../../components/filter";
import Header from "../../components/header";
import ItemsList from "../../components/itemsList";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="home_main">
        <Filter />
        <ItemsList />
      </main>
    </div>
  );
};

export default Home;
