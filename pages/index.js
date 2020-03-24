import Head from "next/head"
import SideNavbar from "../components/SideNavbar"
import MainPage from "../components/MainPage"

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
            <div className="text-center px-2 py-6 text-5xl font-bold text-gray-200">
              Manchester United
            </div>
          </MainPage>
        </div>
      </div>
    </div>
  )
}

export default Index
