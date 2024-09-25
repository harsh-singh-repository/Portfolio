import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Hero_orbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = true,
  spinDuration,
  orbitDuration
}: PropsWithChildren<{ size: number; rotation: number; orbitDuration?:string ; shouldOrbit?:boolean;shouldSpin?:boolean,spinDuration?:string}>) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{
          animationDuration: orbitDuration,
        }}>
          <div
            className="flex items-start justify-start "
            style={{
              transform: `rotate(${rotation}deg)`,
              height: `${size}px`,
              width: `${size}px`,
            }}
          >
            <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
              animationDuration:spinDuration,
            }}>
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_orbit;
