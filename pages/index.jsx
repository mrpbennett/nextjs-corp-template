import LearnMore from '../components/learn-more'
import Charity from '../components/sections/charity'
import Logos from '../components/sections/logos'
import LayoutMain from '../layouts/layout-main'

export default function Home() {
  return (
    <>
      <div
        id="intro-screen"
        className="bg-blue-300 relative z-0 h-[80vh] min-h-[800px]"
      >
        <div className="absolute bottom-0 right-0 bg-white rounded-tl-[122px] min-h-[40vh] w-[63%] flex flex-wrap flex-col justify-center px-20 py-16">
          <h1 className="text-6xl font-bold font-playfair leading-none mb-[24px]">
            A global leader in impact intelligence
          </h1>
          <p className="text-2xl font-dmsans mb-[30px]">
            Offering the debt capital market leading management, impact
            reporting and asset allocation solutions to mobilize transition.
          </p>

          <div className="flex items-center">
            <LearnMore href="about" />
          </div>
        </div>
      </div>

      <Logos />

      <div className="realtive bg-[#f6f6f6]">
        <div className="bg-black rounded-tr-[122px]  py-36 text-white">
          <div className="container prose prose-xl">
            <h2 className="text-white font-playfair">Who are we</h2>
            <p className="text-white font-dmsans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-white font-dmsans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <Charity />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <LayoutMain title="A global leader in impact intelligence">
      {page}
    </LayoutMain>
  )
}
