"use client";

import {
  BlockNoteEditor,
} from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote
} from "@blocknote/react";
import "@blocknote/react/style.css";

import { useEdgeStore } from "@/lib/edgestore";
import { Delete } from "lucide-react";

interface EditorProps {
  onChange: (value: string, html:string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({
  onChange,
  initialContent = "{}",
  editable
}: EditorProps) => {
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ 
      file
    });

    return response.url;
  }

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: 
    
      initialContent 
      ?  JSON.parse(initialContent) 
      : undefined,

    onEditorContentChange: async (editor) => {
      const html: string = await editor.blocksToHTMLLossy(editor.topLevelBlocks);
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2), html);
    },
  })

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={"light"}
      />
    </div>
  )
}
export default Editor;