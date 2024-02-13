import { Route, Routes } from "react-router-dom";
import Collections from "./Collections";
import Details from "./Nfts/Details";
import Footer from "../components/footer/Footer";
import Collection from "./Collection/Collection";
import Header from "../components/header/Header";
import React from "react";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/collection/:collection_slug" element={<Collection />} />
          <Route path="/nft" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
