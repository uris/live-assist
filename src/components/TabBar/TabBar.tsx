import { Icon } from '@asset/Icons/Icon';
import * as Styled from './Styles';
import { useEffect, useState } from 'react';
import { themeColors } from '@ref/colors';
import { useChat } from '@context/ChatThread';
import { DivInputField } from '@comp/DivInputField/DivInputField';

export type TabOption = {
  name?: string;
  id?: string | number;
};

interface Props {
  height?: number | string;
  width?: number | string;
  tabWidth?: number | string;
  padding?: number | string;
  textStyle?: string;
  hasClose?: boolean;
  onChange?: (tab: TabOption) => void;
}

export function TabBar(props: Props) {
  const { activeTabs, selectedTab } = useChat();
  const {
    height = '56px',
    width = '100%',
    padding = '8px 8px 8px 16px',
    textStyle = 'textRegular',
    tabWidth = '150px',
  } = props;
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (activeTabs.length > 1) setShow(true);
    else setShow(false);
  }, [activeTabs.length]);

  return (
    <Styled.Wrapper
      $height={height}
      $width={width}
      style={{ display: show ? 'flex' : 'none' }}
    >
      {activeTabs.map((option: TabOption, i: number) => {
        return (
          <Option
            key={i + '_option_' + option.name + '_' + option.id}
            label={option.name}
            id={option.id}
            value={i}
            selected={option.id === selectedTab}
            padding={padding}
            textStyle={textStyle}
            tabWidth={tabWidth}
          />
        );
      })}
      <div className="spacer" />
    </Styled.Wrapper>
  );
}

interface TabOptionProps {
  label?: string;
  value?: number;
  id?: any;
  icon?: string | null;
  selected?: boolean;
  padding?: number | string;
  textStyle?: string;
  tabWidth?: string | number;
}

function Option(props: TabOptionProps) {
  const { handleRemoveTab, handleChangeTab } = useChat();
  const {
    label = 'Option',
    id = '',
    selected = false,
    padding = '8px 24px',
    textStyle = 'textRegular',
    tabWidth = 'auto',
  } = props;

  return (
    <Styled.Option
      $padding={padding}
      $selected={selected}
      $textStyle={textStyle}
      $tabWidth={tabWidth}
      onClick={() => handleChangeTab(id)}
    >
      <DivInputField value={label} />
      <Icon
        name={'x'}
        size={18}
        strokeColor={themeColors.grays500}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleRemoveTab(id);
        }}
      />
    </Styled.Option>
  );
}
