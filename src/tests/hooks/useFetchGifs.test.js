import '@testing-library/jest-dom';
import {renderHook} from '@testing-library/react-hooks';

import {useFetchGifs} from '../../hooks/useFetchGifs';



describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de mostrar el componente correctamente', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch'));
        const {loading, data} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch'));

        await waitForNextUpdate();

        const {loading, data} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

})

