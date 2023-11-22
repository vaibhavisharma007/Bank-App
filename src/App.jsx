import React from 'react'
import styles from './styles';
import {Hero,Navbar, Buisness,Billing,CardDeal,Testimonials,Clients,CTA,Stats,Footer} from './components';

const App = () => 
 (
    <div className="bg-primary w-full overflow-hidden " >
      <div className={`${styles.paddingX} ${styles.flexCenter}` }>
          <div className={`${styles.boxWidth}`}>

            <Navbar/>
          </div>
      </div>
      <div className="bg-primary ${styles.flexStart}">
        <div className={`${styles.boxWidth}`}></div>
            <Hero/>
      </div>
      <div className="bg-primary  ${styles.flexStart} sm:px-16 px-6">
        <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Buisness/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients />
        <CTA/>
        <Footer/>
        </div>
      </div>




    </div>

    
  );


export default App