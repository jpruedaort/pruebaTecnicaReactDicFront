import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

export default function Card(props) {
  const [like, setLike] = useState(props.post_like);
  const [dislike, setDisLike] = useState(props.post_dislike);
  const [hadLike, setHadLike] = useState(props.post_had_like);
  const [hadDisLike, setHadDisLike] = useState(props.post_had_dislike);

  const toogleLike = (e) => {
    e.preventDefault();
    if (hadLike == 1) {
      axios.post("https://posting-test.herokuapp.com/likedislike/removelike", {
        post_id: props.post_id,
      });
      setLike(like - 1);
      setHadLike(0);
    } else {
      axios.post("https://posting-test.herokuapp.com/likedislike/addlike", {
        post_id: props.post_id,
      });
      setLike(like + 1);
      setHadLike(!hadLike);
    }
  };

  const toogleDisLike = (e) => {
    e.preventDefault();
    if (hadDisLike == 1) {
      axios.post(
        "https://posting-test.herokuapp.com/likedislike/removedislike",
        {
          post_id: props.post_id,
        }
      );
      setDisLike(dislike - 1);
      setHadDisLike(0);
    } else {
      axios.post("https://posting-test.herokuapp.com/likedislike/addislike", {
        post_id: props.post_id,
      });
      setDisLike(dislike + 1);
      setHadDisLike(1);
    }
  };

  return (
    <div className="card" id="postCard">
      <div className="dateLine">
        <h6>{props.post_date}</h6>
      </div>
      <h2>{props.post_name}</h2>
      <h4>{props.post_content}</h4>
      <div className="btnLine">
        <button onClick={(e) => toogleLike(e)} className="aBtn" id="like">
          {hadLike ? " Te gusto!" : "Like "} ({like})
        </button>
        <button onClick={(e) => toogleDisLike(e)} className="aBtn" id="dislike">
          {hadDisLike ? " No Te gusto!" : "Dislike "} ({dislike})
        </button>
      </div>
    </div>
  );
}
