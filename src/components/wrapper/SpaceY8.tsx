interface spaceY8Props {
    children: React.ReactNode
    className?: string
}

export const SpaceY8 = ({ children, className }: spaceY8Props) => {
    return (
        <div className={`space-y-8 ${className}`}>
            {children}
        </div>
    );
};