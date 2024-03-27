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

const rawDocument = {
    "time" : 1550476186479,
    "blocks" : [{
        data:{
            text:'Document Name',
            level:2
        },
        id: "123",
        type:'header'
    },
    {
        data:{
            level:4
        },
        id: "1234",
        type:'header'
    }],
    "version" : "2.8.1"
}

function Editor() {
  const ref = useRef<EditorJS>();
  const [document, setDocument]= useState(rawDocument);
  useEffect(() => {
    initEditor();
  });
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
      data:document
    });
    ref.current = editor;
  };
  return (
    <div>
      <div id="editorjs" className="ml-20"></div>
    </div>
  );
}

export default Editor;
