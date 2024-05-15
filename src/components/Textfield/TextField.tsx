import { useEffect, useState } from 'react';
import * as Styled from './Styles';
import { AnimatePresence, useAnimate, motion, Transition } from 'framer-motion';
import { themeColors } from '@ref/colors';
import { Icon, OSIcons } from '@asset/Icons/Icon';

interface Props {
  value?: any;
  name?: string;
  label?: string;
  placeholder?: string;
  focused?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  onKeydown?: (key: string) => void;
  onValidate?: (state: boolean) => void;
  onSubmit?: (value: string) => void;
  size?: { width?: number | string; height?: number | string };
  padding?: string;
  borderRadius?: number | string;
  textAlign?: string;
  labelAlignsRight?: boolean;
  borderColor?: { focused: string; blurred: string };
  backgroundColor?: { focused: string; blurred: string };
  color?: { focused: string; blurred: string };
  iconPos?: 'none' | 'left' | 'right' | 'both';
  iconLeft?: { name?: OSIcons | string; size?: number; color?: string };
  iconRight?: { name?: OSIcons | string; size?: number; color?: string };
  clearButton?: { size?: number };
  disabled?: boolean;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: Transition;
  type?: 'text' | 'password';
}

export function TextField(props: Props) {
  const {
    name = 'input_name',
    value = '',
    label = '',
    placeholder = 'placeholder',
    type = 'text',
    focused = false,
    onSubmit = () => null,
    onChange = () => null,
    onBlur = () => null,
    onFocus = () => null,
    onKeydown = () => null,
    onValidate = () => null,
    size = { width: '100%', height: 'auto' },
    padding = '12px 8px',
    borderRadius = 4,
    textAlign = 'left' as any,
    labelAlignsRight = true,
    borderColor = {
      focused: themeColors.grays200,
      blurred: themeColors.grays100,
    },
    backgroundColor = {
      focused: themeColors.graysWhite,
      blurred: themeColors.graysWhite,
    },
    color = {
      focused: themeColors.graysTextPrimary,
      blurred: themeColors.graysTextPrimary,
    },
    iconLeft = null,
    iconRight = null,
    clearButton = null,
    disabled = false,
    initial = null,
    animate = null,
    exit = null,
    transition,
  } = props;
  const [input, animateInput] = useAnimate();
  const [wrapper, animateWrapper] = useAnimate();
  const [text, setText] = useState<string>(value);
  useEffect(() => setText(value), [value]);
  useEffect(() => {
    if (input?.current && focused) {
      input.current.focus();
    }
  }, [focused, input]);

  function handleClearTextField() {
    if (input?.current) {
      input.current.focus();
      setText('');
    }
    onChange('');
  }

  function handleValueChange(value: string) {
    setText(value);
    onChange(value);
    onValidate(handleValidate(value));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleBlur();
      onSubmit(text);
      input?.current.blur();
    }
    if (disabled) {
      e.preventDefault();
      return true;
    }
    onKeydown(e.key);
  }
  function handleFocus() {
    animateWrapper(wrapper.current, {
      borderColor: borderColor.focused,
      backgroundColor: backgroundColor.focused,
    });
    animateInput(input.current, {
      color: disabled ? themeColors.graysTextDisabled : color.focused,
    });
    onFocus(text);
  }
  function handleBlur() {
    animateWrapper(wrapper.current, {
      borderColor: borderColor.blurred,
      backgroundColor: backgroundColor.blurred,
    });
    animateInput(input.current, {
      color: disabled ? themeColors.graysTextDisabled : color.blurred,
    });
    onBlur(text);
  }
  function handleValidate(value: string): boolean {
    if (!value) return false;
    return true;
  }

  return (
    <Styled.InputWrapper
      ref={wrapper}
      style={{
        borderRadius,
        ...size,
        borderColor: borderColor.blurred,
        backgroundColor: backgroundColor.focused,
      }}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {label !== '' && <Styled.Label style={{ padding }}>{label}</Styled.Label>}
      <Styled.InputContainer $padding={padding}>
        {iconLeft && (
          <div style={{ width: iconLeft.size, height: iconLeft.size }}>
            <Icon
              name={iconLeft.name}
              size={iconLeft.size}
              strokeColor={
                text === ''
                  ? themeColors.graysTextDisabled
                  : themeColors.graysTextPrimary
              }
            />
          </div>
        )}
        <Styled.Input
          ref={input}
          type={type}
          name={name}
          aria-label={name}
          autoCapitalize={'none'}
          autoCorrect={'off'}
          autoComplete={'off'}
          value={text}
          onChange={(e) => handleValueChange(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder={placeholder}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          onMouseDown={(e) => e.stopPropagation()}
          style={{
            color: disabled ? themeColors.graysTextDisabled : color.blurred,
            ...(label !== '' ? { paddingLeft: 0 } : null),
            ...(label !== '' && labelAlignsRight
              ? { textAlign: 'right' }
              : { textAlign }),
          }}
        />
        <AnimatePresence initial={false}>
          {clearButton && text !== '' && (
            <motion.div
              style={{ width: clearButton.size, height: clearButton.size }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => handleClearTextField()}
            >
              <Icon
                name={'x circle'}
                toggle={true}
                size={clearButton.size}
                strokeColor={themeColors.graysTextTertiary}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {iconRight && (
          <div style={{ width: iconRight.size, height: iconRight.size }}>
            <Icon
              name={iconRight.name}
              size={iconRight.size}
              strokeColor={
                text === ''
                  ? themeColors.graysTextDisabled
                  : themeColors.graysTextPrimary
              }
            />
          </div>
        )}
      </Styled.InputContainer>
    </Styled.InputWrapper>
  );
}
