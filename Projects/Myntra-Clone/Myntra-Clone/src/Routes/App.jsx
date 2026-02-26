import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetching = useSelector(state => state.fetchStatus)
  return (
    <>
      <Header />
      <FetchItems />
      {fetching.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App