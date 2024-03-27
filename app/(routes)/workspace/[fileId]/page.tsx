import React from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/Editor";

function page() {
  return (
    <div>
      <WorkSpaceHeader />

      {/* Workspace LAyout */}

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document  */}
        <div className="h-screen ">
            <Editor />
        </div>
        {/* Canvas  */}
        <div className="h-screen bg-red-600">Canvas</div>
      </div>
    </div>
  );
}

export default page;
