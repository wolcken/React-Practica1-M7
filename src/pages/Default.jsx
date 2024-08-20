import Logo from '../components/Logo';
import Description from "../components/Description";
import OpenLink from '../components/OpenLink';
import Contador from "../components/Contador";
import GitHubLink from '../components/GitHubLink';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <GitHubLink />
            </header>
        </>
    );
};

export default Default;