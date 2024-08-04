import { Icon } from "@iconify/react/dist/iconify.js"


export default function LoadingAnimation({style}:{style?:string}) {
  return (
    <Icon icon={"eos-icons:loading"} className={`text-4xl ${style??""}`}/>
  );
}
