import '@testing-library/jest-dom';
import {renderHook} from '@testing-library/react-hooks';

import {useFetchGifs} from '../../hooks/useFetchGifs';



describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de mostrar el componente correctamente', () => {
        const {result} = renderHook( () => useFetchGifs('One Punch'));
        const {loading, data} = result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
})

