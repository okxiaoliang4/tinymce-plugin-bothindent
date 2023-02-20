import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor): void => {
  const bothindent: string = editor.getParam('bothindent', '0px 8px 16px 24px 32px 40px 48px')
  editor.on('init', () => {
    editor.formatter.register({
      'padding-left': {
        block: 'p',
        styles: {
          'padding-left': '%value'
        }
      },
      'padding-right': {
        block: 'p',
        styles: {
          'padding-right': '%value'
        }
      }
    })
  });

  editor.ui.registry.addMenuButton('bothindent', {
    text: '两端缩进',
    fetch(callback) {
      callback(bothindent.split(' ').map((item) => {
        return {
          type: 'togglemenuitem',
          text: item,
          active: editor.formatter.match('padding-left', { value: item }) && editor.formatter.match('padding-right', { value: item }),
          onAction: () => {
            editor.formatter.toggle('padding-left', { value: item })
            editor.formatter.toggle('padding-right', { value: item })
          }
        }
      }))
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('bothindent', setup);
};
