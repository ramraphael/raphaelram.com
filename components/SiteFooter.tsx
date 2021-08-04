import { Container } from "./Container";
import { RiTwitterFill, RiGithubFill, RiMailFill } from "react-icons/ri";

export const SiteFooter = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-2">
      <Container>
        <div className="py-8 flex flex-col items-center lg:flex-row">
          <h3 className="flex justify-center text-xl text-gray-700 font-bold tracking-tighter leading-tight mb-8 md:mb-auto md:mr-auto hover:opacity-80 hover:text-red-700 transition duration-200">
            <a
              href="https://github.com/ramraphael/raphaelram.com"
              target="_blank"
            >
              View the source code
            </a>
          </h3>

          <div className="flex justify-end items-center">
            <a
              href="https://github.com/ramraphael"
              target="_blank"
              className="mx-3 font-bold group hover:opacity-50 transition-opacity duration-200"
            >
              <RiGithubFill className="h-6 w-6 fill-gray-700" />
            </a>

            <a
              href="https://twitter.com/RaphaelWrites"
              target="_blank"
              className="mx-3 font-bold group hover:opacity-50 transition-opacity duration-200"
            >
              <RiTwitterFill className="h-6 w-6 fill-[#1DA1F2]" />
            </a>

            <a
              href={`mailto:ramraphael@gmail.com`}
              target="_blank"
              className="mx-3 font-bold group hover:opacity-50 transition-opacity duration-200"
            >
              <RiMailFill className="h-6 w-6 fill-[#b91c1c]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
