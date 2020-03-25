import MUFCLogoImage from "./MUFCLogoImage"

const SideNavbar = () => {
  return (
    <>
      <div className="min-h-screen w-1/6 bg-gray-200">
        <div className="flex flex-col h-full text-center text-3xl text-gray-900 font-semibold items-center justify-around">
          <div>
            <MUFCLogoImage />
          </div>
          <div> Home </div>
          <div> Players </div>
          <div> Trophies </div>
          <div> About </div>
        </div>
      </div>
    </>
  )
}

export default SideNavbar
