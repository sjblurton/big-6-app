import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import MuiThemeProvider from "@/modules/components/library/ThemeProvider/MuiThemeProvider"
import QueryProvider from "@/modules/tanstackQuery/QueryProvider"

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
