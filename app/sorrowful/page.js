import { sorrowfulPrePrayer, sorrowfulPrayers, postPrayers } from "@/prayers/prayers"
import CarouselComponent from "@/components/CarouselComponent"

const sorrowful = () => {
  return (
      <main>
          <CarouselComponent  prePrayer={sorrowfulPrePrayer} prayers={ sorrowfulPrayers} postPrayers={postPrayers}/>
    </main>
  )
}

export default sorrowful