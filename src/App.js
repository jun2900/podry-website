import React, { useState, useEffect } from "react";
import * as Parser from "rss-parser";
import { Switch, Route, useLocation } from "react-router-dom";
import { Home, Podcast } from "./components";

const parser = new Parser();
//const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const App = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchRss = async () => {
      const feed = await parser.parseURL(
        process.env.REACT_APP_CORS_PROXY + process.env.REACT_APP_MAIN_RSS
      );
      setData((state) => state.concat(feed.items));
    };
    fetchRss();
  }, [setData]);

  useEffect(() => {
    console.log(`${location.pathname}`);
  }, [location]);

  return (
    <div>
      <h1>RSS Feed</h1>
      {/*<a href={item.enclosure.url}>{item.enclosure.url} </a> */}

      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        {data.map((item, i) => {
          let url = `/${item.title.replace(/[^a-zA-Z]/g, "")}`;
          return (
            <Route path={url} key={i}>
              <Podcast data={item} pathname={location.pathname} />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

//class App extends React.Component {
//  state = {
//    data: [],
//    sound: null,
//  };
//
//  async componentDidMount() {
//    const feed = await parser.parseURL(
//      CORS_PROXY + "https://anchor.fm/s/5b01c1c8/podcast/rss"
//    );
//    this.setState({ data: this.state.data.concat(feed.items) });
//  }
//
//  //soundPause = (i) => {};
//
//  render() {
//  }
//}

export default App;
