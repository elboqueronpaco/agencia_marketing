interface NavbarInterface {
    to: string
    label: string
}
const openMenu = () => {}
export const navbarData: NavbarInterface[] = [
    {
        to: '/cases',
        label: 'Case'
    },
    {
        to: '/services',
        label: 'Services'
    },
    {
        to: '/about-us',
        label: 'About Us'
    },
    {
        to: '/careers',
        label: 'Careers'
    },
    {
        to: '/blog',
        label: 'Blog'
    },
    {
        to: '/contact',
        label: 'Contact'
    }
]

export const navHeroHome: NavbarInterface[]= [
    {
        to: '/services/development',
        label: 'Full-Cycle Product Development'
    },
    {
        to: '/services/prodct-design',
        label: 'Digital Product Design'
    },
    {
        to: '/services/branding',
        label: 'Brading'
    },
    {
        to: '/services/motion-desing',
        label: 'Motion Design Company'
    },
    {
        to: '/services/design-outstaffing',
        label: 'Desing Outstaffing'
    }
]