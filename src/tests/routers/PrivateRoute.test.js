import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import PrivateRoute from "../../routers/PrivateRoute"



describe('Pruebas en <PrivateRoute />', () => {
    
    const props = {
        location:{
            pathname:"/marvel"
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe mostrar el componente si está autenticado y guardar en localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={true} 
                    component={() => <span>Simulating a component!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect( wrapper.find('span').exists() ).toBe( true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath',JSON.stringify('/marvel'));
        
    })

    test('Debe de bloquear el componente si no está autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={false} 
                    component={() => <span>Simulating a component!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(false);

    })
    
    
})
