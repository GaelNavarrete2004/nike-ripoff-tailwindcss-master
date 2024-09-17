import Nav from '../components/Nav';
import ShoeProduct from '../components/ShoeProduct';
import { Footer } from '../sections';

const BuyingPage = () => {
  return (
    <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <ShoeProduct />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
    </main>
  )
}

export default BuyingPage