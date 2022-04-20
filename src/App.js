import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layouts/MainNavigation";

import AllMeetupPages from "./pages/AllMeetups";
import FavoritesPages from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
         <Route path = '/' element = {<AllMeetupPages />} />
         <Route path = '/new-meetup' element = {<NewMeetupPage />}  />
         <Route path = '/favorites' element = {<FavoritesPages />}  />
     </Routes>
    </div>
  );
}

export default App;
