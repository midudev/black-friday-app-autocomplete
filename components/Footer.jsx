import { youtube } from "./Icons.jsx"
import { github, instagram, twitter } from "./Icons.jsx"

const FooterSocialLink = ({ name, href, svg }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{name}</span>
      {svg}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Código fuente
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                YouTube Video
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <FooterSocialLink name='Youtube' href='https://youtube.com/midudev' svg={youtube} />
            <FooterSocialLink name='Instagram' href='https://instagram.com/midu.dev' svg={instagram} />
            <FooterSocialLink name='Twitter' href='https://twitter.com/midudev' svg={twitter} />
            <FooterSocialLink name='Github' href='https://github.com/midudev' svg={github} />
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            2021 midudev
          </p>
        </div>
      </footer>
  )
}