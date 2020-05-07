import Link from 'next/link';
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const Header = () => (
    <HeaderWrapper>
      <Logo>Golf League</Logo>
      <Menu>
        <Link href={"/scorecard"}>
          <MenuItem>Scorecard</MenuItem>
        </Link>
      </Menu>
    </HeaderWrapper>
)

const HeaderWrapper = styled.nav`
  ${tw`flex flex-row w-full px-4 py-8 bg-green-300`}
`
const Logo = styled.div`
  ${tw`px-4`}
`
const Menu = styled.nav`
  ${tw`flex flex-row`}
`
const MenuItem = styled.a`
  ${tw`px-4 hover:underline`}
`

export default Header;
