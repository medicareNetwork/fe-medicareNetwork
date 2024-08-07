import React, { useState } from 'react';
import Header from './Header';
import VideoSection from './VideoSection';
import './App.css';
import videoSrc from './health.mp4'; // 비디오 파일 경로
import SupplementList from './SupplementList';
import SupplementButton from './SupplementButton';

function App() {
    const [isLoginScreen, setIsLoginScreen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginScreen(true);
    };

    return (
        <div className="App">
            <Header onLoginClick={handleLoginClick} />
            <div className="content">
                {isLoginScreen ? (
                    <LoginScreen />
                ) : (
                    <>
                        <VideoSection videoSrc={videoSrc} />
                        <SupplementButton />
                        <SupplementList />
                    </>
                )}
            </div>
        </div>
    );
}

const LoginScreen = () => {
    return (
        <div className="login-screen">
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">ID</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit" className="login-button">login</button>
                </form>
            </div>
        </div>
    );
};

export default App;