import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import InfirmaryHUB from './pages/InfirmaryHUB'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Header from './components/Header'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

export default function App(){
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/infirmary-hub" element={<InfirmaryHUB/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/careers" element={<Careers/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
