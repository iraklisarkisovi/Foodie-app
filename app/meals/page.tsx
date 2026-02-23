import Link from "next/link";
import "../globals.css"

export default function MealsPage() {
    return(
        <>
            <main>
                <h1 style={{ color: 'white', textAlign: 'center' }}>
                    Time to get started!
                </h1>
            </main>
        </>
        // <div>
        //     meals page
        //     <div>
        //         <Link href={"/meals"}>Home</Link>
        //         <Link href={"/community"}>community</Link>
        //         <Link href={"/meals/share"}>share</Link>
        //     </div>
        // </div>
    )
}