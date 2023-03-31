import Meta from './Meta/Meta';
export default function Layout({ children }) {
    return (
        <>            
            <Meta/>
            <main>{children}</main>
        </>
    );
}
