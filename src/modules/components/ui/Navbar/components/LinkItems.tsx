import React from "react"

import LinkItem from "./LinkItem"

type LinkItemProperties = {
    routes: { name: string; path: string }[]
    handleCloseNavMenu: () => void
}

function LinkItems({ routes, handleCloseNavMenu }: LinkItemProperties) {
    return (
        routes.length > 0 &&
        routes.map(({ name, path }) => (
            <LinkItem
                key={path}
                path={path}
                name={name}
                handleCloseNavMenu={handleCloseNavMenu}
            />
        ))
    )
}

export default LinkItems
