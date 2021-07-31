import { mount} from "enzyme"
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter"



describe('Pruebas en <AppRouter />', () => {
    
    const contextValue={
        dispatch : jest.fn(),
        user:{
            logged:false
        }
    }
    test('Debe mostrar el login si no esta autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el componente marvel si está autenticado', () => {
        const contextValue={
            dispatch : jest.fn(),
            user:{
                name:"Franco",
                id :"zFranco23",
                logged:true,
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    
})
