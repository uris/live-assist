import * as Styled from './Styles';

interface Props {
  value?: string;
  width?: number | string;
  placeholder?: string;
  variant?: 'light' | 'dark';
  onChange?: (value: string) => void;
}

export function TextArea(props: Props) {
  const {
    variant = 'light',
    value,
    onChange = () => null,
    width = '100%',
    placeholder = '',
  } = props;

  return (
    <Styled.Wrapper $width={width} $variant={variant}>
      <textarea
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        placeholder={placeholder}
      >
        {value}
      </textarea>
    </Styled.Wrapper>
  );
}
