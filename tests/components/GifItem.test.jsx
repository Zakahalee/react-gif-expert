const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe('Pruebas en <GifItem/>', () => { 
    const title = 'Saitama';
    const url = 'https://google.com.mx';

    test('should match with snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })

     test('should show image and indicated URL', () => { 
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole('img').src).toContain(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toContain(url);
        expect(alt).toBe(title);
      });

    test('should show title in the component', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
     })
 })