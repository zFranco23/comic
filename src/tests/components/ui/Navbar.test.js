import { mount } from "enzyme"
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import Navbar from "../../../components/ui/Navbar"
import { types } from "../../../types/types"



describe('Pruebas en <Navbar />', () => {
    
    const contextValue={
        dispatch : jest.fn(),
        user:{
            name : "Franco",
            id: "zFranco23",
            logged:true
        }
    }
    const historyMock = { 
        push: jest.fn(),
        location: {}, 
        listen: jest.fn(),
        replace: jest.fn(),
        createHref : jest.fn()
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    })

    test('Debe de llamar el logout y usar el history', () => {
        
        /* wrapper.find('button').prop('onClick')(); */
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');


    })
    
})
