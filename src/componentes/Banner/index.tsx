import './Banner.css'

interface BannerProps {
    imageUrl: string;
    altText?: string;
}

export const Banner = ({ imageUrl, altText }: BannerProps) => {
    return (
        <header className="banner">
            <img src={imageUrl} alt={altText}/>
        </header>
    )
}

export default Banner