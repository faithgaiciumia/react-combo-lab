/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@/components/ui/input";

export default function SearchRepos({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <form>
        <Input
          placeholder="Search repositories..."
          className="w-lg"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          required
        />
      </form>
    </div>
  );
}
