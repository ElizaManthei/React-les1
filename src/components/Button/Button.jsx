export default function Button({buttonText, isDisabled, print}) {
    return(
        <button
            disabled = {isDisabled}
            onClick = {print}
        >
            {buttonText}
        </button>
    )
}