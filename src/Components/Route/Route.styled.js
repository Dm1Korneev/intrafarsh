import styled from 'styled-components';

export const OuterContainer = styled.div`
    padding-top: 18px;
    padding-bottom: 27px;
`;

export const Container = styled.div`
    position: relative;
    height: 190px;
`;

export const AvatarContainer = styled.div`
    position: absolute;
    left: 0px;
    top: -27px;
`;

export const RouteTitleContainer = styled.div`
    position: absolute;
    left: 70px;
    bottom: -17px;
`;

export const RouteImageContainer = styled.div`
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    background: linear-gradient(310.8deg, #FFFFFF -30.5%, rgba(255, 255, 255, 0) 80.89%), 
        url(${(props) => props.url});
    background-size: cover;    
`;

export const HeaderContainer = styled.div`
    height: 28px;
    padding-left: 65px;
    padding-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserTitle = styled.div`
    flex-grow: 1;
    font-size: 18px;
`;
