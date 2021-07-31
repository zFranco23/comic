import { shallow , mount} from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import HeroScreen from "../../../components/heroes/HeroScreen"



describe('Pruebas en <HeroScreen />', () => {
    
    const historyMock = {
        length: 10,
        push : jest.fn(),
        goBack : jest.fn(),
    }
    
    test('Debe de mostrar el componente redirect si no hay argumentos en el URL ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero"]}> {/* Objeto , con url y argumentos que necesite enviar */}
                <HeroScreen history={historyMock}/>
            </MemoryRouter>
        )
/*         console.log("----",wrapper.html(),"-----"); */
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    
    test('Debe de mostrar un hero si el parametro existe y se encuentra ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path="/hero/:heroeId">
                    <HeroScreen history={historyMock}/>
                </Route>
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('Debe regresar a la pantalla de los  heroes con PUSH', () => {
        const historyMock = {
            length: 1,
            push : jest.fn(),
            goBack : jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path="/hero/:heroeId">
                    <HeroScreen history={historyMock}/>
                </Route>

                {/* 
                    <Route  component = {  (props)=> <Component />}/>
                    Cuando colocas props , estos son los props
                    que envia route al componente, por eso vemos que sin mandar props
                    algunos tienen history , location, etc
                */}
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click');

        expect(historyMock.push).toHaveBeenCalled();
    })


    test('Debe regresar la pagina anterior con goBack ', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Route path="/hero/:heroeId">
                    <HeroScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click');

        expect(historyMock.goBack).toHaveBeenCalled();
    })

    test('Debe llamar el redirect', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spiderasdasdasdasd"]}>
                <Route path="/hero/:heroeId">
                    <HeroScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        )

        /* console.log(wrapper.html()); */
        /* expect(wrapper.find('Redirect').exists()).toBe(true); */
        expect(wrapper.text()).toBe("");
    })
    
    


    
})
