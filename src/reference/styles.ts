export const type = {
  desktop: {
    textXLarge: `font-size: 18px; letter-spacing: 0.01em; line-height:1.2em`,
    textLarge: `font-size: 16px; letter-spacing: 0.01em; line-height:1.2em`,
    textRegular: `font-size: 14px; letter-spacing: 0.01em; line-height:1.2em`,
    textMedium: `font-size: 13px; font-weight:500; letter-spacing: 0.01em; line-height:1.2em`,
    textSmall: `font-size: 12px; font-weight:500; letter-spacing: 0em; line-height:1.2em`,
    textXSmall: `font-size: 11px; letter-spacing: 0.01em; line-height:1.2em`,
  } as { [key: string]: string },
};

export const flexBox = {
  row: `display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  rowBetween: `display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  rowStart: `display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  rowEnd: `display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  column: `display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  columnStart: `display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  columnStartCenter: `display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  columnBetween: `display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding:0;
  margin:0`,
  columnEnd: `display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  padding:0;
  margin:0`,
};
