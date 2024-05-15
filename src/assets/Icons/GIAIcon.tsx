interface Props {
  height?: number;
  onClick?: () => void;
}

export function GIAIcon(props: Props) {
  const { height = 40, onClick = () => null } = props;
  return (
    <div onClick={() => onClick()} style={{ cursor: 'pointer' }}>
      <svg
        height={height}
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.164 15.015c2.865-4.963 2.926-10.291.137-11.902-2.789-1.61-7.372 1.107-10.237 6.07-2.865 4.962-2.926 10.29-.137 11.901 2.789 1.61 7.372-1.107 10.237-6.07Z"
          fill="url(#a)"
        />
        <path
          d="M16.698 20.544c2.691-1.768 2.322-7.084-.825-11.873-3.146-4.789-7.879-7.237-10.57-5.468-2.691 1.768-2.323 7.084.824 11.873s7.88 7.237 10.57 5.468Z"
          fill="url(#b)"
        />
        <path
          d="M5.926 21.083c-2.79-1.61-2.835-7.002.137-11.902 1.358-2.24 8.268-.992 8.36-.972 3.467.733 4.605 1.842 1.74 6.804-2.865 4.963-7.448 7.68-10.237 6.07Z"
          fill="url(#c)"
        />
        <path
          d="M10.888 17.788c5.73 0 10.375-2.276 10.375-5.082 0-2.807-4.645-5.082-10.375-5.082S.514 9.899.514 12.706c0 2.806 4.644 5.082 10.374 5.082Z"
          fill="url(#d)"
        />
        <defs>
          <linearGradient
            id="a"
            x1="6.797"
            y1="9.983"
            x2="15.541"
            y2="14.268"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9EFFB0" />
            <stop offset=".21" stopColor="#38EA74" />
            <stop offset=".44" stopColor="#19C4BF" />
            <stop offset=".63" stopColor="#00A4FF" />
            <stop offset=".68" stopColor="#009EFF" />
            <stop offset=".74" stopColor="#008FFF" />
            <stop offset=".8" stopColor="#0075FF" />
            <stop offset=".87" stopColor="#0052FF" />
            <stop offset=".95" stopColor="#0025FF" />
            <stop offset="1" stopColor="#00F" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="14.694"
            y1="6.003"
            x2="7.2"
            y2="17.913"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".13" stopColor="#68D426" />
            <stop offset=".24" stopColor="#5BE063" />
            <stop offset=".37" stopColor="#4EEDA5" />
            <stop offset=".49" stopColor="#45F6D5" />
            <stop offset=".57" stopColor="#3FFCF3" />
            <stop offset=".62" stopColor="#3DFFFF" />
            <stop offset=".7" stopColor="#3FFFFF" stopOpacity=".99" />
            <stop offset=".76" stopColor="#45FFFF" stopOpacity=".94" />
            <stop offset=".82" stopColor="#50FFFF" stopOpacity=".87" />
            <stop offset=".88" stopColor="#5FFFFF" stopOpacity=".77" />
            <stop offset=".94" stopColor="#72FFFF" stopOpacity=".64" />
            <stop offset="1" stopColor="#8AFFFF" stopOpacity=".48" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="5.66"
            y1="12.251"
            x2="14.436"
            y2="16.551"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9EFFB0" />
            <stop offset=".21" stopColor="#38EA74" />
            <stop offset=".44" stopColor="#19C4BF" />
            <stop offset=".63" stopColor="#00A4FF" />
            <stop offset=".68" stopColor="#009EFF" />
            <stop offset=".74" stopColor="#008FFF" />
            <stop offset=".8" stopColor="#0075FF" />
            <stop offset=".87" stopColor="#0052FF" />
            <stop offset=".95" stopColor="#0025FF" />
            <stop offset="1" stopColor="#00F" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="10.78"
            y1="8.379"
            x2="10.995"
            y2="17.015"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00F" />
            <stop offset=".01" stopColor="#0005FF" stopOpacity=".99" />
            <stop offset=".21" stopColor="#0058FF" stopOpacity=".89" />
            <stop offset=".36" stopColor="#008DFF" stopOpacity=".82" />
            <stop offset=".43" stopColor="#00A1FF" stopOpacity=".8" />
            <stop offset=".58" stopColor="#00CDFF" stopOpacity=".74" />
            <stop offset=".7" stopColor="#00E8FF" stopOpacity=".7" />
            <stop offset=".73" stopColor="#08E8FE" stopOpacity=".67" />
            <stop offset=".78" stopColor="#1FE9FE" stopOpacity=".59" />
            <stop offset=".84" stopColor="#44EAFD" stopOpacity=".46" />
            <stop offset=".91" stopColor="#78ECFD" stopOpacity=".27" />
            <stop offset=".99" stopColor="#BAEFFC" stopOpacity=".04" />
            <stop offset="1" stopColor="#C6F0FC" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
