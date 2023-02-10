import Card from '../components/Card'

import me from '../assets/me.jpg'

const Profile = () => (
  <Card className="md:w-[300px]">
    <div className="flex justify-center h-52 w-full bg-gray-200 mb-2 rounded-xl overflow-hidden">
      <img src={me} className="h-72 w-72" />
    </div>

    <div className="flex justify-between items-center gap-8 font-bold text-gray-900">
      <span className="highlight-green text-lg">Gustavo Siqueira</span>

      <span>23 yo</span>
    </div>

    <span className="mb-2 text-gray-700">
      Atuando como Desenvolvedor Front End / Mobile especializado em
      {` `}
      <span className="highlight-blue font-medium">Typescript</span>,
      principalmente com os frameworks{` `}
      <span className="highlight-blue font-medium">React e React Native</span>,
      sempre trabalhando focado nos resultados e compartilhando conhecimento e
      experiências ao longo da minha jornada.
    </span>

    <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 px-2 bg-[#4eff8a] rounded-md border-2 border-black font-semibold text-sm">
      Front end Dev
    </div>
  </Card>
)

export default Profile
