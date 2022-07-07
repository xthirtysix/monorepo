import { render } from '@testing-library/react'
import { Button } from '@monorepository/ui'

describe('Button', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Button>Hi</Button>)
        expect(baseElement).toBeTruthy()
    })
})
