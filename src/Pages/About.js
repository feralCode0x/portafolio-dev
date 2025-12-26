import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails, abilitiesDetails, portafolioDetails } from "../Details";
import { DownloadButton } from "../Components/DownloadButton"

function About() {
  return (

      
    <main className="container mx-auto max-width pt-1 pb-20">
 <DownloadButton />
      <section>
     
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              duration={Duration}
            />
          ))
        )}

      </section>
          <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Abilities
     </h1>
        <p className="text-content py-8 lg:max-w-3xl">{abilitiesDetails.abilities}</p>
      </section>
        <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Portafolio
     </h1>
        <a href="https://github.com/feralCode0x"><p className="text-content py-8 lg:max-w-4xl font-bold">{portafolioDetails.portafolio}</p>
      </a></section>
    </main>

  );
}


export default About;