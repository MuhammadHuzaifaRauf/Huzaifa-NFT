import { Route, Routes } from "react-router-dom";
import Collections from "./collections";
import Details from "./nftDetails/Details";
import Footer from "../components/footer/Footer";
import Collection from "./collection/Collection";
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
