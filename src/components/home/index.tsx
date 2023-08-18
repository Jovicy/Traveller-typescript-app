import React from 'react'

const Home: React.FC = () => {
    const flexBetween = "flex items-center justify-between";

    return(
        <section id='home' className={`${flexBetween} bg-transparent w-full`}>
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                home pages
            </div>
        </section>
    );
};

export default Home;