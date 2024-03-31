"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
//@ts-ignore
import Header from "@editorjs/header";
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import Checklist from "@editorjs/checklist";
//@ts-ignore
import Paragraph from "@editorjs/paragraph";
//@ts-ignore
import Warning from "@editorjs/warning";
//@ts-ignore
import ToggleBlock from "editorjs-toggle-block";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "../../dashboard/_components/FileList";

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: "Document Name",
        level: 2,
      },
      id: "123",
      type: "header",
    },
    {
      data: {
        level: 4,
      },
      id: "1234",
      type: "header",
    },
  ],
  version: "2.8.1",
};

function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const ref = useRef<EditorJS>();
  const updateDocument = useMutation(api.files.updateDocument);
  const [document, setDocument] = useState(rawDocument);

  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    console.log("Trigger Value");
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);

  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Describe your Design",
          },
        },
        list: {
          class: List,
          shortcut: "CMD+SHIFT+L",
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          shortcut: "CMD+SHIFT+C",
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+W",
          config: {
            titlePlaceholder: "Title",
            messagePlaceholder: "Message",
          },
        },
        toggle: {
          class: ToggleBlock,
          shortcut: "CMD+SHIFT+T",
          inlineToolbar: true,
        },
      },
      holder: "editorjs",
      data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
    });
    ref.current = editor;
  };

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData),
          }).then(
            (resp) => {
              toast("Document Updated!");
            },
            (e) => {
              toast("Server is busy, Please try again");
            }
          );
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  return (
    <div>
      <div id="editorjs" className="ml-20"></div>
    </div>
  );
}

export default Editor;
