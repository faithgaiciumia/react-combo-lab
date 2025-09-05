import type { Repository } from "@/lib/definitions";
import {
  Card,  
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RepoCard({
  name,
  description,
  stargazers_count,
  forks_count,
  updated_at,
  html_url
}: Repository) {
  return (
    <>
      <Card className="my-2">
        <CardHeader>
          <CardTitle><a href={html_url} className="hover:underline">{name}</a></CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Stars: {stargazers_count}</p>
          <p>Forks: {forks_count}</p>
        </CardContent>
        <CardFooter>
          <p>Last Updated: {updated_at}</p>
        </CardFooter>
      </Card>
    </>
  );
}
