export default function Producten({label, imageSrc, imageAlt, name, price}) {
    return(
        <article>
            <span>{label}</span>
            <img
                src = {imageSrc}
                alt = {imageAlt}
            />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    )
}