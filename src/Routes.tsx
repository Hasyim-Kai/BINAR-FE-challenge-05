import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarDetailPage from "./pages/CarDetailPage";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
   return <BrowserRouter >
      {/* <Navbar /> */}
      <main>
         <Routes>
            <Route index element={<CarDetailPage />} />
            {/* <Route path="search-result" element={<SearchResultPage />} /> */}
            <Route path="car-rent-detail/:id" element={<CarDetailPage />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </main>
      {/* <Footer /> */}
   </BrowserRouter >
}