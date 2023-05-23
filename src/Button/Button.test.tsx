import { screen, render } from '@testing-library/react'
import { Button } from './Button'
import userEvent from '@testing-library/user-event'

const mockCb = jest.fn();
const mockText = 'mock-text';
const mockColor = 'red';
const mockSize = 90;

describe('Button unit tests',()=>{
    describe('Functionality',()=>{
        it('Should call cb when clicked',async ()=>{
            const user = renderButton();
            await user.click(await screen.findByRole('button'))
            expect(mockCb).toHaveBeenCalled()
        })
    })
    describe('Content',()=>{
        it('Should contain the provided text',async ()=>{
            renderButton();
            const button = await screen.findByRole('button')
            expect(button.innerHTML).toEqual(mockText)
        })
    })
})

const renderButton = () => {
    const user = userEvent.setup()
    render(<Button cb={mockCb} text={mockText} size={mockSize} color={mockColor} />)
    return user;
}