import React from 'react';
import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value =  'Hola Mundo';
        input.simulate('change', {target: { value } });
        expect( wrapper.find('p').text().trim()).toBe(value);
    })
})