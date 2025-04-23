import dynamic from "next/dynamic";
const Error500 = dynamic(() => import("~/components/error/500"));

export default function Custom500() {
  return <Error500 />;
  // resolve issue 
}

Custom500.hasError = true;
