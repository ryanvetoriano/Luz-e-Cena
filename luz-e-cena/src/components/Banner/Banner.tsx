import styles from "./Banner.module.css"

type BannerProps = {
    src: string;
    alt: string;
}

export default function Banner({src, alt}: BannerProps){
    return(
        <img src={src} alt={alt} className={styles.banner} />
    )
}