import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 bg-gradient-to-r from-gray-900 to-gray-800 mt-10 text-center text-white ">
        Made by harsh7401
      </div>
    </div>
  );
};

export default AppLayout;
