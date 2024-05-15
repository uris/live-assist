import { Icon } from '@asset/Icons/Icon';
import * as Styled from './Styles';
import { Image } from '@asset/images/Logo';

interface Props {
  file?: any;
  allowDelete?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
}

export function FileButton(props: Props) {
  const {
    file = null,
    allowDelete = true,
    onDelete = () => null,
    onClick = () => null,
  } = props;

  const fileTypes = [
    { extenstion: 'pdf', icon: 'pdf' },
    { extenstion: 'txt', icon: 'pdf' },
    { extenstion: 'docx', icon: 'pdf' },
    { extenstion: 'doc', icon: 'pdf' },
    { extenstion: 'rtf', icon: 'pdf' },
    { extenstion: 'ppt', icon: 'pdf' },
    { extenstion: 'pptx', icon: 'pdf' },
  ];

  const fileName = () => {
    if (!file.name) return null;
    return file.name.split('.')[0];
  };

  const fileIcon = () => {
    if (!file.name) return null;
    const extension = file.name.split('.')[1];
    const icon = fileTypes.filter((item: any) => item.extension === extension);
    if (icon) return <Image image="pdf" height={18} />;
  };

  if (!file) return null;
  return (
    <Styled.Wrapper $allowDelete={allowDelete} onClick={() => onClick()}>
      {fileIcon()}
      <div className="file">{fileName()}</div>
      {allowDelete && (
        <Icon
          name={'x'}
          size={20}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete();
          }}
        />
      )}
    </Styled.Wrapper>
  );
}
