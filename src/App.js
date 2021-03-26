import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
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
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src={
                  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
                }
                className='img-test final'
                layoutId={"main-image-1"}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
