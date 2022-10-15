import "./styles.css";
import React, { useState } from "react";

const favChannel = {
  Lofi: [
    {
      Name: "Wormono",
      Subs: "491k subs",
      Description: " none",

      Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Gravero",
      Subs: "192k subs",
      Description: "none.",

      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Harrlin Beats",
      Subs: "187k subs",
      Description: "none",

      Rating: `⭐⭐⭐⭐`
    }
  ],
  Solo: [
    {
      Name: "Jal Raj",
      Subs: "1.09 M subs",

      Description:
        "We love making songs in our own way and don't want to categorize them in a particular genre.",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Aksh Baghla",
      Subs: "2.96 M subs",

      Description:
        "Singer/Songwriter . SUBSCRIBE for Pop Music, Hindi English Mashups and more!",
      Rating: `⭐⭐⭐⭐`
    },

    {
      Name: "Shirley Setia",
      Subs: "3.74 M subs",

      Description:
        "I started off with music and singing, but realised I love doing a lot more things than just that.",
      Rating: `⭐⭐⭐⭐`
    }
  ],

  Popular: [
    {
      Name: "T-Series",
      Subs: "189 M subs",
      Description:
        "Music can change the world. T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.",

      Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Sony Music India",
      Subs: "44.7 M subs",
      Description:
        "Sony Music India SME- Home To The Hits.Subscribe to listen to chart-busters in the making, see premieres of blockbuster videos and get your daily dose of some great music right here.",

      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Indie Music Label",
      Subs: "5.79 M subs",

      Description:
        "We are lovers of music who collaborate with some of the finest independent artists and labels within India and around the world.",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ]
};
const genreNames = Object.keys(favChannel);

export default function App() {
  const [channelList, setChannelList] = useState(favChannel.Lofi);

  function genreClickHandler(genre) {
    var channel = favChannel[genre];
    setChannelList(channel);
  }

  function getChannelPost(channel) {
    var name = channel.Name;
    var subs = channel.Subs;
    var desc = channel.Description;
    var rating = channel.Rating;
    var channelList = (
      <li>
        <div className="primary" style={{ padding: "0rem 1rem" }}>
          <h3>{name}</h3>
          <p style={{ fontSize: "0.8rem" }}>{subs}</p>
          <p style={{ fontSize: "0.9rem" }}>{desc}</p>
          <p style={{ fontSize: "0.8rem" }}>{rating}</p>
        </div>
      </li>
    );
    return channelList;
  }

  return (
    <div className="App">
      <h1>
        My <span style={{ color: "red" }}>fav </span>you tube channels
      </h1>
      <p className="desc">
        Checkout my favorite channels. Select from the options!
      </p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {channelList.map((channel) => {
          return getChannelPost(channel);
        })}
      </ul>
    </div>
  );
}
