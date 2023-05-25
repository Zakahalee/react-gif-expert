const { renderHook, waitFor } = require("@testing-library/react")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")

describe('Test in hook useFetchGifs', () => { 
    test('should return initial state', () => { 
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })
     
    test('should return an image array and isLoading in false', async() => { 
        const {result} = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     })
 })