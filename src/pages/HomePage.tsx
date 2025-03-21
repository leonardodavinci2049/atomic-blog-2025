import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider } from "../context/PostProvider";

const HomePage = () => {

  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
<section className="max-w-[1140px] mx-auto">
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
       <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  )
}

export default HomePage