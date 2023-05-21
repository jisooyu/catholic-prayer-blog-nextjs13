import { luminousPrePrayer, luminousPrayers, postPrayers } from "@/prayers/prayers"
import CarouselComponent from "@/components/CarouselComponent"

const Luminous = () => {
  return (
    <main>
      <CarouselComponent prePrayer={luminousPrePrayer} prayers={ luminousPrayers} postPrayers={postPrayers} />
    </main>
  )
}

export default Luminous