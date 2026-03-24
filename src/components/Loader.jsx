import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

export default function Loader() {
  return (
    <>
    <div className="container">
        <div className="text-center py-5 my-5">
      <Bouncy size="45" speed="1.75" color="black" />

        </div>
      </div>
    </>
  );
}
