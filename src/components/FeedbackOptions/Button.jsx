import ButtonStyled from "./Button.styled"

export const Button = ({ type = 'button', children }) => {
    return <ButtonStyled type={type}>{children}</ButtonStyled>
}

