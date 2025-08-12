import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <div>
    <div className="grid-background"></div>
    <main className="min-h-screen container">
      <Header />
      <Outlet />
    </main>
    <div className="p-10 bg-gradient-to-r from-gray-900 to-gray-800 mt-10 text-center text-white ">
      <a href="https://github.com/harsh7401/Job_Portal">Made by - harsh7401</a>
    </div>
  </div>
);

export default AppLayout;
