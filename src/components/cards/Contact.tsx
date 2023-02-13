import Card from '../Card'

type ContactProps = {
  selected: boolean
}

const Contact = ({ selected }: ContactProps) => (
  <Card wiggle={selected}>
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
