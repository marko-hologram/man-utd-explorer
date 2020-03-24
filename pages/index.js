import Head from "next/head"
import SideNavbar from "../components/SideNavbar"

const Index = () => {
  return (
    <div className="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>
      <body>
        <div className="flex flex-row">
          <SideNavbar />

          <div className="min-h-screen w-3/4 bg-red-900">
            <div className="text-center text-5xl font-bold text-gray-200">
              Manchester United
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Index
