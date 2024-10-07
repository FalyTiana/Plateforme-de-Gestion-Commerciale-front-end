import { useRef } from 'react'
import styles from './Home.module.css'
import Nav from '../component/home/nav'
import Header from '../component/home/header'
import Features from "../component/home/features"
import Pricing from "../component/home/pricing"
import Footer from '../component/home/footer'

function Home() {

    const home = useRef(null)
    const features = useRef(null)
    const pricing = useRef(null)
    const about = useRef(null)

    return (
        <>
            <Nav home={home} features={features} pricing={pricing} about={about} />
            <header ref={home} className={`${styles.container} ${styles.header}`}>
                <Header/>
            </header>
            <section ref={features} className={styles.container}>
            <h2 className={styles.headerText}>NOS FONCTIONNALITÉS</h2>
                <Features/>
            </section>
            <section ref={pricing} className={styles.container}>
                <h2 className={styles.headerText}>PLANS TARIFAIRES</h2>
                <p className={styles.subHeader}>
                    Choisisser le plan qui correspond le mieux à vos besoins
                </p>
                <Pricing />
            </section>
            <footer ref={about} className={`${styles.container} ${styles.footer}`}>
                <Footer/>
            </footer>
        </>
    )
}

export default Home