import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import LoginScreen from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"


describe('Pruebas en <LoginScreen />', () => {
    
    const contextValue = {
        dispatch : jest.fn()
    }

    const history={
        replace : jest.fn()
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen
                history={history}
            />
        </AuthContext.Provider>
    )
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de realizar el dispatch  y la navegacion', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');
        
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.login,
            payload:{
                id:"zFranco23",
                name:"Franco"
            }
        });
        expect(history.replace).toHaveBeenCalled();

        localStorage.setItem('lastPath','/marvel');

        handleClick();

        expect(history.replace).toHaveBeenCalledWith('/marvel');


    })
    
    
})
