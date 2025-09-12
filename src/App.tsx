import { Link } from "react-router-dom";
import "./App.css";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const miniProjects = [
  {
    name: "Github Repository Explorer",
    description: "Search the Github API for user public repositories",
    features: [
      "User Input",
      "Lists Dynamic Display",
      "Sorting and Filtering",
      "Error and Loading States",
      "Reusable Components",
    ],
    href: "/github",
  },
  {
    name: "Trello-like Kanban Board",
    description: "A simplified kanban board",
    features: ["State Management", "Components", "Drag-and-drop"],
    href: "/kanban",
  },
  {
    name: "E-Commerce Product Catalog",
    description: "A product catalog page for a fake/sample e-commerce store",
    features: [
      "Lists Display",
      "Array Filtering",
      "Products Search",
      "Products Sort",
      "Cart Logic",
    ],
    href: "/catalog",
  },
  {
    name: "Form-Builder and Validator",
    description:
      "A dynamic form builder where user can add fields and validation rules",
    features: [
      "Lists Display and Reordering",
      "Live Preview and Updates",
      "Save and Export",
      "State Error Tracking",
    ],
    href: "/formbuilder",
  },
];
function App() {
  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 bg-amber-600">
        <h1 className="font-bold">React Combo Lab</h1>
        <nav>
          <Link to={"/"} className="mx-2 hover:underline text-sm">
            Home
          </Link>
        </nav>
      </div>
      <div className="grid md:grid-cols-3 gap-2 p-4">
        {miniProjects.map((project) => (
          <Link to={project.href} key={project.name}>
            <Card className="h-[100%]">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
                <CardAction className="text-amber-600 text-sm">
                  View{" "}
                </CardAction>
              </CardHeader>
              <CardContent>
                <h1 className="font-bold text-sm">Features:</h1>
                <ul className="list-disc text-sm mx-4">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;
