import React, { useState } from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "#TBT: Non-Violent Cannabis Prisoners Have Trustful Partners They Can Rely on to Regain Freedom",
            date: "Sep 12, 2023",
            image: 'Cannabis.jpg',
            alt: 'Cannabis.jpg',
            read: "4",
            content: "Despite the fact that many states across the US have legalized the use of cannabis, more than 40,000 people are still behind bars because of non-violent marijuana possession. And while the community enjoys the benefits of the legalization of the plant, cannabis cultivation platform AROYA can’t help but wonder what it can possibly do to help the incarcerated regain their freedom, particularly in today’s context when one can legally buy cannabis.    Creatively imagined by the team at Serviceplan Innovation and just in time for the international day for cannabis (celebrated on 20 April), the brand launched “Freedom Grams,” a platform through which the stories of some of these prisoners are made visible. During this week’s #ThrowBrandThursday column, we are reminding you of the campaign that AROYA developed in collaboration with retail and distribution partner GABY Inc. and non-profit Last Prisoner Project, with the efforts directed towards bringing justice to those imprisoned for something that is no longer a crime.",
        },
        {
            id: 2,
            title: "OREO Replaces Its Trademark Blue with a Black-And-White Color Palette",
            date: "Sep 1, 2023",
            image: 'Oreo.jpg',
            alt: 'Oreo.jpg',
            read: "3",
            content: "Did you know that “Oreo” is the 6th most popular name people give to black-and-white pets? You didn’t? Well, that’s understandable; not even the brand after which these animals received their names hasn’t been aware of this fact up until just recently. According to Rover.com, many pets proudly wear their names after the Mondelez-International-owned cookie brand, OREO. Unfortunately, not many of the Dubai-based Oreos are lucky enough to live with their families for the rest of their lives.  Ahead of the International Homeless Animals’ Day (August 20), OREO steps in to sweeten the fate of these furry beings in the UAE (as well as the ones which are not called Oreo), hoping that it can help these four-legged friends find their forever parents. Teaming up with creative agency Saatchi & Saatchi MEA and in partnership with two of the largest pet rescues in the region — K9 Friends and Yanni Animal Welfare — the company launches the “Oreo & Friends” initiative.",
        },
        {
            id: 3,
            title: "Heinekicks: The Sole Shoes with Beer-Injected Soles",
            date: "Aug 25, 2023",
            image: 'Heinekicks.jpg',
            alt: 'Heinekicks.jpg',
            read: "4",
            content: "Brewing company Heineken® has recently unveiled its new lager. Known as Heineken® Silver, the beer brings “freshness in a can” and is designed to delight a new generation of drinkers. According to the company, the brew is “an extra-refreshing lager with a less bitter taste and a crisp, subtle finish that’s effortless to drink,” setting itself apart from the brand’s original beer thanks to the smooth taste it delivers, an aroma that’s carefully obtained following an ice-cold lagering process.   Heineken® Silver is different and so is the initiative aimed at celebrating it. Helped by Le Pub and BBH Singapore and sneaker designer Dominic Ciambrone, aka “The Shoe Surgeon,” the brand launched a limited-edition pair of shoes that faithfully reflects the smooth taste of the recently revealed beer. Dear readers, beer enthusiasts, and sneakerheads, here is a product that you will most probably like to have in your wardrobe: Heinekicks!",
        },
        {
            id: 4,
            title: "TABASCO® Condiments Its Brand with a New, Spicy Identity",
            date: "Aug 25, 2023",
            image: 'TABASCO.jpg',
            alt: 'TABASCO.jpg',
            read: "2",
            content: "The TABASCO® Brand sauce is appreciated by many — around the world and even in outer space. Launched in 1868 by McIlhenny Company, the condiment has maintained its instantly recognizable flavor across all of these years, pampering the taste buds of some of the most demanding consumers.   The hot condiment made it to many restaurant tables around the world and is served by space shuttle astronauts as well, who use the sauce to make their meals taste better. It is a global phenomenon indeed, with many other famous people having a particular affinity for this condiment: Not only is the sauce served on Air Force One but TABASCO is proud to say that Queen Elizabeth is one of its most famous fans.",
        },
        {
            id: 5,
            title: "Alexander McQueen Sneakers Set the Rhythm for Mette’s Gracious Dance",
            date: "Aug 25, 2023",
            image: 'Sneakers.jpeg',
            alt: 'Sneakers.jpeg',
            read: "2",
            content: "To promote its Sprint Runner sneakers, fashion house Alexander McQueen launched a beautiful film, focusing on some elements that, apparently, are at opposite ends: Comfort and elegance, two details that award-winning director and visual artist Sophie Muller of PRETTYBIRD played with so much care that she made the combination seem a natural one.  Featuring singer, songwriter, and dancer Mettenarrative, the film takes inspiration from the artist’s “fiercely beautiful physicality,” sending the audience on a captivating journey where the world of sports moves rhythmically to that of fashion, the public eventually witnessing a gracious dance performance that is as elegant as the sneakers’ aesthetics are.",
        },
    ];

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (blog) => {
        setSelectedCard(blog);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {selectedCard && (
                <div className="selected-blog-card">
                    <p className='selected-title'>{selectedCard.title}</p>
                    <img className='selected-image' alt={selectedCard.alt} src={require(`./${selectedCard.image}`)} />
                    <div className='selected-content'>
                        <p>{selectedCard.content}</p>
                    </div>
                </div>
            )}
            <div className='blog-heading'>
                <span className='header-border'></span>
                <p className='topic'>Industry Trends</p>
                <span className='header-border'></span>
            </div>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        {...blog}
                        onClick={() => handleCardClick(blog)}
                    />
                ))}
            </div>
        </>
    );
};

const BlogCard = ({ title, date, image, alt, read, onClick }) => {
    return (
        <>
            <div className='portlet'>
                <a href="#" onClick={onClick} className="blog-card">
                    <img className='blog-image' alt={alt} src={require(`./${image}`)} />
                    <h3>{title}</h3>
                    <div className='portlet-footer'>
                        <p>{date}</p>
                        <p>{read} min read</p>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Blog;

