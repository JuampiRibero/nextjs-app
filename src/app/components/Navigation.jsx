import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

export default function Navigation() {
  return (
    <header className="border-solid border-2 boder-gray-500 rounded-md mb-4 p-2">
      <nav>
        <ul className="flex justify-center gap-16">
          {links.map(({ label, route }) => (
            <li key={route} className="hover:text-gray-500 hover:underline hover:underline-offset-2">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
