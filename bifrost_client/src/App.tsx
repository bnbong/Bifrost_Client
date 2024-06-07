import { useState } from 'react'
import { Box, Button, Heading, VStack, Image } from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <VStack spacing={4}>
            <Box>
                <a href="https://vitejs.dev" target="_blank">
                    <Image src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <Image src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </Box>
            <Heading as="h1" size="xl">
                Vite + React
            </Heading>
            <Box className="card">
                <Button onClick={() => setCount(count + 1)}>
                    count is {count}
                </Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </Box>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </VStack>
    )
}

export default App
