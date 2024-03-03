import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Main = lazy(() => import("../pages/Main"));
const Hook = lazy(() => import("../pages/Hook"));
const NotFound = lazy(() => import("../pages/errors/NotFound"));
const Auth = lazy(() => import("../pages/Auth"));
const PrivateRoute = lazy(() => import("../components/common/PrivateRoute"));
const HeroItem = lazy(() => import("../pages/Hero/HeroItem"));
const HeroList = lazy(() => import("../pages/Hero/HeroList"));
const EpisodeList = lazy(() => import("../pages/episode/EpisodeList"));
const EpisodeItem = lazy(() => import("../pages/episode/EpisodeItem"));
const LocationList = lazy(() => import("../pages/location/LocationList"));
const LocationItem = lazy(() => import("../pages/location/LocationItem"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="hook" element={<Hook />} />
        <Route path="auth" element={<Auth />} />
        <Route path="hero" element={<PrivateRoute />}>
          <Route index element={<HeroList />} />
          <Route path=":heroId" element={<HeroItem />} />
          <Route path="*" element={<HeroList />} />
        </Route>
        <Route path="episode" element={<PrivateRoute />}>
          <Route index element={<EpisodeList />} />
          <Route path=":episodeId" element={<EpisodeItem />} />
          <Route path="*" element={<HeroList />} />
        </Route>
        <Route path="location" element={<PrivateRoute />}>
          <Route index element={<LocationList />} />
          <Route path=":locationId" element={<LocationItem />} />
          <Route path="*" element={<HeroList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
