import { BadgeDollarSign, BringToFront, Settings, Users } from "lucide-react";

export default function SideMenu() {
  return (
    <div className="p-4 mt-4 shadow-md bg-white rounded-md">
      <div>
        <ul className="flex flex-col gap-2">
          <li className="p-2">
            <span className="flex items-center gap-2 text-sm font-bold text-fuchsia-600">
              <BringToFront size={12} /> Overview
            </span>
          </li>
          <li className="p-2">
            <span className="flex items-center gap-2 text-sm hover:text-fuchsia-600 hover:font-bold">
              <BadgeDollarSign size={12} /> Sales
            </span>
          </li>
          <li className="p-2">
            <span className="flex items-center gap-2 text-sm hover:text-fuchsia-600 hover:font-bold">
              <Users size={12} /> Customers
            </span>
          </li>
          <li className="p-2">
            <span className="flex items-center gap-2 text-sm hover:text-fuchsia-600 hover:font-bold">
              <Settings size={12} /> Settings
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
