import styled from 'styled-components';

export const ButtonNavItem = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid;
    border-radius: 8px;
    padding: 5px 0;
    width: 50px;
    cursor: pointer;
    transition: all .2s;

`

export const Options = styled.div`
    cursor: pointer;
    border-width: 1px;
    border-radius: 100%;
    box-shadow: 10px;
    padding: 5px 3px;

    &:checked {
        background-color: teal;
        color: white;
        border-color: teal;
    }

    &:focus {
        box-shadow: outline;
    }
`;

// {...checkbox}
//         cursor='pointer'
//         borderWidth='1px'
//         borderRadius='100%'
//         boxShadow='md'
//         _checked={{
//           bg: 'teal.600',
//           color: 'white',
//           borderColor: 'teal.600',
//         }}
//         _focus={{
//           boxShadow: 'outline',
//         }}
//         px={5}
//         py={3}