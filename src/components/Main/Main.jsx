import Banner from './Banner/Banner';
import MyMap from './Map/MyMap';
import Form from './Form/Form';

const Main = (props) => {
    return ( 
        <main>
            <Banner handelclick={props.handelclick}/>
            <MyMap/>
            <Form setUserData={props.setUserData} handleSubmit={props.handleSubmit} formMessage={props.formMessage}/>
        </main>
    );
}
 
export default Main;