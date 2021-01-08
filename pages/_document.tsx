import react from "react"
import Document,{Html,Head,NextScript,Main} from "next/document"

export default class CustomDocument extends Document{
    render(){
        return(
            <Html>
            <Head>
                <meta property="custom" content="Next_JS demo" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
            </Html>
        )
    }
}