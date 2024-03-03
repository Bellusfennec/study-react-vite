import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import ContainerWrapper from "../../components/common/wrappers/ContainerWrapper";
import ErrorBoundary from "../../middleware/ErrorBoundary";
import style from "./style.module.css";
import { Loader } from "@mantine/core";

const Nav = lazy(() => import("../../components/ui/Nav").then((module) => ({ default: module.Nav })));

const MainLayout = () => {
  return (
    <ContainerWrapper className={style.container}>
      <Suspense fallback={<Loader />}>
        <Nav />
      </Suspense>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </ContainerWrapper>
  );
};

export default MainLayout;
