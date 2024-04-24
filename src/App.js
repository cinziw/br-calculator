import './App.css';
import 'ldrs/helix';
import {useState} from "react";
import {helix} from "ldrs";
import { motion, AnimatePresence } from 'framer-motion';

const InputField = () => {
  return (
    <input className="input"/>
  )
}

helix.register();

function App() {
    // document.body.classList.add('background-black');
    const [isLoading, setIsLoading] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        setShowImage(false);

        // show loading for 1s
        setTimeout(() => {
            setIsLoading(false);
            setShowImage(true);
        }, 2000);
    };


      return (
          <div className="App">
              <header className="App-header">Calculator
              </header>
              <div className="formula-container">
                  <InputField/>
                  <div className="operator">+</div>
                  <InputField/>
                  <button className="submit"
                          onClick={handleSubmit}
                          disabled={isLoading}>
                      Bsubmit
                  </button>
              </div>

              <div className="image-container">
                  {isLoading && (
                      <div className="loading-symbol">
                          <l-helix
                              size="80"
                              speed="2.5"
                              color="#02d1e7"
                          ></l-helix>
                      </div>
                  )}
                  <AnimatePresence>
                      {showImage && (
                          <motion.img
                              className="image"
                              src="/you-look-lonely.jpg"
                              alt="Image"
                              initial={{ opacity: 0}} // Initial position and opacity
                              animate={{ opacity: 1}}
                              transition={{duration: 6}}// Exit animation
                          />
                      )}
                  </AnimatePresence>
              </div>
          </div>
      );
}

export default App;
