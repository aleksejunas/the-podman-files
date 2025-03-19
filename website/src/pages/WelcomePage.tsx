// FOR GITUI TESTING

import React from "react";

import Button from "../components/buttons/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFileDownload,
//   faFileUpload,
// } from "@fortawesome/free-solid-svg-icons";
import {
  faLinux,
  faFedora,
  faUbuntu,
  faDocker,
  faGithub,
  faRust,
} from "@fortawesome/free-brands-svg-icons";

const faBrandIcons = [faLinux, faFedora, faUbuntu, faDocker, faRust, faGithub];

const WelcomePage = () => {
  return (
    <div className="bg-primary py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-secondary opacity-95 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray">
              <div className="py-8 text-base leading-6 space-y-4 text-fg-primary sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-fg-primary">
                  Welcome to The Podman Files!
                </h1>
                <p className="text-fg-secondary">Your Superbest File-Server</p>
                <p className="text-fg-secondary text-xs">
                  Let&apos;s pretend that Superbest is a real word
                </p>
                <Button variant="primary">Get started</Button>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-fg-quaternary mt-2">
                  Tehnologies used
                </h4>
                <div className="mt-4 text-fg-secondary">
                  {faBrandIcons.map((icon, index) => (
                    <FontAwesomeIcon
                      className="mx-2"
                      key={index}
                      icon={icon}
                      size="3x"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
