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