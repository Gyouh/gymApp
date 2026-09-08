import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Calendar from "./pages/Calendar";
import Routines from "./pages/Routines";

import "./App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to your fitness tracker.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/routines" element={<Routines />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}