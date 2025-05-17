import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import MainLayout from "./layouts/MainLayout";
import ServicesPage from "./pages/DetailedServices";
// import WorkPage from "./pages/Work";
// import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import WorkPage from "./pages/Work";
import DetailedCaseStudies from "./pages/DetailedCaseStudies";
import DetailedBlogs from "./pages/DetailedBlogs";
// import GlobalStyle from "./styles/GlobalStyle";
import Cursor from "./components/Cursor";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3800); // Duration matches preloader (3000ms) + exit animation (800ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Cursor />
      {isLoading && <Preloader />}
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <ServicesPage />
            </MainLayout>
          }
        />
        <Route
          path="/work"
          element={
            <MainLayout>
              <WorkPage />
            </MainLayout>
          }
        />
        <Route
          path="/case-studies"
          element={
            <MainLayout>
              <DetailedCaseStudies />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <DetailedBlogs />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
