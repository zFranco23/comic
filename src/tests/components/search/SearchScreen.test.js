import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import SearchScreen from "../../../components/search/SearchScreen"




describe('Pruebas en <SearchScreen />', () => {
    
    const historyMock = {
        push : jest.fn(),
    }
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <SearchScreen history={historyMock}/>
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe("Search a hero ...");
    })
    
    test('Debe de mostrar a robin y el input con el valor del queryString ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=robin"]}>
                <Route path="/search">
                    <SearchScreen history={historyMock}/>
                </Route>
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('robin');
        expect(wrapper.find('HeroCard').exists()).toBe(true);
    })
  
    
    test('Debe de mostrar un error si no se encuentra el Hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=robin123"]}>
                <Route path="/search">
                    <SearchScreen history={historyMock}/>
                </Route>
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is not a hero with robin123 ...');
        expect(wrapper.find('HeroCard').exists()).toBe(false);
    })
    
    test('Debe de llamar el push del history', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <Route path="/search">
                    <SearchScreen history={historyMock}/>
                </Route>
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change',{
            target:{
                name :"searchText",
                value:"robin"
            }
        })
        wrapper.find('form').prop('onSubmit')({
            preventDefault : () => {}
        });

        expect(historyMock.push).toHaveBeenCalledWith('?q=robin');
    })
    
})
