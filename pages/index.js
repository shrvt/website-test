import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Ankur Shrivastava | Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header title="Ankur Shrivastava"/>
                <a href="https://www.linkedin.com/in/ashrvt/" className="icons8-linkedin"></a>
                <p className="description">
                    🚧 🚧 Currently working on something awesome. Stay tuned! 🚧 🚧
                </p>
            </main>
            <Footer/>
        </div>
    )
}
