import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import MuiThemeProvider from "@/components/Providers/ThemeProvider/MuiThemeProvider"

import QueryProvider from "./QueryProvider/QueryProvider"

function Providers({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <MuiThemeProvider>
            <QueryProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                {children}
            </QueryProvider>
        </MuiThemeProvider>
    )
}

export default Providers
