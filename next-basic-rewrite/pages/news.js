export default function Page({query}) {
    const { type, year, month, day, id } = query;
    return (
        <>
            <h1>Type: {type}</h1>
            <h1>Year: {year}</h1>
            <h1>Month: {month}</h1>
            <h1>day: {day}</h1>
            <h1>ID: {id}</h1>
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