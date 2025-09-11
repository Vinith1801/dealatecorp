// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main role="main" className="min-h-[70vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}
