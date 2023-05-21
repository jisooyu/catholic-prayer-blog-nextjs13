import { joyfulPrePrayer, joyfulPrayers, postPrayers } from "@/prayers/prayers"
import CarouselComponent from "@/components/CarouselComponent"

const Joyful = () => {

  return (
    <main>
      <CarouselComponent prePrayer={joyfulPrePrayer} prayers={ joyfulPrayers} postPrayers={postPrayers} />
    </main>
  )
}

export default Joyful