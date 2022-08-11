export default function Page({query}) {
    const { tagid, tagslug } = query;
    return (
        <>
        <h1>Slug: {tagslug}</h1>
        <h1>ID: {tagid}</h1>
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