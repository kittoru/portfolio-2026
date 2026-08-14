import { contacts } from '@consts/contacts'
import { Link } from '@components/Link'

const mail = `mailto:${contacts.EMAIL.link}`

export const Header = () => (
  <header className="flex items-center justify-between py-3">
    <div className="font-medium text-4xl tracking-[10%] mb-1.25">ee-g</div>
    <div className="flex gap-5 items-center font-light tracking-[8%]">
      <Link blank link={contacts.GITHUB.link}>
        {contacts.GITHUB.text}
      </Link>
      <Link blank link={contacts.TG.link}>
        {contacts.TG.text}
      </Link>
      <Link link={mail}>{contacts.EMAIL.text}</Link>
    </div>
  </header>
)
