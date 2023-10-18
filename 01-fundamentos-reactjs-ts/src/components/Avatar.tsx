import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean; //not necessary with ? 
    src: string;
    alt?: string; //not necessary with ?
}

export function Avatar({ hasBorder = true, src, alt}: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
            alt={alt}
        />
    )
}