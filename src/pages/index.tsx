import * as React from 'react';

import { useRouter } from 'next/router';

import ReduxButton from 'components/ReduxButton';
import CustomHead from 'layout/Head';
import { AppConfig } from 'utils/AppConfig';

const App = () => {
    const router = useRouter();
    return (
        <div className="App">
            <CustomHead title={AppConfig.title} description={AppConfig.description} />
            <header className="App-header">
                <img src={`.${router.basePath}/assets/images/logo.svg`} className="App-logo" alt="logo" />
                <p style={{ marginBottom: '32px' }}>{AppConfig.description}</p>
                <ReduxButton />
                <a className="App-link" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    Learn NextJS
                </a>
            </header>
        </div>
    );
};

export default App;
