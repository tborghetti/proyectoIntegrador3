import {styleHeader} from '../../style';
function Header() {
    return (
       <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'BUSCANDO A MI', style: {color: 'f6a00d'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={styleHeader.title}
        > 
        </Header>
    );
}
export default Header;