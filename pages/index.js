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
      <div className="flex flex-row">
        <SideNavbar />
        <MainPage>
          <div className="text-center text-5xl font-bold text-gray-200">
            <div className="m-4 px-5 py-5">Manchester United</div>
          </div>
          <MyImage />
        </MainPage>
      </div>
    </div>
  )
}

export default Index
