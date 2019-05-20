import Head from 'next/head';
import './pageHead.scss'
const PageHead = ({title}) => {
    return (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet"></link>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
        />
        <style jsx>{`
            body {
                font-family: 'Montserrat', sans-serif;
            }
        `}</style>
    </Head>
    )
}

export default PageHead