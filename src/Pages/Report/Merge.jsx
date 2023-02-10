import React from "react"
import Image from "./Image"
const Merge = (number, date, totalHours, formattedHours) => (
    <Button
        className={classes.download}
        onClick={
            async () => {
                const doc = <Image number={number} date={date} totalHours={totalHours} formattedHours={formattedHours} />
                const asPdf = pdf()
                asPdf.updateContainer(doc)
                const blob = await asPdf.toBlob()
                saveAs(blob, `PDF${number}.pdf`)
            }}>
        Download
    </Button>
) 

export default Merge