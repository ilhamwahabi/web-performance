import React from 'react'

function Link({ href, children }) {
    return (
        <a href={href} target="_blank" style={{ color: 'white' }}>
            {children}
        </a>
    )
}

export default Link
