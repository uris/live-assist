import { FileButton } from '@comp/FileButton/FileButton';
import * as Styled from './Styles';

interface Props {
  files?: any[];
  type?: 'general' | 'inline';
  onClick?: (file: any) => void;
}

export function FileButtonList(props: Props) {
  const { files = undefined, type = 'general', onClick = () => null } = props;

  function handleClick(index: number) {
    if (!files) return;
    onClick(files[index]);
  }
  function setFiles() {
    if (!files) return null;
    return files.map((file: any, i: number) => {
      return (
        <FileButton
          key={'file_button' + file.name + '_' + i}
          file={file}
          allowDelete={type === 'general'}
          onClick={() => handleClick(i)}
        />
      );
    });
  }

  return <Styled.Wrapper $type={type}>{setFiles()}</Styled.Wrapper>;
}
