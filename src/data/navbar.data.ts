interface NavbarInterface {
    to: string
    label: string
    openMenu?: any
}
const openMenu = () => {}
export const navbarMobileData: NavbarInterface[] = [
    {
        to: '/cases',
        label: 'Case',
        openMenu: openMenu()
    },
    {
        to: '/services',
        label: 'Services',
        openMenu: openMenu()
    },
    {
        to: '/about-us',
        label: 'About Us',
        openMenu: openMenu()
    },
    {
        to: '/Careers',
        label: 'Careers',
        openMenu: openMenu()
    }
]