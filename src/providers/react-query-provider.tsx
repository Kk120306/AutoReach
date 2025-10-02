'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ReactQueryProviderProps = {
    children: React.ReactNode
}

const client = new QueryClient();

const ReactQueryProvider = (props: ReactQueryProviderProps) => {


    return (
        <QueryClientProvider client={client}>
            {props.children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider
