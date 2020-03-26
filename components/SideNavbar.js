import MUFCLogoImage from "./MUFCLogoImage"

const SideNavbar = () => {
  return (
    <div className="min-h-screen w-1/6 bg-gray-200">
      <div className="flex flex-col h-full text-center text-3xl text-gray-900 font-semibold items-center justify-around">
        <div>
          <MUFCLogoImage />
        </div>
        {/* This should probably be a <nav></nav> element with <ul></ul> element that contains <li><a></a></li> as navigation for more semantic meaning. Also custom <Link> component from Next.js will have to be used for navigation */}
        <div> Home </div>
        <div> Players </div>
        <div> Trophies </div>
        <div> About </div>
      </div>
    </div>
  )
}

export default SideNavbar
