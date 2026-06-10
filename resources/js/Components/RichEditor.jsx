import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

function ToolbarBtn({ onClick, active, title, children }) {
    return (
        <button
            type="button"
            onMouseDown={e => { e.preventDefault(); onClick(); }}
            title={title}
            className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                active ? 'bg-primary-800 text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
        >
            {children}
        </button>
    );
}

export default function RichEditor({ value, onChange }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value || '',
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'min-h-[200px] px-4 py-3 focus:outline-none prose prose-sm max-w-none',
            },
        },
    });

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value || '', false);
        }
    }, [value]);

    if (!editor) return null;

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:border-primary-500 transition-colors">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-200">
                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    active={editor.isActive('bold')}
                    title="Negrita"
                >
                    <strong>B</strong>
                </ToolbarBtn>
                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    active={editor.isActive('italic')}
                    title="Cursiva"
                >
                    <em>I</em>
                </ToolbarBtn>
                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    active={editor.isActive('strike')}
                    title="Tachado"
                >
                    <s>S</s>
                </ToolbarBtn>

                <span className="w-px bg-gray-300 mx-1 self-stretch" />

                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    active={editor.isActive('heading', { level: 2 })}
                    title="Título 2"
                >
                    H2
                </ToolbarBtn>
                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    active={editor.isActive('heading', { level: 3 })}
                    title="Título 3"
                >
                    H3
                </ToolbarBtn>

                <span className="w-px bg-gray-300 mx-1 self-stretch" />

                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    active={editor.isActive('bulletList')}
                    title="Lista"
                >
                    • Lista
                </ToolbarBtn>
                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    active={editor.isActive('orderedList')}
                    title="Lista numerada"
                >
                    1. Lista
                </ToolbarBtn>
                <ToolbarBtn
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    active={editor.isActive('blockquote')}
                    title="Cita"
                >
                    ❝
                </ToolbarBtn>

                <span className="w-px bg-gray-300 mx-1 self-stretch" />

                <ToolbarBtn
                    onClick={() => editor.chain().focus().undo().run()}
                    active={false}
                    title="Deshacer"
                >
                    ↩
                </ToolbarBtn>
                <ToolbarBtn
                    onClick={() => editor.chain().focus().redo().run()}
                    active={false}
                    title="Rehacer"
                >
                    ↪
                </ToolbarBtn>
            </div>

            {/* Editor */}
            <EditorContent editor={editor} />
        </div>
    );
}
