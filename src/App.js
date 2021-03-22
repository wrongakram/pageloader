import { useEffect, useState } from "react";

import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Banner />
        </>
      )}
    </>
  );
}

export default App;
