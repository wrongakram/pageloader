import { useEffect, useState } from 'react'
import './sass/main.scss'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

// Components
import Header from './components/Header'
import Banner from './components/Banner'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading')
  }, [loading])

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <motion.div>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  alt="loader"
                  layoutId="main-image-1"
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 2 }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default App
