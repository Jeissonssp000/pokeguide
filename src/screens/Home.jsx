import "./css/Home.css";
import "./css/Filter.css";
import "./css/Header.css";
import "./css/Items.css";
import React from "react";
import Header from "../components/Header";
import ItemsList from "../components/itemsList";
import FilterType from "../components/FilterType";
import FilterColors from "../components/FilterColors";
import FilterGender from "../components/FilterGender";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <>
      <Modal />
      <Header />
      <main className="home_main">
        <section className="filter_section">
          <FilterType />
          <FilterColors />
          <FilterGender />
        </section>
        <section className="items_section">
          <ItemsList />
        </section>
      </main>
    </>
  );
};

export default Home;
