/* eslint-disable import/extensions */
import React, { FC, useRef, useEffect, useState } from "react";
import cn from "../../utilities/classnames";
// eslint-disable-next-line import/no-unresolved
import { StepFormProps, WidthContent } from "./types";
import "./styles.scss";

let indexvalue = 1;
const StepForm: FC<StepFormProps> = (props) => {
  const { disabled, step, gotToClickStep, arrayOfTitles } = props;
  let ifValue;
  const wrapper = useRef<HTMLDivElement>(null);
  function getWindowDimensions(): WidthContent | undefined {
    if (!window) return;
    const { innerWidth: width, innerHeight: height } = window;
    // eslint-disable-next-line consistent-return
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState<any>(
    getWindowDimensions(),
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (step > 1 && step !== arrayOfTitles.length) {
    ifValue = `${50}%`;
  } else if (step === arrayOfTitles.length) {
    ifValue = `${100}%`;
  } else {
    ifValue = `${0}%`;
  }

  const progress =
    windowDimensions?.width >= 800 ?
      `${((step - 1) / (arrayOfTitles.length - 1)) * 100}%` :
      ifValue;

  const renderValues = () => {
    if (windowDimensions?.width >= 800) {
      return arrayOfTitles.map((item, index) => (
        <button
          key={indexvalue++}
          type="button"
          onClick={() => gotToClickStep && gotToClickStep(index + 1)}
          disabled={disabled}
          className={cn(`progress-step`, {
            "border-active": step === index + 1,
            "border-full": step > index + 1,
            "border-gray": step < index + 1,
          })}
        >
          <span>{index + 1}</span>
          <div className="top-value">{item}</div>
        </button>
      ));
    }
    const stepIdx = step - 1;
    const min = step === arrayOfTitles.length ? stepIdx - 2 : stepIdx - 1;
    const max = stepIdx + 2;
    const arrayReduced = arrayOfTitles.reduce(
      (acc: string[], current: string, index: number) => {
        if (acc.length < 3 && index >= min && index <= max) {
          return [...acc, current];
        }

        return acc;
      },
      [] as string[],
    );

    return arrayReduced.map((item) => {
      const indexFound = arrayOfTitles.findIndex((t) => t === item);
      return (
        <button
          type="button"
          key={indexFound}
          onClick={() => gotToClickStep && gotToClickStep(indexFound + 1)}
          disabled={disabled}
          className={cn(`progress-step`, {
            "border-active": step === indexFound + 1,
            "border-full": step > indexFound + 1,
            "border-gray": step < indexFound + 1,
          })}
        >
          <span className="font-mono text-2xl">{indexFound + 1}</span>
          <div className="top-value">{item}</div>
        </button>
      );
    });
  };
  return (
    <>
      <div className="progressBar" ref={wrapper}>
        <div className="progress" style={{ width: progress }} />
        {renderValues()}
      </div>
    </>
  );
};
export default StepForm;
