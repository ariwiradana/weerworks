import { NextPage } from "next";
import ButtonDark from "../ui/ButtonDark";
import { NavbarLinks } from "@/constants/NavbarLinks";
import Link from "next/link";
import { GoPlus } from "react-icons/go";

const Navbar: NextPage = () => {
  return (
    <nav className="h-20 w-full fixed inset-0 bg-white z-30">
      <ul className="grid grid-cols-2 md:grid-cols-3 container mx-auto px-8 h-full">
        <li className="flex items-center">
          <h5 className="text-dark text-2xl font-medium">Weerworks</h5>
        </li>
        <li className="items-center justify-center gap-x-7 hidden md:flex">
          {NavbarLinks.map((nav) => (
            <Link className="text-dark" href={nav.path} key={nav.path}>
              {nav.label}
            </Link>
          ))}
        </li>
        <li className="flex items-center justify-end">
          <ButtonDark title="Start Your Project" icon={<GoPlus />} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
