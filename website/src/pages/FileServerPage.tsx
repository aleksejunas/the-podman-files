import React, { useState } from "react";
import FileList from "../components/file-server/FileList";
import FileUpload from "../components/file-server/FileUpload";

const FileServerPage: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);

  const handleFileUpload = (file: File) => {
    // Simulating a file upload and adding it to the list of files
    setFiles((prevFiles) => [...prevFiles, file.name]);
  };

  // TODO: GIT STASH the changes and create a file-server func branch

  return (
    <div className="file-server-page flex flex-col min-h-screen bg-primary text-fg-primary p-6">
      <div className="flex flex-col items-center justify-center flex-grow">
        <FileUpload onUpload={handleFileUpload} />
        <FileList files={files} />
      </div>
    </div>
  );
};

export default FileServerPage;
