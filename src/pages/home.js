import React from 'react'
import Header from '../components/header';
import PageSwitchButtons from '../components/pageSwitchButtons';
import './stylesheets/home.css'

const Home = () => {

  return (
    <>

    <body>
        <Header/>

        <div className='buttons'>

            <div className='gameButton'>
                <PageSwitchButtons 
                    name={"Create Game"}
                    func={"game"}
                ></PageSwitchButtons>

                <div className='howToPlayButton'>
                    <PageSwitchButtons 
                        name={"How To Play"}
                        func={"hTP"}
                    ></PageSwitchButtons>
                </div>

            </div>
            
            
        </div>

    </body>
        
        

    </>
  );
}

export default Home;