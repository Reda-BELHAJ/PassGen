import Config from '../components/Config'
import Main from '../components/Main'

const home = () => {
    return (
        <>
            <div className="container max-w-4xl mx-auto pb-24 pt-16 px-10">
                <Main />
                <Config />
            </div>
        </>
    )
}

export default home
