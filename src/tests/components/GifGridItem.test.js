import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    test('debe de mostrar el componente correctamente', () => {

        const title = 'Un título';
        const url = 'http://localhost/algo.jpg';

        const wrapper = shallow(<GifGridItem title={title} url={url} />);
        expect( wrapper ).toMatchSnapshot();
    })
})