
export const Error = (errorCode:any) => {
  if (errorCode?.errorCode === 404) {
    return (
      <div>
        <h2>Vi kan inte hitta sidan du sökte.</h2>
        <p>Vi är ledsna om det ställer till det för dig och vi hoppas att du ska hitta det du letar efter.</p>
        <p>Fel: 404</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Något gick fel, försök gärna igen om en liten stund.</h2>
        <p>Vi är ledsna om det ställer till det för dig och vi hoppas att du ska hitta det du letar efter.</p>
        <p>Fel: 500</p>
      </div>
    )
  }
}