import React, { useState, useEffect } from "react";
import Trending from "./trendingSection/Trending";
import Collections from "./browseCollections/Collections";
import Discover from "./discover/Discover";
import Subscribe from "./subscribe/Subscribe";
import Work from "./howItWorks/Work";
import Loader from "../../components/loader/Loader";
import { collectionsImages } from "../../redux/slice/getCollectionsSlice";
import { useAppDispatch } from "../../redux/store";
import Home from "./hero/Home";

export default function Index() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(collectionsImages());
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Home />
          <Trending />
          <Collections />
          <Discover />
          <Work />
          <Subscribe />
        </main>
      )}
    </>
  );
}
