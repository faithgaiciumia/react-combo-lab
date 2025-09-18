import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
import TopNav from "./components/TopNav";

export default function Dashboard() {
  return (
    <div className="bg-fuchsia-50 min-h-[100vh]">
      <TopNav />
      <div className="grid grid-cols-6 p-2 gap-2">
        <SideMenu />
        <Main/>
      </div>
    </div>
  );
}
