const { render, screen } = require("@testing-library/react")
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => { 
    const category = 'One Punch';

    test('should show loading', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     })

     test('should show items when load images on useFetchGifs', () => { 
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://www.google.com.mx'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://www.google.com.mx'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })