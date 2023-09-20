import { HeroSection, HeroTitle } from "./Section.styled"

const Section = ({title, children}) => {
  return (
    <HeroSection>
      <HeroTitle>
        {title}
      </HeroTitle>
        {children}
    </HeroSection>
  )
}

export default Section