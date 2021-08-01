import Container from "./Container";
import { RiTwitterFill, RiGithubFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row">
          <h3 className="text-xl text-gray-700 font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 hover:opacity-80 hover:underline">
            <a
              href="https://github.com/ramraphael/raphaelram.com"
              target="_blank"
            >
              View the source code
            </a>
          </h3>

          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/ramraphael"
              target="_blank"
              className="mx-3 font-bold group hover:opacity-50"
            >
              <RiGithubFill className="h-6 w-6 fill-gray-700" />
            </a>

            <a
              href="https://twitter.com/RaphaelWrites"
              target="_blank"
              className="mx-3 font-bold group hover:opacity-50"
            >
              <RiTwitterFill className="h-6 w-6 fill-[#1DA1F2]" />
            </a>

            <a
              href={`mailto:ramraphael@gmail.com`}
              target="_blank"
              className="mx-3 font-bold group hover:opacity-50"
            >
              <RiMailFill className="h-6 w-6 fill-[#b91c1c]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
