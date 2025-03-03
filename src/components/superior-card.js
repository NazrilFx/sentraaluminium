export default function SuperiorCard({ icon, text, type }) {
  if (type == 1) {
    return (
        <div className="flex items-center *:relative mt-3">
          <div className="text-white bg-sky-500 p-3 rounded-xl *:size-8">
            {icon}
          </div>
          <div className="font-bold px-5 py-2 backdrop-blur-md border border-black/80 rounded-full -translate-x-5">
            {text}
          </div>
        </div>
      );
  } else if (type == 2) {
    return (
      <div className="flex items-center *:relative mt-3">
        <div className="z-10 font-bold px-5 py-2 backdrop-blur-md border border-black/80 rounded-full translate-x-5">
          {text}
        </div>
        <div className="text-white bg-sky-500 p-3 rounded-xl *:size-8">
          {icon}
        </div>
      </div>
    );
  }
}
