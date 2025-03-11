import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import QuestionPage from "./pages/QuestionPage"
import NewQuestionPage from "./pages/NewQuestionPage"
import AgriRentalApp from "./pages/AgriRental"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
          <Route path="/questions/new" element={<NewQuestionPage />} />
          <Route path="/rent" element={<AgriRentalApp />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

