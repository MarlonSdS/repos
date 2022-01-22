import styled from 'styled-components'

export const Container = styled.div`
max-width: 700px;
background-color: #FFF;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0,0,0, 0.2);
padding: 30px;
margin: 80px auto;

h1{
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg{
        margin-right: 10px;
    }
}
`

export const Form = styled.form`
margin-top: 30px;
display: flex;
flex-direction: row;

input{
    flex: 1;
    border-radius: 4px;
    border: 1px solid ${props => (props.error ? '#FF0000' : '#DDD')};
    padding: 10px 15px;
    font-size: 17px;
}
`

export const List = styled.ul`
list-style: none;
margin-top: 20px;

li{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    & + li{
        border-top: 1px solid #eee;
    }
}
a{
    color: #0D2636;
    text-decoration: none;
}
`

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
margin: 5px;
border: none;
border-radius: 5px;
padding: 7px 5px;
color: #0D2636;
background-color: transparent;
`

export const SubmitButton = styled.button.attrs(props =>({
    type: 'submit',
    disabled: props.loading
}))`
background-color: #0D2636;
border: 0;
border-radius: 4px;
margin-left: 10px;
padding: 0 15px;
display: flex;
justify-content: center;
align-items: center;

&[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
}`

