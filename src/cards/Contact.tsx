import Card from '../components/Card'

const Contact = ({ selectedCard }: { selectedCard: string }) => (
  <Card selected={selectedCard === 'contato'}>
    <span className="font-bold text-lg highlight-blue-green w-fit">
      Contato
    </span>

    <span>
      <b>Email:</b> gustavo.fariassiqueira@gmail.com
    </span>
    <span>
      <b>Telefone:</b> +55 (19) 99530-6810
    </span>
    <span>
      <b>Linkedin:</b> https://www.linkedin.com/in/gustavofariasdesiqueira/
    </span>
  </Card>
)

export default Contact
