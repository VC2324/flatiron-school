
export default function Card({isCard, randomizedCard}) {
    //got it to not crash with {}
 

    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            {isCard}
            <button onClick={randomizedCard}>Nah.</button>
        </h2>
    )
  }