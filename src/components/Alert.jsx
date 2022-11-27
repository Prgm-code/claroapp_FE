

export function Alert ({ variant
, children }) {
    return (
        <div className={`alert alert-${variant}`} role="alert">
            {children}
        </div>
    )
}
