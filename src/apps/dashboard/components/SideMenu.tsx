import { BadgeDollarSign, BringToFront, Settings, Users } from "lucide-react";

export default function SideMenu() {
  return (
    <div className="p-4 mt-4 shadow-md bg-white rounded-md">
        <div>
            <ul className="flex flex-col gap-2">
                <li><span className="flex items-center gap-2 text-sm font-bold text-fuchsia-600"><BringToFront size={12}/> Overview</span></li>
                <li><span className="flex items-center gap-2 text-sm"><BadgeDollarSign size={12}/> Sales</span></li>
                <li><span className="flex items-center gap-2 text-sm"><Users size={12}/> Customers</span></li>
                <li><span className="flex items-center gap-2 text-sm"><Settings size={12}/> Settings</span></li>
            </ul>
        </div>
    </div>
  );
}
