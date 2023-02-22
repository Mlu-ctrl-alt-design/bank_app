import styles from './styles';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './Components';

export default function App() {
  return (
    
    <div className="bg-primary w-full overflow-hidden text-white">
     <div className={`${styles.flexstart} ${styles.paddingX}`}> 
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
     </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          Footer
        </div>
      </div>

    </div>
  )
}