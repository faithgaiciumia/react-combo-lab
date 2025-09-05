import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import RepoCard from "./components/RepoCard";
import SortByMenu from "./components/SortByMenu";
import SearchRepos from "./components/SearchRepos";
import useDebounce from "@/hooks/useDebounce";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function Github() {
  const [githubUsername, setGithubUsername] = useState<string>("");
  const [allRepositories, setAllRepositories] = useState<Repository[]>([]);
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);

  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  //const debouncedUsername = useDebounce(githubUsername, 500);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  
  //handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!githubUsername.trim()) return;
    setHasSearched(true);

    //fetch the public repositories from github api
    const url = `https://api.github.com/users/${githubUsername}/repos`;
    try {
      setLoading(true);
      setError("");

      const response = await fetch(url);
      const result = await response.json();

      if ("message" in result) {
        setError("Username not found");
        setRepositoryList([]);
      } else {
        setAllRepositories(result);
        setRepositoryList(result);
      }
    } catch (error) {
      console.log("Error fetching github username repos", error);
      setError("Username not found");
    } finally {
      setLoading(false);
    }
  };

  //handle sorting
  const sortMethod = (sortByTerm: "stars" | "forks" | "updated") => {
    const sortedRepos = [...repositoryList].sort((a, b) => {
      switch (sortByTerm) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "forks":
          return b.forks_count - a.forks_count;
        case "updated":
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        default:
          return 0;
      }
    });
    setRepositoryList(sortedRepos);
  };

  useEffect(()=>{
    if(!debouncedSearchTerm){
      setRepositoryList(allRepositories);
      return;
    }
    const filteredRepositories = allRepositories.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRepositoryList(filteredRepositories);
  }, [debouncedSearchTerm, allRepositories, searchTerm])

  //handle filtering/search
  // const filterMethod = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const filteredRepositories = allRepositories.filter(
  //     (repo) =>
  //       repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setRepositoryList(filteredRepositories);
  // };
  return (
    <div className="p-4">
      <div className="flex items-center justify-center my-4">
        <h1 className="font-bold text-xl">Github Repository Explorer</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            placeholder="Enter Github Username"
            required
            value={githubUsername}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGithubUsername(e.target.value)
            }
          />
          <Button
            type="submit"
            className="bg-amber-600 text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2Icon className="animate-spin" /> Searching...
              </span>
            ) : (
              <span>Search</span>
            )}
          </Button>
        </div>
        <div className="my-2 max-w-md mx-auto">
          <span className="text-red-600 text-sm">{error}</span>
        </div>
      </form>
      <div>
        <h2 className="font-bold">All Repositories:</h2>
        {loading && (
          <div>
            <Loader2Icon className="animate-spin" />
          </div>
        )}
        {repositoryList.length > 0 ? (
          <>
            <div className="flex items-center gap-2 my-4">
              <SortByMenu sortMethod={sortMethod} />{" "}
              <SearchRepos
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}                
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {repositoryList.map((repo) => (
                <RepoCard
                  id={repo.id}
                  html_url={repo.html_url}
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  stargazers_count={repo.stargazers_count}
                  forks_count={repo.forks_count}
                  updated_at={repo.updated_at}
                />
              ))}
            </div>
          </>
        ) : hasSearched && !loading ? (
          <div className="my-4">
            <h3 className="text-sm">
              No repositories found under <b>{githubUsername}</b>
            </h3>
          </div>
        ) : (
          <div className="my-4">
            <h3 className="text-sm">Repositories will appear here</h3>
          </div>
        )}
      </div>
    </div>
  );
}
