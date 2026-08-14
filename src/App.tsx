import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

function App() {
  return (
    <section className="flex flex-col max-w-300 min-h-screen min-h-dvh md:min-h-screen mx-auto px-3 md:px-0">
      <Header />
      <main className="flex-1">main</main>
      <Footer />
    </section>
  )
}

export default App
