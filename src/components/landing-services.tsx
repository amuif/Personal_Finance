const LandingServices = () => {
  return (
    <div className="px-3 py-12 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h4 className="text-center text-primary font-bold">Features</h4>
        <p className="text-center text-3xl font-semibold w-full">
          Everything you need to run & <br />{' '}
          <span className="text-primary">grow your finance</span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default LandingServices;

//
// import {
//   BellIcon,
//   CalendarIcon,
//   FileTextIcon,
//   GlobeIcon,
//   InputIcon,
// } from "@radix-ui/react-icons";
//
//
// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save money",
//     description: "",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
//   },
//   {
//     Icon: InputIcon,
//     name: "Plan",
//     description: "Search through all your files in one place.",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
//   },
//   {
//     Icon: GlobeIcon,
//     name: "Invest",
//     description: "Supports 100+ languages and counting.",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Control",
//     description: "Use the calendar to filter your files by date.",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//   },
// ];
//
// export function Features() {
//   return (
//     <div>
//
//     </div>
//  );
// }
