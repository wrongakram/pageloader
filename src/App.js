import { useEffect, useState } from "react";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <div className="transition-image final">
              <img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
