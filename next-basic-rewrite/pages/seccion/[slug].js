export default function Page({query}) {
    const { slug } = query;
    return (
        <>
        <h1>Slug: {slug}</h1>
        </>
    )
}

export async function getServerSideProps({query}) {
    return {
        props: {
            query
        }
    }
}