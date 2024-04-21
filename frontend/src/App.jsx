import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const apiKey = "ea50d9c8fff44afa892eed4295ded88a";
  const [category, setCategory] = useState("general");
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar setCategory={setCategory} />
              <LoadingBar
                height={3}
                color="#667eea"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
              <News
                pageSize={10}
                category={category}
                setProgress={setProgress}
                apiKey={apiKey}
              />
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
