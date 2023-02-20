import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymce-plugin-bothindent', {
    text: 'tinymce-plugin-bothindent button',
    onAction: () => {
      editor.setContent('<p>content added from tinymce-plugin-bothindent</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-plugin-bothindent', setup);
};
