import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import NewCard from "../components/newCard";
import axios from "axios";
import "./main.css";

export default function Main() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    function fetchAllPost() {
      axios
        .get("https://posting-test.herokuapp.com/getpost/getallpost", {})
        .then((res) => {
          setPostList(res.data.rows);
        });
    }
    fetchAllPost();
  }, []);

  return (
    <div className="mainMain">
      <Navbar />
      <div className="cardDeck">
        {postList.map((item) => (
          <Card
            key={item.post_id}
            post_id={item.post_id}
            post_name={item.post_name}
            post_content={item.post_content}
            post_date={item.post_date}
            post_like={item.post_like}
            post_dislike={item.post_dislike}
            post_had_like={item.post_had_like}
            post_had_dislike={item.post_had_dislike}
          />
        ))}
        <NewCard />
      </div>

      <Footer />
    </div>
  );
}
