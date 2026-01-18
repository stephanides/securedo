type ContainerProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export const Container = ({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) => {
  return (
    <Component
      className={`mx-auto w-full max-w-[1332px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  )
}