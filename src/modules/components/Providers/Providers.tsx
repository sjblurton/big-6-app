import MuiThemeProvider from "@/modules/components/library/ThemeProvider/MuiThemeProvider"
import QueryProvider from "@/modules/tanstackQuery/QueryProvider"

function Providers({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <MuiThemeProvider>
            <QueryProvider>{children}</QueryProvider>
        </MuiThemeProvider>
    )
}

export default Providers
