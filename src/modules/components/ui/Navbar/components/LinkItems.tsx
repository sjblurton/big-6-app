import React from "react"

import LinkItem from "./LinkItem"

type LinkItemProps = {
    routes: { name: string; path: string }[]
    handleCloseNavMenu: () => void
}

function LinkItems({ routes, handleCloseNavMenu }: LinkItemProps) {
    return routes.length > 0
        ? routes.map(({ name, path }) => (
              <LinkItem
                  key={path}
                  path={path}
                  name={name}
                  handleCloseNavMenu={handleCloseNavMenu}
              />
          ))
        : null
}

export default LinkItems
