import React from "react";

interface FileListProps {
  files: string[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div className="file-list">
      <h2 className="text-2xl font-bold mb-4">Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} className="mb-2">
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
