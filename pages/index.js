import Head from "next/head"
import SideNavbar from "../components/SideNavbar"
import MainPage from "../components/MainPage"
import MyImage from "../public/MyImage"

const Index = () => {
  return (
    <div className="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>
      <div className="mx-auto min-h-screen">
        <div className="flex flex-row">
          <SideNavbar />
          <MainPage>
            <div className="text-center px-4 text-5xl font-bold text-gray-200">
              <div className="bg-red-900 py-5">Manchester United</div>
            </div>
            <div className="p-4">
              <MyImage />
            </div>
          </MainPage>
        </div>
      </div>
    </div>
  )
}

export default Index
