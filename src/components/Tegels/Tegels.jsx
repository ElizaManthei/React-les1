export default function Tegels({imageSrc, imageAlt, title, children}) {
    if(title) {
        return(
            <section>
                <h2>
                    {title}
                </h2>
                {children}
            </section>
        )}
    return(
        <section>
            <img
                src = {imageSrc}
                alt = {imageAlt}
            />
        </section>
    )
}