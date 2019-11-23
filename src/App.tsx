import * as React from "react";
import "./App.scss";
import { useWindowSize } from "./Hooks/useWindowSize";
import { Loading } from "./Loading";
import { RangeInput } from "./RangeInput";

const TITLE_DURATION = "DURATION";
const MINIMUM_DURATION = 1;
const MAXIMUM_DURATION = 10;
const DEFAULT_DURATION = 2;

const TITLE_SIZE = "SIZE";
const MINIMUM_SIZE = 10;
const DEFAULT_SIZE = 500;

export const App: React.FunctionComponent = () => {
  const [isOpenMenu, setOpenMenu] = React.useState(false);
  const setIsOpenMenuFlag = () => setOpenMenu(!isOpenMenu);

  const [customDuration, setCustomDuration] = React.useState(DEFAULT_DURATION);
  const roundDuration = Math.max(MINIMUM_DURATION, customDuration);

  const [customSize, setCustomSize] = React.useState(DEFAULT_SIZE);
  const { width, height } = useWindowSize();
  const MAX_SIZE = Math.min(width, height);

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "range") {
      const userValue = parseInt(e.target.value, 10);
      switch (e.target.name) {
        case TITLE_SIZE:
          setCustomSize(userValue);
          break;
        case TITLE_DURATION:
          setCustomDuration(userValue);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="app">
      <Loading
        size={Math.min(MAX_SIZE, customSize)}
        roundDuration={roundDuration}
        onClick={setIsOpenMenuFlag}
      />
      {isOpenMenu && (
        <div className="menu">
          <RangeInput
            maxValue={MAX_SIZE}
            minValue={MINIMUM_SIZE}
            setValue={validateInput}
            title={TITLE_SIZE}
            value={customSize}
          />
          <RangeInput
            maxValue={MAXIMUM_DURATION}
            minValue={MINIMUM_DURATION}
            setValue={validateInput}
            title={TITLE_DURATION}
            value={customDuration}
          />
        </div>
      )}
    </div>
  );
};
